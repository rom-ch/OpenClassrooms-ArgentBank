import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { login } from "../services/authenticationApi";

const initialState = {
  token:
    JSON.parse(localStorage.getItem("user")) ||
    JSON.parse(sessionStorage.getItem("user")) ||
    null,
  loading: false,
  error: "",
  message: "",
};

export const userLogin = createAsyncThunk("auth/login", login);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    deleteToken(state) {
      state.token = null;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(userLogin.pending, (state) => {
        state.loading = true;
      })
      .addCase(userLogin.fulfilled, (state, action) => {
        state.loading = false;
        state.error = "";
        state.token = action.payload.body.token;
        state.message = action.payload.message;
      })
      .addCase(userLogin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      }),
});

export const {deleteToken} = authSlice.actions;
export default authSlice.reducer;
