import "./App.css";
import React, { useState } from "react";

import Footer from "./components/footer";
import Header from "./components/header";
import Main from "./components/main";
import { baseUrl } from "./components/sourceData";
import { useDispatch } from "react-redux";
import { favoriteLoading, favoriteReceived } from "./redux/favoritesSlice";

const url = baseUrl;

//import { Provider } from "react-redux";
//import { ConfigureStore } from "./redux/configureStore";
//import { store } from "../src/redux/store";

//const store = ConfigureStore();

function App() {
  const [userInfo, setUserInfo] = useState({
    firstname: "",
    lastname: "",
    username: "",
    password: "",
  });

  const dispatch = useDispatch();

  function submitLogin(e, newFirstname, newlastname, newUsername, newPassword) {
    //console.log(newPassword, newUsername, newFirstname, newlastname);
    e.preventDefault();
    setUserInfo({
      firstname: newFirstname ? newFirstname : "",
      lastname: newlastname ? newlastname : "",
      username: newUsername ? newUsername : "",
      password: newPassword ? newPassword : "",
    });

    // console.log(userInfo);
  }
  const getFavorites = async () => {
    dispatch(favoriteLoading());
    const response = await fetch(`${url}/favorites`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    const favoriteList = await response.json();
    // console.log(favoriteList);
    dispatch(favoriteReceived(favoriteList));
  };

  // const resetFormFields = () => {
  //   setUserInfo({
  //     firstname: "",
  //     lastname: "",
  //     username: "",
  //     password: "",
  //   });
  // };

  // console.log(isLoading && "Loading...");
  // console.log(isError && error.message);
  // console.log(isSuccess && data);
  return (
    <div className="App">
      <Header submitLogin={submitLogin} getFavorites={getFavorites} />
      <Main userInfo={userInfo} />
      <Footer />
    </div>
  );
}

export default App;
