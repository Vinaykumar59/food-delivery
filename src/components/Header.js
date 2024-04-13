import {HEADER_LOGO, CART_LOGO} from "../Utils/constants"

const Header = () => {
    return (
      <div className="header-wrapper">
        <img
          src={HEADER_LOGO}
          alt="app-logo"
          className="logo"
        ></img>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>
              <img
                src={CART_LOGO}
                className="cart"
              />
            </li>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;