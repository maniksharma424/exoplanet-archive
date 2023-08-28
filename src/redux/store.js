import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "./dataSlice.js";

const store = configureStore({
  reducer: {
    dataslice: dataSlice,
  },
});
export default store;
