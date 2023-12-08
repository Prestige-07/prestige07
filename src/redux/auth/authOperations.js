import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';

const instance = axios.create({
  baseURL: 'https://prestige-07.com.ua/',
});

export const setToken = token => {
  if (token) {
    return (instance.defaults.headers.common.Authorization = `Bearer ${token}`);
  }
  instance.defaults.headers.common.Authorization = '';
};

export const login = createAsyncThunk(
  '/login',
  async (credentials, thunkAPI) => {
    try {
      const response = await instance.post('/api/auth/login', credentials);
      setToken(response.data.accessToken);
      toast.success('Вхід виконано успішно');
      return response.data;
    } catch (error) {
      toast.error(error.response.data.message);
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const logout = createAsyncThunk('/logout', async (_, thunkAPI) => {
  try {
    await instance.post('/api/auth/logout');
    setToken();
    toast.success('Вихід виконано успішно');
  } catch (error) {
    toast.error(error.response.data.message);
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

export const getCurrentUser = createAsyncThunk(
  '/getCurrentUser',
  async (_, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const persistedToken = state.auth.token;

      if (!persistedToken) {
        return thunkAPI.rejectWithValue('Не вдалося отримати користувача');
      }

      setToken(persistedToken);

      const res = await instance.get('/api/auth/current');
      return res.data;
    } catch (error) {
      toast.error(error.response.data.message);
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const getAdministrators = createAsyncThunk(
  '/administrators',
  async (_, thunkAPI) => {
    try {
      const res = await instance.get('/api/auth/administrators');
      return res.data;
    } catch (error) {
      toast.error(error.response.data.message);
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export default instance;
