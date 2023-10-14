import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  subTotal: 0,
  shiping: 0,
  tax: 0,
  total: 0,
};

export const cartReducer = createSlice({
  name: "cartReducer",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const isItemExist = state.cartItems.find((e) => e.e.id === item.e.id);
      if (isItemExist) {
        isItemExist.quantity += 1;
      } else {
        state.cartItems.push(item);
      }
    },
    decrement: (state, action) => {
      const findItem = state.cartItems.find(
        (e) => e.e.id === action.payload.e.id
      );
      findItem.quantity > 1
        ? (findItem.quantity -= 1)
        : findItem.quantity === 1;
    },

    calcualtion: (state) => {
      let sum = 0;
      state.cartItems.forEach((e) => (sum += e.e.price * e.quantity));
      state.subTotal = sum;
      state.shiping = state.subTotal > 100 ? 0 : 10;
      state.tax = +((18 * state.subTotal) / 100);
      state.total = state.subTotal + state.tax + state.shiping;
    },

    deleteProduct: (state, action) => {
      state.cartItems = state.cartItems.filter((e) => e.e.id !== action.payload.e.id)
    },
  },
});

export const { addToCart, decrement2, calcualtion, decrement, deleteProduct } =
  cartReducer.actions;
export default cartReducer.reducer;
