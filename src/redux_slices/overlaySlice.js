import { createSlice } from "@reduxjs/toolkit";

/*
possible overlay values: LIGHTBOX, CART, MENU
*/
const initOverlayState = {
  activeOverlay: null,
};

export const overlaySlice = createSlice({
  name: "overlay",
  initialState: initOverlayState,
  reducers: {
    openOverlay: (state, action) => {
      state.activeOverlay = action.payload;
    },
    closeOverlay: (state) => {
      state.activeOverlay = null;
    },
  },
});

export const { openOverlay, closeOverlay } = overlaySlice.actions;

export default overlaySlice.reducer;
