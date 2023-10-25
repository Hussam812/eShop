import React, { useContext, useEffect, useState } from "react";
import "./Navbar.css";
import Logo from "../assets/logo.png";
import CartIcon from "../assets/cart_icon.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../context/ShopContext";
import humbergerMenu from "../assets/Hamburger_icon.svg.png";
import close from "../assets/close_png.png";
const Menu = ({ menu, setMenu, mobileMenu, setMobileMenu }) => (
  <ul
    className={`${mobileMenu ? "nav-menu active" : "nav-menu"}`}
    onClick={() => setMobileMenu(!mobileMenu)}
  >
    <li onClick={() => setMenu("shop")}>
      <Link style={{ textDecoration: "none" }} to="/">
        Shop {menu === "shop" && <hr />}
      </Link>
    </li>
    <li onClick={() => setMenu("mens")}>
      <Link style={{ textDecoration: "none" }} to="/mens">
        Men {menu === "mens" && <hr />}
      </Link>
    </li>
    <li onClick={() => setMenu("womens")}>
      <Link style={{ textDecoration: "none" }} to="/womens">
        Woman{menu === "womens" && <hr />}
      </Link>
    </li>
    <li onClick={() => setMenu("kids")}>
      <Link style={{ textDecoration: "none" }} to="/kids">
        Kids{menu === "kids" && <hr />}
      </Link>
    </li>
  </ul>
);

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const [mobileMenu, setMobileMenu] = useState(false);

  const { getTotlCartItems } = useContext(ShopContext);

  return (
    <div className="navbar">
      <Link
        to="/"
        style={{ textDecoration: "none" }}
        onClick={() => {
          setMenu("shop");
          window.scrollTo(0, 0);
        }}
      >
        <div className="nav-logo">
          <img src={Logo} alt="" />
          <p>SHOPPER</p>
        </div>
      </Link>
      <Menu
        menu={menu}
        setMenu={setMenu}
        mobileMenu={mobileMenu}
        setMobileMenu={setMobileMenu}
      />
      <div className="nav-login-cart">
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/cart">
          <img src={CartIcon} alt="" />
        </Link>
        <div className="nav-cart-count">{getTotlCartItems()}</div>
      </div>

      <div className="nav-menu-mobile">
        <img
          src={mobileMenu ? close : humbergerMenu}
          alt=""
          onClick={() => setMobileMenu(!mobileMenu)}
        />
      </div>
    </div>
  );
};

export default Navbar;
