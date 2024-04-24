import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  status: "idle",
  error: "",
  token: "",
};

export const userLogin = createAsyncThunk(
  "auth/login",
  async function ({ email, password }) {
    try {
      const res = await fetch("http://localhost:3001/api/v1/user/login", {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      return data.body.token;
    } catch {
      throw new Error("Login failed");
    }
  },
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(userLogin.pending, (state) => {
        state.status = "loading";
      })
      .addCase(userLogin.fulfilled, (state, action) => {
        state.status = "success";
        state.isAuthenticated = true;
        state.token = action.payload;
      })
      .addCase(userLogin.rejected, (state, action) => {
        state.status = "error";
        state.error = action.error.message;
        console.log(action.error.message);
      }),
});

// export const {} = authSlice.actions;
export default authSlice.reducer;
