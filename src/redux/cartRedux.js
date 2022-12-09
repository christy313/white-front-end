import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    // addCartItem: (state, action) => {
    //   state.quantity += 1;
    //   state.products.push(action.payload);
    //   state.total += action.payload.price * action.payload.quantity;
    // },

    increaseCartItem: (state, action) => {
      const existingIndex = state.products.findIndex(
        (item) => item._id === action.payload._id
      );

      if (existingIndex >= 0) {
        state.products[existingIndex] = {
          ...state.products[existingIndex],
          quantity: state.products[existingIndex].quantity + 1,
        };
        state.quantity += 1;
      } else {
        state.products.push({
          ...action.payload,
          quantity: 1,
        });
        state.quantity += 1;
      }

      state.total = state.products.reduce((total, product) => {
        const amount = product.price * product.quantity;
        return total + amount;
      }, 0);
    },

    decreaseCartItem: (state, action) => {
      const existingIndex = state.products.findIndex(
        (item) => item.id === action.payload.id
      );

      if (existingIndex >= 0) {
        state.products[existingIndex] = {
          ...state.products[existingIndex],
          quantity: state.products[existingIndex].quantity - 1,
        };
        state.quantity -= 1;
      } else {
        state.products.push({
          ...action.payload,
          quantity: 1,
        });
        state.quantity -= 1;
      }

      state.total = state.products.reduce((total, product) => {
        const amount = product.price * product.quantity;
        return total + amount;
      }, 0);
    },

    deleteCartItem: (state, action) => {
      state.products = state.products.filter(
        (product) => product._id !== action.payload
      );
      state.quantity = state.products.reduce(
        (totalQuantity, product) => totalQuantity + product.quantity,
        0
      );
      state.total = state.products.reduce(
        (total, product) => total + product.price * product.quantity,
        0
      );
    },

    clearCartItem: (state) => {
      state.products = [];
      state.quantity = 0;
      state.total = 0;
    },
  },
});

export const {
  addCartItem,
  deleteCartItem,
  clearCartItem,
  increaseCartItem,
  decreaseCartItem,
  getCartIconTotal,
} = cartSlice.actions;
export default cartSlice.reducer;
