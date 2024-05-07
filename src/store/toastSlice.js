import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  toast: [],
};

const toastSlice = createSlice({
  name: "toast",
  initialState,
  reducers: {
    addToast(state, action) {
      state.toast.push(action.payload);
    },
    deleteToast(state, action) {
      state.toast = state.toast.filter((toast) => toast.id !== action.payload);
    },
  },
});

export const { addToast, deleteToast } = toastSlice.actions;

export default toastSlice.reducer;
