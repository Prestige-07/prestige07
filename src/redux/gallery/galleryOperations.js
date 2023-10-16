import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';

axios.defaults.baseURL = 'https://car-washing-backend.onrender.com';
// axios.defaults.baseURL = 'http://localhost:3001/';

export const addPhotosGroup = createAsyncThunk(
  '/addPhotosGroup',
  async (data, thunkAPI) => {
    try {
      const response = await axios.post('/api/gallery', data);
      return response.data;
    } catch (error) {
      toast.error(error.response.data.message);
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const getGallery = createAsyncThunk(
  '/getGallery',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/api/gallery');
      return response.data;
    } catch (error) {
      toast.error(error.response.data.message);
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const deletePhotosGroup = createAsyncThunk(
  '/deletePhotosGroup',
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`/api/gallery/${id}`);
      return response.data;
    } catch (error) {
      toast.error(error.response.data.message);
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
