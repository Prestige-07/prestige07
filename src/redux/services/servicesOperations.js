import { createAsyncThunk } from '@reduxjs/toolkit';
import instance from 'redux/auth/authOperations';
import toast from 'react-hot-toast';

export const addService = createAsyncThunk(
  '/addService',
  async (data, thunkAPI) => {
    try {
      const response = await instance.post('/api/services', data);
      toast.success('Послугу додано успішно!');
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
      const response = await instance.get('/api/services');
      return response.data;
    } catch (error) {
      toast.error(error.response.data.message);
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const updateServiceById = createAsyncThunk(
  '/updateServiceById',
  async ({ _id, data }, thunkApi) => {
    try {
      const response = await instance.post(`/api/services/${_id}/update`, {
        ...data,
      });
      toast.success('Послугу оновлено успішно!');
      return response.data;
    } catch (error) {
      toast.error(error.response.data.message);
      return thunkApi.rejectWithValue(error.response.data);
    }
  }
);

export const deleteServiceById = createAsyncThunk(
  '/deleteServiceById',
  async (id, thunkApi) => {
    try {
      const response = await instance.delete(`/api/services/${id}/delete`);
      toast.success('Послугу видалено успішно!');
      return response.data;
    } catch (error) {
      toast.error(error.response.data.message);
      return thunkApi.rejectWithValue(error.response.data);
    }
  }
);
