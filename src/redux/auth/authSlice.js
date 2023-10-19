import { createSlice, isAnyOf } from '@reduxjs/toolkit';

import {
  login,
  logout,
  getCurrentUser,
  getAdministrators,
} from './authOperations';

const AuthInitialState = {
  user: {
    name: null,
    email: null,
  },
  administrators: [],
  token: null,
  refreshToken: null,
  isLoggedIn: false,
  isLoading: false,
  error: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState: AuthInitialState,
  extraReducers: builder => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        state.user.email = action.payload.email;
        state.token = action.payload.accessToken;
        state.refreshToken = action.payload.refreshToken;
        state.isLoggedIn = true;
        state.isLoading = false;
      })
      .addCase(logout.fulfilled, state => {
        state.user = { name: null, email: null };
        state.token = null;
        state.refreshToken = null;
        state.isLoggedIn = false;
        state.isLoading = false;
      })
      .addCase(getCurrentUser.fulfilled, (state, action) => {
        state.user.email = action.payload.email;
        state.user.name = action.payload.name;
        state.token = action.payload.accessToken;
        state.refreshToken = action.payload.refreshToken;
        state.isLoggedIn = true;
        state.isLoading = false;
      })
      .addCase(getAdministrators.fulfilled, (state, action) => {
        state.administrators = action.payload;
        state.isLoading = false;
      })
      .addMatcher(
        isAnyOf(
          login.pending,
          logout.pending,
          getCurrentUser.pending,
          getAdministrators.pending
        ),
        state => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        isAnyOf(
          login.rejected,
          logout.rejected,
          getCurrentUser.rejected,
          getAdministrators.rejected
        ),
        (state, action) => {
          return { ...state, error: action.payload.message, isLoading: false };
        }
      );
  },
});

export const authReducer = authSlice.reducer;
