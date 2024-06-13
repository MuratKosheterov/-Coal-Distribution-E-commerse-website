import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  amount: 0,
  total: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const cartItem = state.data.find((item) => {
        return item.id === action.payload.id;
      });
      if (cartItem) {
        cartItem.count++;
        state.amount++;
        state.total += action.payload.price;
      } else {
        state.data.push(action.payload);
        state.amount++;
        state.total += action.payload.price;
      }
    },

    increament: (state, action) => {
      const cartItem = state.data.find((item) => {
        return item.id === action.payload.id;
      });
      cartItem.count++;
      state.amount++;
      state.total += action.payload.price;
    },

    decreament: (state, action) => {
      const cartItem = state.data.find((item) => {
        return item.id === action.payload.id;
      });
      if (cartItem.count > 1) {
        cartItem.count--;
        state.amount--;
        state.total -= action.payload.price;
      }
    },

    removeFromCart: (state, action) => {
      state.data = state.data.filter((item) => {
        return item.id !== action.payload.id;
      });
      state.total = state.total - action.payload.price * action.payload.count;
      state.amount = state.amount - action.payload.count;
    },
  },
});

export const { addToCart, increament, decreament, removeFromCart } =
  cartSlice.actions;
export default cartSlice.reducer;
