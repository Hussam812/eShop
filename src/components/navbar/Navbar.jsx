import React, { useState } from "react";
import "./Navbar.css";
import Logo from "../assets/logo.png";
import CartIcon from "../assets/cart_icon.png";
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
          Shop {menu === "shop" && <hr />}
        </li>
        <li onClick={() => setMenu("mens")}>
          Menu {menu === "mens" && <hr />}
        </li>
        <li onClick={() => setMenu("womens")}>
          Woman{menu === "womens" && <hr />}
        </li>
        <li onClick={() => setMenu("kids")}>Kids{menu === "kids" && <hr />}</li>
      </ul>
      <div className="nav-login-cart">
        <button>Login</button>
        <img src={CartIcon} alt="" />
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  );
};

export default Navbar;
