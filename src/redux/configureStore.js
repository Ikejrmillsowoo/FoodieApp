import { createStore, combineReducers, applyMiddleware } from "redux";
import { SearchItems } from "./searchItems";
import { Users } from "./users";
import thunk from "redux-thunk";

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      users: Users,
      searchItems: SearchItems,
    }),
    applyMiddleware(thunk)
  );

  return store;
};
// favorites: Favorites,
