// src/redux-store/slice/auth.slice.ts
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';
import { toast } from 'react-toastify';
import { ApiResponse } from '../types';
import axiosInstance from '../../axios';
const BASE_URL = 'http://localhost:3000/api/v1';

interface AuthState {
  user: object | null;
  isLoader: boolean;
  isError: boolean | null;
}

const initialState: AuthState = {
  user: null,
  isLoader: false,
  isError: null,
};

export const loginUser = createAsyncThunk<ApiResponse, any>(
  "auth/loginUser",
  async (data, { rejectWithValue }) => {
    try {
      const url = `${BASE_URL}/auth/login`;
      const resp = await axiosInstance.post(url, data)
      if (resp) {
        Cookies.set('token', resp?.data?.token);
        Cookies.set('user', JSON.stringify(resp.data));
        return resp.data;
      }
    } catch (error: any) {
      console.log("Login error:", error);
      if (error.response && error.response.status === 401) {
        return rejectWithValue("Unauthorized");
      } else {
        return rejectWithValue("Login failed");
      }
    }
  }
);

export const logoutUser = createAsyncThunk<ApiResponse>(
  "auth/logoutUser",
  async () => {
    const result = await axiosInstance.get(`${BASE_URL}/auth/logout`);
    Cookies.remove('token');
    Cookies.remove('user');
    return result.data;
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.fulfilled, (state, action: PayloadAction<ApiResponse>) => {
        if (action.payload) {
          state.user = action.payload.data;
          state.isError = false;
          state.isLoader = false;
          if (action.payload.statusCode === 200) {
            toast.success(action.payload.message);
          } else {
            toast.error(action.payload.message);
          }
        }
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isError = true;
        state.isLoader = false;
        toast.error(action.error.message || "Login failed");
      })
      .addCase(loginUser.pending, (state) => {
        state.isLoader = true;
      })
      .addCase(logoutUser.fulfilled, (state, action: PayloadAction<ApiResponse>) => {
        if (action.payload) {
          state.user = null;
          state.isError = false;
          state.isLoader = false;
          if (action.payload.statusCode === 200) {
            toast.success(action.payload.message);
          } else {
            toast.success(action.payload.message);
          }
        }
      })
      .addCase(logoutUser.rejected, (state, action) => {
        state.isError = true;
        state.isLoader = false;
        toast.error(action.error.message || "Logout failed");
      })
      .addCase(logoutUser.pending, (state) => {
        state.isLoader = true;
      });
  }
});

export default authSlice.reducer;
