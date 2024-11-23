// Redux slice to manage product-related state



import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';



// Thunk to fetch all products

export const fetchProducts = createAsyncThunk('products/fetchProducts', async (_, { rejectWithValue }) => {

  try {

    const response = await axios.get('/api/products');

    return response.data; // Return the array of products

  } catch (error) {

    return rejectWithValue(error.response.data); // Return error message

  }

});



// Thunk to add a new product (Admin only)

export const addProduct = createAsyncThunk('products/addProduct', async (productData, { getState, rejectWithValue }) => {

  const { user } = getState();

  const token = user.token;



  try {

    const response = await axios.post('/api/products', productData, {

      headers: { Authorization: `Bearer ${token}` },

    });

    return response.data; // Return the created product

  } catch (error) {

    return rejectWithValue(error.response.data); // Return error message

  }

});



// Initial state for product slice

const initialState = {

  items: [], // List of all products

  status: null, // Request status: loading, success, or failed

  error: null, // Error message in case of failure

};



// Product slice definition

const productSlice = createSlice({

  name: 'products',

  initialState,

  reducers: {},

  extraReducers: (builder) => {

    // Fetch products cases

    builder

      .addCase(fetchProducts.pending, (state) => {

        state.status = 'loading';

        state.error = null;

      })

      .addCase(fetchProducts.fulfilled, (state, action) => {

        state.status = 'success';

        state.items = action.payload;

      })

      .addCase(fetchProducts.rejected, (state, action) => {

        state.status = 'failed';

        state.error = action.payload;

      });

    

    // Add product cases (Admin)

    builder

      .addCase(addProduct.pending, (state) => {

        state.status = 'loading';

        state.error = null;

      })

      .addCase(addProduct.fulfilled, (state, action) => {

        state.status = 'success';

        state.items.push(action.payload); // Add new product to the list

      })

      .addCase(addProduct.rejected, (state, action) => {

        state.status = 'failed';

        state.error = action.payload;

      });

  },

});



export default productSlice.reducer;
