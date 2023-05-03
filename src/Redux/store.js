import { configureStore } from "@reduxjs/toolkit";
<<<<<<< HEAD
import counterSlice from "./counterSlice";
import CalculatoreSlice from "./CalculatoreSlice";

export const store = configureStore({
  reducer: {
    meraCounter: counterSlice,
    meraCalculator: CalculatoreSlice,
  },
=======
import reducer from "./root-reducer";

export default configureStore({
  reducer,
>>>>>>> 2cb5391743a8e684349cb7b9458aaebdd5238e9c
});
