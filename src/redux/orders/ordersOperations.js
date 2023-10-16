import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';

// axios.defaults.baseURL = 'https://car-washing-backend.onrender.com';
axios.defaults.baseURL = 'http://localhost:3001/';

export const addNewOrder = createAsyncThunk(
  'orders/addNewOrder',
  async (data, thunkAPI) => {
    try {
      const response = await axios.post('/api/orders', data);
      return response.data;
    } catch (error) {
      toast.error(error.response.data.message);
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const getAllOrders = createAsyncThunk(
  'orders/getAllOrders',
  async ({ status = '', page = 1 }, thunkAPI) => {
    try {
      const response = await axios.get(
        `/api/orders?status=${status}&page=${page}`
      );
      return response.data;
    } catch (error) {
      toast.error(error.response.data.message);
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const getOrderByNumber = createAsyncThunk(
  'orders/getOrderByNumber',
  async (number, thunkApi) => {
    try {
      const response = await axios.get(`/api/orders/${number}`);
      return response.data;
    } catch (error) {
      toast.error(error.response.data.message);
      return thunkApi.rejectWithValue(error.response.data);
    }
  }
);

export const updateOrderByNumber = createAsyncThunk(
  'orders/updateOrderByNumber',
  async ({ number, data }, thunkApi) => {
    try {
      const response = await axios.patch(`/api/orders/${number}/update`, {
        data,
      });
      return response.data;
    } catch (error) {
      toast.error(error.response.data.message);
      return thunkApi.rejectWithValue(error.response.data);
    }
  }
);
