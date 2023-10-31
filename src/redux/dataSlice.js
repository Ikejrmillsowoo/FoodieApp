// /* eslint-disable react-hooks/rules-of-hooks */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  data: [],
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    dataLoading(state, action) {
      if (state.loading === false) {
        state.loading = true;
      }
    },
    dataReceived(state, action) {
      if (state.loading === true) {
        state.loading = false;
        state.data = action.payload;
      }
    },
  },
});

export const { dataLoading, dataReceived } = dataSlice.actions;

export default dataSlice.reducer;
