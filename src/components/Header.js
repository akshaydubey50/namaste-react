import React from "react";
import { LOGO_IMAGE } from "../utils/constant";
export  function Header() {
  return (
    <div className="header-wrapper">
      <div className="logo-container">
        <img
          src={LOGO_IMAGE}
          alt="food"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Section</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
}

export default Header
