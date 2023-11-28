import React, { useState } from "react";
import { LOGO_IMAGE } from "../utils/constant";
import { Link } from "react-router-dom";
export function Header() {
  const [btnName, setBtnName] = useState('Login');
  return (
    <div className="bg-orange-100 flex justify-between items-center shadow-lg p-4">
      <div className="logo-container">
        <img src={LOGO_IMAGE} alt="food" className="" />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/">Section</Link>
          </li>
          <li>
            <Link to="/">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
