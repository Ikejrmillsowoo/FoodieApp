import * as ActionTypes from "./ActionTypes";

export const SearchItems = (
  state = {
    isLoading: true,
    errMess: null,
    searchItem: {
      term: "food",
      location: 19701,
      firstname: "",
      lastname: "",
      username: "",
      password: "",
    },
  },
  action
) => {
  switch (action.type) {
    case ActionTypes.ADD_SEARCHITEMS:
      return {
        ...state,
        isLoading: false,
        errMess: null,
        searchItem: action.payload,
      };
    case ActionTypes.SEARCHITEMS_LOADING:
      return {
        ...state,
        isLoading: true,
        errMess: null,
        searchItem: "",
      };
    case ActionTypes.SEARCHITEMS_FAILED:
      return { ...state, isLoading: false, errMess: action.payload };
    default:
      return state;
  }
};
