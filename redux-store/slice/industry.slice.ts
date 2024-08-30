// src/redux-store/slice/auth.slice.ts
import { createAsyncThunk, createSlice, isRejectedWithValue, PayloadAction } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';
import { toast } from 'react-toastify';
import axiosInstance from '../../axios/Axios';

const BASE_URL = 'http://localhost:8001/api/v1';


interface SiteInformation {
  total_sites: number;
  active_sites: number;
  offline_sites: number;
  delayed_sites: number;
  delayed_parameters: number,
  distinct_parameters: number,
  rtm_stations: number,
  under_maintenance: number,
}

interface AuthState {
  isAddIndustryModal: boolean | false;
  isAddDeviceModal:boolean | false ;
  isLoader: boolean;
  isError: boolean | null;
  industryList: [];
  industryDetails: {};
  addIndustry: [];
  industryLocation:[];
  mapCordinates:[];
  siteInformation: SiteInformation;
}

const initialState: AuthState = {
  isAddIndustryModal: false,
  isAddDeviceModal:false,
  isLoader: false,
  isError: null,
  industryList: [],
  addIndustry: [],
  industryLocation:[],
  mapCordinates:[],
  industryDetails: {},
  siteInformation: {
    total_sites: 0,
    active_sites: 0,
    offline_sites: 0,
    delayed_sites: 0,
    delayed_parameters: 0,
    distinct_parameters: 0,
    rtm_stations: 0,
    under_maintenance: 0,
  },
};

export const fetchIndustryList = createAsyncThunk(
  "stats/fetchIndustryList",
  async () => {
    try {
      let url = `${BASE_URL}/industry/all`;
      const { data }: any = await axiosInstance.get(url);

      return data.data;
    } catch (error: any) {
      return isRejectedWithValue(error);
    }
  }
);

export const fetchMap = createAsyncThunk(
  "stats/fetchMap",
  async () => {
    try {
      let url = `${BASE_URL}/industry/maps`;
      const { data }: any = await axiosInstance.get(url);

      return data.data;
    } catch (error: any) {
      return isRejectedWithValue(error);
    }
  }
);

export const fetchIndustryDetails = createAsyncThunk(
  "IndustryDetails/details",
  async (params: { industryId: number }) => {
    try {
      let url = `${BASE_URL}/industry/${params.industryId}`;
      const response = await axiosInstance.get(url);
      return response.data;
    } catch (error) {
      return isRejectedWithValue(error);
    }
  }
);



export const fetchIndustryLocation = createAsyncThunk(
  "IndustryLocation/Location",
  async (params: { industryId: number }) => {
    try {
      let url = `${BASE_URL}/industry/${params.industryId}`;
      const response = await axiosInstance.get(url);
      return response.data;
    } catch (error) {
      return isRejectedWithValue(error);
    }
  }
);
export const addIndustry = createAsyncThunk(
  "stats/addIndustry",
  async (payload: object, { rejectWithValue }) => {
    try {
      let url = `${BASE_URL}/industry/add`;
      const { data }: any = await axiosInstance.post(url, payload);
      console.log("Industry Added", data)
      return data.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data || "Failed to add industry");
    }
  }
);

export const fetchSiteInformation = createAsyncThunk(
  "stats/fetchSiteInformation",
  async () => {
    try {
      let url = `${BASE_URL}/industry/cardData`;
      const { data }: any = await axiosInstance.get(url);
      console.log("Fetched Data", data)
      return data.data;
    } catch (error: any) {
      return isRejectedWithValue(error);
    }
  }
);


const industrySlice = createSlice({
  name: 'industry',
  initialState,
  reducers: {
    setAddIndustryModalOpen(state, action: PayloadAction<boolean>) {
      state.isAddIndustryModal = action.payload;
    },

    setAddDeviceModalOpen(state, action: PayloadAction<boolean>) {
      state.isAddDeviceModal = action.payload;

  },
},
  extraReducers: (builder) => {
    builder
      .addCase(fetchIndustryList.fulfilled, (state, action) => {
        state.industryList = action.payload;
      })
      .addCase(fetchIndustryList.rejected, (state, action) => {
        state.isError = true;
      })
      .addCase(addIndustry.fulfilled, (state, action) => {
        state.addIndustry = action.payload;
      })
      .addCase(fetchSiteInformation.fulfilled, (state, action) => {
        state.siteInformation = action.payload;
      })
      .addCase(fetchIndustryDetails.fulfilled, (state, action) => {
        state.industryDetails = action.payload.data;
      })
      .addCase(fetchIndustryLocation.fulfilled, (state, action) => {
        state.industryLocation = action.payload.data;
      })
      .addCase(fetchMap.fulfilled, (state, action) => {
        state.mapCordinates = action.payload;
      })

  }
});
export const { setAddIndustryModalOpen ,setAddDeviceModalOpen} = industrySlice.actions;

export default industrySlice.reducer;
