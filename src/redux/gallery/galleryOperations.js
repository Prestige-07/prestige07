import { createAsyncThunk } from '@reduxjs/toolkit';
import instance from 'redux/auth/authOperations';
import toast from 'react-hot-toast';

export const addPhotosGroup = createAsyncThunk(
  '/addPhotosGroup',
  async (data, thunkAPI) => {
    try {
      const response = await instance.post('/api/gallery', data);
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
      const response = await instance.get('/api/gallery');
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
      const response = await instance.delete(`/api/gallery/${id}`);
      return response.data;
    } catch (error) {
      toast.error(error.response.data.message);
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
