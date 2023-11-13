import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  addNewOrder,
  getAllOrders,
  getOrderByNumber,
  updateOrderByNumber,
} from './ordersOperations';

const initialState = {
  items: [],
  orderByNumber: {},
  isLoading: false,
  totalPages: '',
  error: '',
  totalsOrders: {},
};

export const ordersSlice = createSlice({
  name: 'orders',
  initialState: initialState,
  extraReducers: builder => {
    builder
      .addCase(addNewOrder.fulfilled, (state, action) => {
        return {
          ...state,
          items: [action.payload, ...state.items],
          error: null,
        };
      })
      .addCase(getAllOrders.fulfilled, (state, action) => {
        return {
          ...state,
          items: [...action.payload.orders],
          error: null,
          totalPages: action.payload.totalPages,
          totalOrders: action.payload.totalOrders,
          isLoading: false,
        };
      })
      .addCase(getOrderByNumber.fulfilled, (state, action) => {
        return {
          ...state,
          orderByNumber: { ...action.payload },
          error: null,
          totalPages: '',
          isLoading: false,
        };
      })
      .addCase(updateOrderByNumber.fulfilled, (state, action) => {
        return {
          ...state,
          orderByNumber: action.payload,
          error: null,
        };
      })
      .addMatcher(
        isAnyOf(getAllOrders.pending, getOrderByNumber.pending),
        state => {
          state.isLoading = true;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(
          getAllOrders.rejected,
          getOrderByNumber.rejected,
          updateOrderByNumber.rejected,
          addNewOrder.rejected
        ),
        (state, action) => {
          state.isLoading = false;
          state.error = action.error.message;
        }
      );
  },
  reducers: {},
});

export const ordersReducer = ordersSlice.reducer;
