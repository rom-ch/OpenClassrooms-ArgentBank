import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { login } from "../services/authenticationApi";

const initialState = {
  token: null,
  status: null,
};

export const userLogin = createAsyncThunk("auth/login", login);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken(state, action) {
      state.token = action.payload;
      state.status = "success";
    },
    signOut(state) {
      state.token = null;
      state.status = null;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(userLogin.pending, (state) => {
        state.status = "loading";
      })
      .addCase(userLogin.fulfilled, (state, action) => {
        state.status = "success";
        state.token = action.payload.body.token;
      })
      .addCase(userLogin.rejected, (state) => {
        state.status = "error";
        // state.error = action.error.message;
      }),
});

export const { setToken, signOut } = authSlice.actions;
export default authSlice.reducer;
