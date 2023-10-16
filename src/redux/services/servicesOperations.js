import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';

// axios.defaults.baseURL = 'https://car-washing-backend.onrender.com';
axios.defaults.baseURL = 'http://localhost:3001/';

export const addService = createAsyncThunk(
  '/addService',
  async (data, thunkAPI) => {
    try {
      const response = await axios.post('/api/services', data);
      return response.data;
    } catch (error) {
      toast.error(error.response.data.message);
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const getAllServices = createAsyncThunk(
  '/getServices',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/api/services');
      return response.data;
    } catch (error) {
      toast.error(error.response.data.message);
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
