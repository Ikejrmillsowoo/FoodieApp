import * as ActionTypes from "./ActionTypes";
import { baseUrl } from "../../src/components/sourceData";

export const fetchData = () => (dispatch) => {
  dispatch(dataLoading());

  return fetch(baseUrl)
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          const error = new Error(
            `Error ${response.status}: ${response.statusText}`
          );
          error.response = response;
          throw error;
        }
      },
      (error) => {
        const errMess = new Error(error.message);
        throw errMess;
      }
    )
    .then((response) => response.json())
    .then((data) => {
      dispatch(addData(data));
      console.log(data);
    })
    .catch((error) => dispatch(searchItemsFailed(error.message)));
};

export const dataLoading = () => ({
  type: ActionTypes.SEARCHITEMS_LOADING,
});

export const searchItemsFailed = (errMess) => ({
  type: ActionTypes.SEARCHITEMS_FAILED,
  payload: errMess,
});

export const addData = (data) => ({
  type: ActionTypes.ADD_SEARCHITEMS,
  payload: data,
});

export const fetchUsers = () => (dispatch) => {
  return fetch(baseUrl + "users")
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          const error = new Error(
            `Error ${response.status}: ${response.statusText}`
          );
          error.response = response;
          throw error;
        }
      },
      (error) => {
        const errMess = new Error(error.message);
        throw errMess;
      }
    )
    .then((response) => response.json())
    .then((users) => dispatch(addUser(users)))
    .catch((error) => dispatch(userFailed(error.message)));
};

export const userFailed = (errMess) => ({
  type: ActionTypes.USER_FAILED,
  payload: errMess,
});

export const addUser = (users) => ({
  type: ActionTypes.ADD_USER,
  payload: users,
});

export const fetchFavorites = () => (dispatch) => {
  dispatch(favoritesLoading());

  return fetch(baseUrl + "favorites")
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          const error = new Error(
            `Error ${response.status}: ${response.statusText}`
          );
          error.response = response;
          throw error;
        }
      },
      (error) => {
        const errMess = new Error(error.message);
        throw errMess;
      }
    )
    .then((response) => response.json())
    .then((favorites) => dispatch(addFavorites(favorites)))
    .catch((error) => dispatch(favoritesFailed(error.message)));
};

export const favoritesLoading = () => ({
  type: ActionTypes.FAVORITES_LOADING,
});

export const favoritesFailed = (errMess) => ({
  type: ActionTypes.FAVORITES_FAILED,
  payload: errMess,
});

export const addFavorites = (favorites) => ({
  type: ActionTypes.ADD_FAVORITES,
  payload: favorites,
});
