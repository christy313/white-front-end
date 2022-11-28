import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addCartItem: (state, action) => {
      state.quantity += 1;
      state.products.push(action.payload);
      state.total += action.payload.price * action.payload.quantity;
    },
    deleteCartItem: (state, action) => {
      state.quantity -= 1;
      state.products = state.products.filter(
        (product) => product._id !== action.payload
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

export const { addCartItem, deleteCartItem, clearCartItem } = cartSlice.actions;
export default cartSlice.reducer;
