import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';

axios.defaults.baseURL = 'https://car-washing-backend.onrender.com';
// axios.defaults.baseURL = 'http://localhost:3001/';

export const addEmployee = createAsyncThunk(
  '/addEmployee',
  async (data, thunkAPI) => {
    try {
      const response = await axios.post('/api/employees', data);
      return response.data;
    } catch (error) {
      toast.error(error.response.data.message);
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const getAllEmployees = createAsyncThunk(
  '/getEmployees',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/api/employees');
      return response.data;
    } catch (error) {
      toast.error(error.response.data.message);
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const getAllEmployeesForUser = createAsyncThunk(
  '/getAllEmployeesForUser',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/api/employees/for-user');
      return response.data;
    } catch (error) {
      toast.error(error.response.data.message);
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
