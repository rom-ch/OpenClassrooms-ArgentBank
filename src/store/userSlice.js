import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchUserProfile, updateUser } from "../services/userApi";

const initialState = {
  firstName: null,
  lastName: null,
  email: null,
  loading: false,
  message: "",
  error: "",
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
        state.loading = true;
      })
      .addCase(userProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.firstName = action.payload.body.firstName;
        state.lastName = action.payload.body.lastName;
        state.email = action.payload.body.email;
        state.message = action.payload.message;
      })
      .addCase(userProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(updateUserProfile.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateUserProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.firstName = action.payload.body.firstName;
        state.lastName = action.payload.body.lastName;
        state.message = action.payload.message;
      })
      .addCase(updateUserProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      }),
});

// export const {} = userSlice.actions;

export default userSlice.reducer;
