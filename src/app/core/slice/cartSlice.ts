import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { ProductCart } from "../../../@types";

const initialState: ProductCart[] = [];

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addElement: (state, action: PayloadAction<ProductCart>) => {
      const product = state.find(
        (prod) => prod.name === action.payload.name
      );

      if (product) {
        product.amount += 1;
      } else {
        state.push({ ...action.payload, amount: 1 });
      }
    },

    deleteElement: (state, action: PayloadAction<string>) => {
      return state.filter((prod) => prod.name !== action.payload);
    },
  },
});

export const { addElement, deleteElement } = cartSlice.actions;
export default cartSlice.reducer;
