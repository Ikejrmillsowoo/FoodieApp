import React from "react";
import "./style.css";

export default function Footer() {
  return (
    <div className="footer_container">
      <div className="media_icons">
        <a href="">
          <i className="fa fa-facebook fa-lg m-2"></i>
        </a>
        <a href="">
          <i className="fa fa-instagram fa-lg m-2"></i>
        </a>
        <a href="">
          <i className="fa fa-twitter fa-lg m-2"></i>
        </a>
      </div>
      <div className="footer_note">
        <h6>FoodieDevApp...</h6>
      </div>
    </div>
  );
}
