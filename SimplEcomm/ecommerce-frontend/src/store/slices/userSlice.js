// Redux slice to manage user authentication and profile state



import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';



// Thunk to handle user login

export const loginUser = createAsyncThunk('user/login', async (credentials, { rejectWithValue }) => {

  try {

    const response = await axios.post('/api/users/login', credentials);

    return response.data;

  } catch (error) {

    return rejectWithValue(error.response.data);

  }

});



// Thunk to fetch user profile

export const fetchUserProfile = createAsyncThunk('user/fetchProfile', async (_, { getState, rejectWithValue }) => {

  const { user } = getState();

  const token = user.token;

  try {

    const response = await axios.get('/api/users/profile', {

      headers: { Authorization: `Bearer ${token}` },

    });

    return response.data;

  } catch (error) {

    return rejectWithValue(error.response.data);

  }

});



// Initial state for user slice

const initialState = {

  userInfo: null, // User information after login

  token: null, // JWT token for authentication

  status: null, // Request status: loading, success, or failed

  error: null, // Error message in case of failure

};



// User slice definition

const userSlice = createSlice({

  name: 'user',

  initialState,

  reducers: {

    logout: (state) => {

      state.userInfo = null;

      state.token = null;

    },

  },

  extraReducers: (builder) => {

    // Login cases

    builder

      .addCase(loginUser.pending, (state) => {

        state.status = 'loading';

        state.error = null;

      })

      .addCase(loginUser.fulfilled, (state, action) => {

        state.status = 'success';

        state.userInfo = action.payload.user;

        state.token = action.payload.token;

      })

      .addCase(loginUser.rejected, (state, action) => {

        state.status = 'failed';

        state.error = action.payload;

      });

    

    // Fetch profile cases

    builder

      .addCase(fetchUserProfile.pending, (state) => {

        state.status = 'loading';

      })

      .addCase(fetchUserProfile.fulfilled, (state, action) => {

        state.status = 'success';

        state.userInfo = action.payload;

      })

      .addCase(fetchUserProfile.rejected, (state, action) => {

        state.status = 'failed';

        state.error = action.payload;

      });

  },

});



export const { logout } = userSlice.actions;



export default userSlice.reducer;
