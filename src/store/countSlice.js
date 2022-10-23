import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { counter: 0 },
  reducers: {
    increment(state) {
      ++state.counter;
    },
    decrement(state) {
      --state.counter;
    },
    addBy(state, action) {
      state.counter += action.payload;
    },
    reset(state) {
      state.counter = 0;
    },
  },
});

export const counterActions = counterSlice.actions;
export default counterSlice;
