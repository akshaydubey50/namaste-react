import React, { useContext, useState } from "react";
import { LOGO_IMAGE } from "../utils/constant";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import cartStore from "../utils/cartSlice";
export function Header() {
  const [btnName, setBtnName] = useState('Login');

  const {loggedUser} = useContext(UserContext);
  const cartItems = useSelector((store)   => store.cart.items)
  console.log('Store CartItems:-',cartItems)
  
  const handleLoginBtn = ()=>{
    if (btnName =="Login"){
      setBtnName("Logout")
    }
else{
      setBtnName("Login")

}
  }
  return (
    <div className="bg-green-100 flex justify-between items-center shadow-lg p-4">
      <div className="logo-container">
        <img src={LOGO_IMAGE} alt="food" className="" />
      </div>
      <div className="nav-items">
        <ul className="font-medium text-lg">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/cart">Cart ({cartItems.length} items)</Link>
          </li>
          <li>
            <Link to="/">Contact</Link>
          </li>
          <button onClick={handleLoginBtn}>{btnName}</button>
          <li>{loggedUser}</li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
