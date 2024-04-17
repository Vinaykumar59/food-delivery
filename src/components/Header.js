import { HEADER_LOGO, CART_LOGO } from "../Utils/constants";
import { useState } from "react";

const Header = () => {
  const [loginState, setLoginState] = useState("Login");

  const login = () => {
    loginState === "Login" ? setLoginState("Logout") : setLoginState("Login");
  };

  return (
    <div className="header-wrapper">
      <img src={HEADER_LOGO} alt="app-logo" className="logo"></img>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>
            <img src={CART_LOGO} className="cart" />
          </li>
        </ul>
        <button
          className={
            "login-btn " + " " + (loginState === "Logout" ? "logout" : "")
          }
          onClick={login}
        >
          {loginState}
        </button>
      </div>
    </div>
  );
};

export default Header;
