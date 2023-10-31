/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firstname: "",
  lastname: "",
  username: "",
  password: "",
  isSignedUp: false,
};

export const signUpSlice = createSlice({
  name: "signUp",
  initialState,
  reducers: {
    newUser: (state, action) => {
      state.firstname = action.payload.firstname;
      state.lastname = action.payload.lastname;
      state.username = action.payload.username;
      state.password = action.payload.password;
    },
  },
});

export const { newUser } = signUpSlice.actions;

export default signUpSlice.reducer;
