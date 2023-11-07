import { createAsyncThunk } from '@reduxjs/toolkit';
import instance from 'redux/auth/authOperations';
import toast from 'react-hot-toast';

export const addEmployee = createAsyncThunk(
  '/addEmployee',
  async (data, thunkAPI) => {
    try {
      const response = await instance.post('/api/employees', data);
      toast.success('Працівника додано успішно');
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
      const response = await instance.get('/api/employees');
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
      const response = await instance.get('/api/employees/for-user');
      return response.data;
    } catch (error) {
      toast.error(error.response.data.message);
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const updateEmployeeById = createAsyncThunk(
  '/updateEmployeeById',
  async ({ _id, data }, thunkApi) => {
    try {
      const response = await instance.post(`/api/employees/${_id}/update`, {
        ...data,
      });
      toast.success('Дані працівника оновлено успішно');
      return response.data;
    } catch (error) {
      toast.error(error.response.data.message);
      return thunkApi.rejectWithValue(error.response.data);
    }
  }
);

export const deleteEmployeeById = createAsyncThunk(
  '/deleteEmployeeById',
  async (id, thunkApi) => {
    try {
      const response = await instance.delete(`/api/employees/${id}/delete`);
      toast.success('Працівника видалено успішно');
      return response.data;
    } catch (error) {
      toast.error(error.response.data.message);
      return thunkApi.rejectWithValue(error.response.data);
    }
  }
);

export const addImageToEmployee = createAsyncThunk(
  '/addImageToEmployee',
  async ({ id, data }, thunkApi) => {
    try {
      const response = await instance.patch(
        `/api/employees/${id}/add-image`,
        data
      );
      toast.success('Зображення додано успішно');
      return response.data;
    } catch (error) {
      toast.error(error.response.data.message);
      return thunkApi.rejectWithValue(error.response.data);
    }
  }
);

export const deleteImageFromEmployee = createAsyncThunk(
  '/deleteImageFromEmployee',
  async ({ id, data }, thunkApi) => {
    try {
      const response = await instance.patch(
        `/api/employees/${id}/delete-image`,
        data
      );
      toast.success('Зображення видалено успішно');
      return response.data;
    } catch (error) {
      toast.error(error.response.data.message);
      return thunkApi.rejectWithValue(error.response.data);
    }
  }
);
