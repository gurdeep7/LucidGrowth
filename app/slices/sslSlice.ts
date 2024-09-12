"use client";

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface SslInfoData {
  valid: boolean;
  expirationDate: string;
  issuer: string;
  subject: string;
  validForDomain: boolean;
  caValid: boolean;
  selfSigned: boolean;
  revoked: boolean;
}

interface SslState {
  sslInfo: SslInfoData | null;
  loading: boolean;
  error: string | null;
}

const initialState: SslState = {
  sslInfo: null,
  loading: false,
  error: null,
};

// Async thunk for API call
export const fetchSslInfo = createAsyncThunk(
  'ssl/fetchSslInfo',
  async (domain: string, { rejectWithValue }) => {
    try {
      const response = await axios.post('/api/ssl-check', { domain });
      return response.data;
    } catch (err) {
      return rejectWithValue('Failed to fetch SSL certificate info');
    }
  }
);

const sslSlice = createSlice({
  name: 'ssl',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSslInfo.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSslInfo.fulfilled, (state, action) => {
        state.sslInfo = action.payload;
        state.loading = false;
      })
      .addCase(fetchSslInfo.rejected, (state, action) => {
        state.error = action.payload as string;
        state.loading = false;
      });
  },
});

export default sslSlice.reducer;
