import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: 10 };

export const counterSlice = createSlice({
  name: "counter",

  initialState,
  //   initialState: {
  //     value: 0,
  //   },

  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});
export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
