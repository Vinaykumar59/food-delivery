import { HEADER_LOGO, CART_LOGO } from "../Utils/constants";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";

const Header = () => {
  const [loginState, setLoginState] = useState("Login");

  const login = () => {
    loginState === "Login" ? setLoginState("Logout") : setLoginState("Login");
  };

  // here useEffect calls whenever the dependency array variable changes i.e,loginState
  //if dependency array is empty or not present , useEffect calls after every render only once
  useEffect(
    // effect function
    () => {
      // debugger;
      console.log("login state", loginState);
      // cleanup function , which gets called when a component unmounts
      return () => {
        console.log("");
      };
    },
    [loginState]
  );
  const onlineStatus = useOnlineStatus();

  return (
    <div className="header-wrapper">
      <img src={HEADER_LOGO} alt="app-logo" className="logo"></img>
      <div className="nav-items">
        <ul>
          <li> online: {onlineStatus ? "🟢" : "🔴"}</li>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"about-us"}>About Us</Link>
          </li>
          <li>
            <Link to={"/contact-us"}>Contact Us</Link>
          </li>
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
