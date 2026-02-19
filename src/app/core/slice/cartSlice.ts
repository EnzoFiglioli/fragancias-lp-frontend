import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { ProductCart, UpdateType } from "../../../@types";

const initialState: ProductCart[] = [];

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addElement: (state, action: PayloadAction<ProductCart>) => {
      const product = state.find((prod) => prod.name === action.payload.name);

      if (product) {
        product.amount += 1;
      } else {
        state.push({ ...action.payload, amount: 1 });
      }
    },

    deleteElement: (state, action: PayloadAction<string>) => {
      return state.filter((prod) => prod.name !== action.payload);
    },
    updateAmount: (
      state,
      action: PayloadAction<{ id: number; type: UpdateType }>,
    ) => {
      const product = state.find((i) => i.id === action.payload.id);

      if (!product) return;

      if (action.payload.type === "DECREASE" && product?.amount > 0) {
        product.amount -= 1;
      } else if (action.payload.type === "INCREASE") {
        product.amount += 1;
      } else {
        product.amount = 0;
      }
    },
  },
});

export const { addElement, deleteElement, updateAmount } = cartSlice.actions;
export default cartSlice.reducer;
