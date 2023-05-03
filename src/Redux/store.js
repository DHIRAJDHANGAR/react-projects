import { configureStore } from "@reduxjs/toolkit";

import counterSlice from "./counterSlice";
import CalculatoreSlice from "./CalculatoreSlice";

export const store = configureStore({
  reducer: {
    meraCounter: counterSlice,
    meraCalculator: CalculatoreSlice,
  },}
)