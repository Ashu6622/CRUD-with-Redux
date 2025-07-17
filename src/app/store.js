import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../features/slice";

export const store = configureStore({
  reducer: {
    app: userSlice,
  },
});