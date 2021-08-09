import "./App.css";
import React, { useState } from "react";

import Footer from "./components/footer";
import Header from "./components/header";
import Main from "./components/main";

function App() {
  const [userInfo, setUserInfo] = useState({
    firstname: "",
    lastname: "",
    username: "",
    password: "",
  });

  const submitLogin = (e, password, username) => {
    console.log(password, username);
    setUserInfo({
      username: username,
      password: password,
    });
    e.preventDefault();
  };

  return (
    <div className="App">
      <Header submitLogin={submitLogin} />
      <Main userInfo={userInfo} />
      <Footer />
    </div>
  );
}

export default App;
