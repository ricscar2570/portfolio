// Redux slice to manage the shopping cart state



import { createSlice } from '@reduxjs/toolkit';



// Initial state for cart slice

const initialState = {

  items: [], // Array of items in the cart

  totalQuantity: 0, // Total number of items in the cart

  totalPrice: 0, // Total price of items in the cart

};



// Helper function to calculate totals

const calculateTotals = (state) => {

  state.totalQuantity = state.items.reduce((total, item) => total + item.quantity, 0);

  state.totalPrice = state.items.reduce((total, item) => total + item.quantity * item.price, 0);

};



// Cart slice definition

const cartSlice = createSlice({

  name: 'cart',

  initialState,

  reducers: {

    // Add an item to the cart

    addItem: (state, action) => {

      const existingItem = state.items.find((item) => item.id === action.payload.id);

      if (existingItem) {

        existingItem.quantity += action.payload.quantity;

      } else {

        state.items.push(action.payload);

      }

      calculateTotals(state);

    },



    // Remove an item from the cart

    removeItem: (state, action) => {

      state.items = state.items.filter((item) => item.id !== action.payload.id);

      calculateTotals(state);

    },



    // Update the quantity of an item in the cart

    updateQuantity: (state, action) => {

      const existingItem = state.items.find((item) => item.id === action.payload.id);

      if (existingItem) {

        existingItem.quantity = action.payload.quantity;

      }

      calculateTotals(state);

    },



    // Clear the entire cart

    clearCart: (state) => {

      state.items = [];

      state.totalQuantity = 0;

      state.totalPrice = 0;

    },

  },

});



export const { addItem, removeItem, updateQuantity, clearCart } = cartSlice.actions;



export default cartSlice.reducer;
