import "./App.css";
import React, { useState } from "react";

import Footer from "./components/footer";
import Header from "./components/header";
import Main from "./components/main";
import { Provider } from "react-redux";
import { ConfigureStore } from "./redux/configureStore";

const store = ConfigureStore();

function App() {
  const [userInfo, setUserInfo] = useState({
    firstname: "",
    lastname: "",
    username: "",
    password: "",
  });

  function submitLogin(e, newFirstname, newlastname, newUsername, newPassword) {
    //console.log(newPassword, newUsername, newFirstname, newlastname);
    e.preventDefault();
    setUserInfo({
      firstname: newFirstname ? newFirstname : "",
      lastname: newlastname ? newlastname : "",
      username: newUsername ? newUsername : "",
      password: newPassword ? newPassword : "",
    });

    console.log(userInfo);
  }

  // const resetFormFields = () => {
  //   setUserInfo({
  //     firstname: "",
  //     lastname: "",
  //     username: "",
  //     password: "",
  //   });
  // };

  return (
    <Provider store={store}>
      <div className="App">
        <Header submitLogin={submitLogin} />
        <Main userInfo={userInfo} />
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
