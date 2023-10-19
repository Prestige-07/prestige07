import { createAsyncThunk } from '@reduxjs/toolkit';
import instance from 'redux/auth/authOperations';
import toast from 'react-hot-toast';

export const getReportingByDates = createAsyncThunk(
  'reports/getReportingByDates',
  async (data, thunkAPI) => {
    try {
      const response = await instance.get('/api/reporting', {
        params: data,
      });
      return response.data;
    } catch (error) {
      toast.error(error.response.data.message);
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
