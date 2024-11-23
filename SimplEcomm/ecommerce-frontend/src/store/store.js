// Redux store configuration



import { configureStore } from '@reduxjs/toolkit';

import productReducer from './slices/productSlice'; // Handles product-related state

import cartReducer from './slices/cartSlice'; // Handles cart-related state

import userReducer from './slices/userSlice'; // Handles user-related state



// Combine all reducers into a single store

const store = configureStore({

  reducer: {

    products: productReducer, // Reducer for products

    cart: cartReducer, // Reducer for cart

    user: userReducer, // Reducer for user authentication and profile

  },

});



export default store;
