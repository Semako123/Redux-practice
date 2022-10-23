import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./countSlice";

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});

export default store;
