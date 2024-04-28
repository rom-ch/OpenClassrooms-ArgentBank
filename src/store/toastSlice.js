import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  toast: [
    {
      id: crypto.randomUUID(),
      type: "SUCCESS",
      title: "Success Title",
      message: "This a success message",
    },
    {
      id: crypto.randomUUID(),
      type: "INFO",
      title: "Info Title",
      message: "This an info message",
    },
    {
      id: crypto.randomUUID(),
      type: "WARNING",
      title: "Warning Title",
      message: "This a warning message",
    },
    {
      id: crypto.randomUUID(),
      type: "ERROR",
      title: "Error Title",
      message: "This an error message",
    },
  ],
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
