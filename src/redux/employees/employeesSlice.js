import { createSlice, isAnyOf } from '@reduxjs/toolkit';

import {
  getAllEmployees,
  getAllEmployeesForUser,
  addEmployee,
} from './employeesOperations';

const EmployeesInitialState = {
  items: [],
  isLoading: false,
  error: null,
};

export const employeesSlice = createSlice({
  name: 'employees',
  initialState: EmployeesInitialState,
  extraReducers: builder => {
    builder
      .addCase(addEmployee.fulfilled, (state, action) => {
        return {
          ...state,
          items: [...state.items, action.payload],
          isLoading: false,
        };
      })
      .addCase(getAllEmployees.fulfilled, (state, action) => {
        return {
          items: action.payload,
          isLoading: false,
        };
      })
      .addCase(getAllEmployeesForUser.fulfilled, (state, action) => {
        return {
          items: action.payload,
          isLoading: false,
        };
      })
      .addMatcher(
        isAnyOf(
          addEmployee.pending,
          getAllEmployees.pending,
          getAllEmployeesForUser.pending
        ),
        state => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        isAnyOf(
          addEmployee.rejected,
          getAllEmployees.rejected,
          getAllEmployeesForUser.rejected
        ),
        (state, action) => {
          return { ...state, error: action.payload.message, isLoading: false };
        }
      );
  },
});

export const employeesReducer = employeesSlice.reducer;
