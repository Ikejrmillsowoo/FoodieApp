/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  term: "food",
  location: 19701,
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    newTerm: (state, action) => {
      state.term = action.payload.term;
      state.location = parseInt(action.payload.location);
    },
  },
});

export const { newTerm } = searchSlice.actions;

export default searchSlice.reducer;
