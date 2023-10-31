// /* eslint-disable react-hooks/rules-of-hooks */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  data: [],
};

const favoritesSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    favoriteLoading(state, action) {
      if (state.loading === false) {
        state.loading = true;
      }
    },
    favoriteReceived(state, action) {
      if (state.loading === true) {
        state.loading = false;
        state.data = action.payload;
      }
    },
  },
});

export const { favoriteLoading, favoriteReceived } = favoritesSlice.actions;

export default favoritesSlice.reducer;
