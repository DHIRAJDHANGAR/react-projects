import { createSlice } from "@reduxjs/toolkit";

const initialState = { result: 0 };

export const CalCulatorSlice = createSlice({
  name: "calculator",
  initialState,
  reducers: {
    addition: (state, actions) => {
      //   console.log(state.result, actions.payload);
      state.result = +actions.payload.num1 + +actions.payload.num2;
    },
    subtract: (state, actions) => {
      state.result = +actions.payload.num1 - +actions.payload.num2;
    },
    multiply: (state, actions) => {
      state.result = +actions.payload.num1 * +actions.payload.num2;
    },
    division: (state, actions) => {
      state.result = +actions.payload.num1 / +actions.payload.num2;
    },
    modulus: (state, actions) => {
      state.result = +actions.payload.num1 % +actions.payload.num2;
    },
  },
});

export const { addition, subtract, multiply, division, modulus } =
  CalCulatorSlice.actions;

export default CalCulatorSlice.reducer;
