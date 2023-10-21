import React, { useState } from "react";
import "./Navbar.css";
import Logo from "../assets/logo.png";
import CartIcon from "../assets/cart_icon.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={Logo} alt="" />
        <p>Shopper</p>
      </div>
      <ul className="nav-menu">
        <li onClick={() => setMenu("shop")}>
          <Link to="/">Shop {menu === "shop" && <hr />}</Link>
        </li>
        <li onClick={() => setMenu("mens")}>
          <Link to="/mens">Menu {menu === "mens" && <hr />}</Link>
        </li>
        <li onClick={() => setMenu("womens")}>
          <Link to="/womens">Woman{menu === "womens" && <hr />}</Link>
        </li>
        <li onClick={() => setMenu("kids")}>
          <Link to="/kids">Kids{menu === "kids" && <hr />}</Link>
        </li>
      </ul>
      <div className="nav-login-cart">
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/cart">
          <img src={CartIcon} alt="" />
        </Link>
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  );
};

export default Navbar;
