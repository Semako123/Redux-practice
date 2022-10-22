import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { counter: 0 },
  reducer: {
    increment(state) {
      ++state.counter;
    },
  },
});

export const counterActions = counterSlice.actions;
export default counterSlice;
