import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import toastReducer from "./toastSlice";

const store = configureStore({
  reducer: {
    user: authReducer,
    toast: toastReducer,
  },
});

export default store;
