import { createSlice, isAnyOf } from '@reduxjs/toolkit';

import {
  addService,
  getAllServices,
  updateServiceById,
  deleteServiceById,
} from './servicesOperations';

const ServicesInitialState = {
  items: [],
  isLoading: false,
  error: null,
};

export const servicesSlice = createSlice({
  name: 'services',
  initialState: ServicesInitialState,
  extraReducers: builder => {
    builder
      .addCase(addService.fulfilled, (state, action) => {
        state.items.push(action.payload);
        state.isLoading = false;
      })
      .addCase(getAllServices.fulfilled, (state, action) => {
        state.items = action.payload;
        state.isLoading = false;
      })
      .addCase(updateServiceById.fulfilled, (state, action) => {
        const updatedService = action.payload;
        const serviceIndex = state.items.findIndex(
          service => service._id === updatedService._id
        );
        if (serviceIndex !== -1) {
          state.items[serviceIndex] = updatedService;
        }
        state.isLoading = false;
      })
      .addCase(deleteServiceById.fulfilled, (state, action) => {
        const deletedService = action.payload;
        const updatedServices = state.items.filter(
          service => service._id !== deletedService._id
        );
        state.items = updatedServices;
        state.isLoading = false;
      })
      .addMatcher(
        isAnyOf(
          addService.pending,
          getAllServices.pending,
          updateServiceById.pending,
          deleteServiceById.pending
        ),
        state => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        isAnyOf(
          addService.rejected,
          getAllServices.rejected,
          updateServiceById.rejected,
          deleteServiceById.rejected
        ),
        (state, action) => {
          return { ...state, error: action.payload.message, isLoading: false };
        }
      );
  },
});

export const servicesReducer = servicesSlice.reducer;
