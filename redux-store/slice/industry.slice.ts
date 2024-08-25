// src/redux-store/slice/auth.slice.ts
import { createAsyncThunk, createSlice,isRejectedWithValue, PayloadAction } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';
import { toast } from 'react-toastify';
import axiosInstance from '../../axios/Axios';

const BASE_URL = 'http://localhost:8001/api/v1';

interface AuthState {
  isAddIndustryModal: boolean | false;
  isLoader: boolean;
  isError: boolean | null;
  industryList: [];
  addIndustry:[];
}

const initialState: AuthState = {
  isAddIndustryModal: false,
  isLoader: false,
  isError: null,
  industryList: [],
  addIndustry:[],
};

export const fetchIndustryList = createAsyncThunk(
  "stats/fetchIndustryList",
  async () => {
    try {
      let url = `${BASE_URL}/industry/all`;
      const { data }: any = await axiosInstance.get(url);
      console.log("Fetched Data", data)
      return data.data;
    } catch (error: any) {
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


const industrySlice = createSlice({
  name: 'industry',
  initialState,
  reducers: {
    setAddIndustryModalOpen(state, action: PayloadAction<boolean>) {
      state.isAddIndustryModal = action.payload;
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

  }
});
export const { setAddIndustryModalOpen } = industrySlice.actions;

export default industrySlice.reducer;
