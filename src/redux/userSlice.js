/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  //   isLoading: true,
  users: [],
};

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    newUser: (state, action) => {
      state.users = action.payload.users;
      //   state.isLoading = false;
    },
  },
});

export const { newUser } = userSlice.actions;

export default userSlice.reducer;
