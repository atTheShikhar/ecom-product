import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./redux_slices/cartSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
