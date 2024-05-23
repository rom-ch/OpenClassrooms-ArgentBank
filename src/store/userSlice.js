import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchUserProfile, updateUser } from "../services/userApi";

const initialState = {
  firstName: null,
  lastName: null,
  email: null,
  status: null,
};

export const userProfile = createAsyncThunk("user/profile", fetchUserProfile);
export const updateUserProfile = createAsyncThunk(
  "user/updateProfile",
  updateUser,
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(userProfile.pending, (state) => {
        state.status = "loading";
      })
      .addCase(userProfile.fulfilled, (state, action) => {
        state.status = "success";
        state.firstName = action.payload.body.firstName;
        state.lastName = action.payload.body.lastName;
        state.email = action.payload.body.email;
        state.message = action.payload.message;
      })
      .addCase(userProfile.rejected, (state, action) => {
        state.status = "error";
        state.error = action.error.message;
      })
      .addCase(updateUserProfile.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateUserProfile.fulfilled, (state, action) => {
        state.status = "success";
        state.firstName = action.payload.body.firstName;
        state.lastName = action.payload.body.lastName;
        state.message = action.payload.message;
      })
      .addCase(updateUserProfile.rejected, (state) => {
        state.status = "error";
        // state.error = action.error.message;
      }),
});

export default userSlice.reducer;
