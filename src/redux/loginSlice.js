/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: "",
  password: "",
  loggedUser: "",
  isLoggedIn: false,
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    userLogin: (state, action) => {
      state.username = action.payload.username;
      state.password = action.payload.password;
      console.log(action.payload);
    },
    userLoggedIn: (state, action) => {
      state.isLoggedIn = true;
      state.loggedUser = action.payload;
    },
    userLoggedOut: (state, action) => {
      state.isLoggedIn = action.payload;
    },
  },
});

export const { userLogin, userLoggedIn, userLoggedOut } = loginSlice.actions;

export default loginSlice.reducer;
