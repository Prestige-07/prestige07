import { createSlice, isAnyOf } from '@reduxjs/toolkit';

import {
  getAllEmployees,
  getAllEmployeesForUser,
  addEmployee,
  updateEmployeeById,
  deleteEmployeeById,
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
          // isLoading: false,
        };
      })
      .addCase(getAllEmployees.fulfilled, (state, action) => {
        return {
          items: action.payload,
          isLoading: false,
        };
      })
      .addCase(updateEmployeeById.fulfilled, (state, action) => {
        const updatedEmployee = action.payload;
        const employeeIndex = state.items.findIndex(
          employee => employee._id === updatedEmployee._id
        );
        if (employeeIndex !== -1) {
          state.items[employeeIndex] = updatedEmployee;
        }
        // state.isLoading = false;
      })
      .addCase(deleteEmployeeById.fulfilled, (state, action) => {
        const deletedEmployee = action.payload;
        const updatedEmployees = state.items.filter(
          employee => employee._id !== deletedEmployee._id
        );
        state.items = updatedEmployees;
        // state.isLoading = false;
      })
      .addCase(getAllEmployeesForUser.fulfilled, (state, action) => {
        return {
          items: action.payload,
          isLoading: false,
        };
      })
      .addMatcher(
        isAnyOf(
          // addEmployee.pending,
          getAllEmployees.pending,
          getAllEmployeesForUser.pending
          // updateEmployeeById.pending,
          // deleteEmployeeById.pending
        ),
        state => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        isAnyOf(
          addEmployee.rejected,
          getAllEmployees.rejected,
          getAllEmployeesForUser.rejected,
          updateEmployeeById.rejected,
          deleteEmployeeById.rejected
        ),
        (state, action) => {
          return { ...state, error: action.payload.message, isLoading: false };
        }
      );
  },
});

export const employeesReducer = employeesSlice.reducer;
