import { HEADER_LOGO, CART_LOGO } from "../Utils/constants";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";
import { useContext } from "react";
import { user} from "../Utils/userContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [loginState, setLoginState] = useState("Login");

  const login = () => {
    loginState === "Login" ? setLoginState("Logout") : setLoginState("Login");
  };

  // here we are reading data from state/ subscribing from the state
  const items = useSelector((store) => store.cart.items);
  console.log('items', items);

  const userName = useContext(user);
  console.log(userName);
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
    <div className="header-wrapper flex h-[88px] justify-between items-center bg-slate-400">
      <img src={HEADER_LOGO} alt="app-logo" className="logo w-10 h-10"></img>
      <div className="nav-items flex">
        <ul className="flex items-center">
          <li className="px-2"> online: {onlineStatus ? "🟢" : "🔴"}</li>
          <li className="px-2">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="px-2">
            <Link to={"about-us"}>About Us</Link>
          </li>
          <li className="px-2">
            <Link to={"/contact-us"}>Contact Us</Link>
          </li>
          <li className="px-2">
            {/* <img src={CART_LOGO} className="cart h-10 w-10" /> */}
            <Link to={"/cart"}>Cart({items.length})</Link>
            
          </li>
          <li>User:{userName.loggedInUser} </li>
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
