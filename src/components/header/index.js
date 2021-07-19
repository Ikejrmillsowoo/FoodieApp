import React from "react";
import Login from "../login";
import "./style.css";

export default function Header() {
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
        <Login />
      </div>
    </>
  );
}
