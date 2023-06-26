import { createSlice } from "@reduxjs/toolkit";

/*
example item:
    {
        itemId: <number>,
        name: <string>,
        unitPrice: <number>,
        itemCount: <number>,
        currency: <string>
    }
*/
const initialCartState = {
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    addItems: (state, action) => {
      const index = state.items.findIndex(
        (item) => item.itemId === action.payload.itemId
      );
      if (index === -1) {
        state.items.push(action.payload);
      } else {
        state.items[index] = {
          ...state.items[index],
          itemCount: state.items[index].itemCount + action.payload.itemCount,
        };
      }
    },
    removeItem: (state, action) => {
      const index = state.items.findIndex(
        (item) => item.itemId === action.payload.itemId
      );
      if (index >= 0) state.items.splice(index, 1);
    },
  },
});

export const { addItems, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
