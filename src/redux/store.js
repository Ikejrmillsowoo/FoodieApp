import { configureStore } from "@reduxjs/toolkit";
import searchSliceReducer from "./searchSlice";
//import userSliceReducer from "./userSlice";
import dataSliceReducer from "./dataSlice";
import favoritesSliceReducer from "./favoritesSlice";

import signUpSliceReducer from "./signUpSlice";
import loginReducer from "./loginSlice";

export const store = configureStore({
  reducer: {
    search: searchSliceReducer,
    // users: userSliceReducer,
    data: dataSliceReducer,
    signUp: signUpSliceReducer,
    login: loginReducer,
    favorites: favoritesSliceReducer,
  },
});
