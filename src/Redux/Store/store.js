import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../User/UserReducer";
export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});
