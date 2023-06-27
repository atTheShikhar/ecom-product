import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./redux_slices/cartSlice";
import overlayReducer from "./redux_slices/overlaySlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    overlay: overlayReducer,
  },
});
