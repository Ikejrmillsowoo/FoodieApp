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

  function submitLogin(e, newPassword, newUsername) {
    console.log(newPassword, newUsername);
    e.preventDefault();
    setUserInfo({
      firstname: "",
      lastname: "",
      username: newUsername,
      password: newPassword,
    });
  }

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
