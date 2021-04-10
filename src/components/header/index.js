import React from 'react';
import './style.css';





export default function Header () {
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
          <div className="header_input">
            <input type="text" name="searchBar" placeholder='Search'
             />
            <a>
              <i className="fa fa-search fa-lg ml-2"></i>
            </a>
          </div>
        </div>
      </>
    );
}
