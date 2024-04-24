import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./services/authSlice";

const store = configureStore({
  reducer: {
    user: authReducer,
  },
});

export default store;
