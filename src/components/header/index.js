import React from "react";
import { useSelector } from "react-redux";
import Login from "../login";
import Logout from "../logout";
import "./style.css";

export default function Header({ getFavorites }) {
  const loggedIn = useSelector((state) => state.login.isLoggedIn);

  const headerDisplay =
    loggedIn === false ? <Login /> : <Logout getFavorites={getFavorites} />;

  return (
    <>
      <div className="header_container">
        <div className="header_image">
          <img
            className="img-fluid"
            src="/assets/images/logo4.png"
            alt="Logo"
          />
        </div>
        <h5>business search</h5>
        {/* <Login /> */}
        {headerDisplay}
      </div>
    </>
  );
}
