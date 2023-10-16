import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';

// axios.defaults.baseURL = 'https://car-washing-backend.onrender.com';
axios.defaults.baseURL = 'http://localhost:3001/';

// const instance = axios.create({ baseURL: 'http://localhost:3001/' });

// instance.interceptors.response.use(config => {
//   const accessToken = localStorage.getItem('persist:auth');
//   console.log(accessToken);
// });

// instance.interceptors.response.use(
//   response => response,
//   error => {
//     if (error.response.status === 401) {
//     }
//   }
// );

// const setToken = token => {
//   if (token) {
//     return (axios.defaults.headers.common.Authorization = `Bearer ${token}`);
//   }
//   axios.defaults.headers.common.Authorization = '';
// };

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};
const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

// export const register = createAsyncThunk(
//   '/register',
//   async (credentials, thunkAPI) => {
//     try {
//       const response = await axios.post('/api/auth/register', credentials);
//       return response.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

export const login = createAsyncThunk(
  '/login',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post('/api/auth/login', credentials);
      setAuthHeader(response.data.accessToken);
      return response.data;
    } catch (error) {
      toast.error(error.response.data.message);
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const logout = createAsyncThunk('/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/api/auth/logout');
    clearAuthHeader();
  } catch (error) {
    toast.error(error.response.data.message);
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

export const refresh = createAsyncThunk('/refresh', async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  const persistedToken = state.auth.token;

  if (persistedToken === null) {
    return thunkAPI.rejectWithValue('Unable to fetch user');
  }
  try {
    setAuthHeader(persistedToken);
    const res = await axios.get('/api/auth/current');
    return res.data;
  } catch (error) {
    toast.error(error.response.data.message);
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

export const getAdministrators = createAsyncThunk(
  '/administrators',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get('/api/auth/administrators');
      return res.data;
    } catch (error) {
      toast.error(error.response.data.message);
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

// export const updateUser = createAsyncThunk(
//   '/updateUser',
//   async (credentials, thunkAPI) => {
//     const state = thunkAPI.getState();
//     const persistedToken = state.auth.token;

//     if (persistedToken === null) {
//       return thunkAPI.rejectWithValue('Unable to fetch user');
//     }
//     try {
//       setAuthHeader(persistedToken);
//       const response = await axios.patch('/api/auth/profile', credentials);

//       return response.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// export const updateAvatar = createAsyncThunk(
//   '/updateAvatar',
//   async (credentials, thunkAPI) => {
//     const state = thunkAPI.getState();
//     const persistedToken = state.auth.token;

//     if (persistedToken === null) {
//       return thunkAPI.rejectWithValue('Unable to fetch user');
//     }
//     try {
//       setAuthHeader(persistedToken);
//       const response = await axios.patch(
//         '/api/auth/profile/avatar',
//         credentials
//       );

//       return response.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// import axios from 'axios';
// import { createAsyncThunk } from '@reduxjs/toolkit';

// // axios.defaults.baseURL = 'https://car-washing-backend.onrender.com';

// axios.defaults.baseURL = 'http://localhost:3001/';

// const setToken = token => {
//   if (token) {
//     return (axios.defaults.headers.common.Authorization = `Bearer ${token}`);
//   }
//   axios.defaults.headers.common.Authorization = '';
// };

// const setAuthHeader = token => {
//   axios.defaults.headers.common.Authorization = `Bearer ${token}`;
// };
// const clearAuthHeader = () => {
//   axios.defaults.headers.common.Authorization = '';
// };

// // export const register = createAsyncThunk(
// //   '/register',
// //   async (credentials, thunkAPI) => {
// //     try {
// //       const response = await axios.post('/api/auth/register', credentials);
// //       return response.data;
// //     } catch (error) {
// //       return thunkAPI.rejectWithValue(error.message);
// //     }
// //   }
// // );

// export const login = createAsyncThunk(
//   '/login',
//   async (credentials, thunkAPI) => {
//     try {
//       const response = await axios.post('/api/auth/login', credentials);
//       setAuthHeader(response.data.accessToken);
//       return response.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue({
//         message: 'Email or password is incorrect.',
//       });
//     }
//   }
// );

// export const logout = createAsyncThunk('/logout', async (_, thunkAPI) => {
//   try {
//     await axios.post('/api/auth/logout');
//     clearAuthHeader();
//   } catch (error) {
//     return thunkAPI.rejectWithValue(error.message);
//   }
// });

// export const refresh = createAsyncThunk('/refresh', async (_, thunkAPI) => {
//   const state = thunkAPI.getState();
//   const persistedToken = state.auth.token;

//   if (persistedToken === null) {
//     return thunkAPI.rejectWithValue('Unable to fetch user');
//   }
//   try {
//     setAuthHeader(persistedToken);
//     const res = await axios.get('/api/auth/current');
//     return res.data;
//   } catch (error) {
//     return thunkAPI.rejectWithValue(error.message);
//   }
// });

// export const getAdministrators = createAsyncThunk(
//   '/administrators',
//   async (_, thunkAPI) => {
//     try {
//       const res = await axios.get('/api/auth/administrators');
//       return res.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// // export const updateUser = createAsyncThunk(
// //   '/updateUser',
// //   async (credentials, thunkAPI) => {
// //     const state = thunkAPI.getState();
// //     const persistedToken = state.auth.token;

// //     if (persistedToken === null) {
// //       return thunkAPI.rejectWithValue('Unable to fetch user');
// //     }
// //     try {
// //       setAuthHeader(persistedToken);
// //       const response = await axios.patch('/api/auth/profile', credentials);

// //       return response.data;
// //     } catch (error) {
// //       return thunkAPI.rejectWithValue(error.message);
// //     }
// //   }
// // );

// // export const updateAvatar = createAsyncThunk(
// //   '/updateAvatar',
// //   async (credentials, thunkAPI) => {
// //     const state = thunkAPI.getState();
// //     const persistedToken = state.auth.token;

// //     if (persistedToken === null) {
// //       return thunkAPI.rejectWithValue('Unable to fetch user');
// //     }
// //     try {
// //       setAuthHeader(persistedToken);
// //       const response = await axios.patch(
// //         '/api/auth/profile/avatar',
// //         credentials
// //       );

// //       return response.data;
// //     } catch (error) {
// //       return thunkAPI.rejectWithValue(error.message);
// //     }
// //   }
// // );
