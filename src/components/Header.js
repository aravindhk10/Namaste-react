import React, { useContext, useState } from "react";
import { LOGO_URL } from "../utils/urls";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btname, setbtname] = useState("Login");
  const status = useOnlineStatus();
  const { loggedinusername } = useContext(UserContext);
  const cartitems = useSelector((store) => store.cart.items);
  console.log(cartitems);
  return (
    <div className="flex bg-black text-white justify-between sticky top-0 z-50 shadow-lg">
      <div className="logo">
        <Link to="/">
          <img src={LOGO_URL} alt="logo" className="w-24" />
        </Link>
      </div>
      <div className="flex items-center p-4">
        <ul className="flex ">
          <li className="px-4">Online Status: {status ? "🟢" : "🔴"}</li>
          <li>
            <Link className="px-4" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="px-4" to="/about">
              About Us
            </Link>
          </li>
          <li>
            <Link className="px-4" to="/contact">
              Contact Us
            </Link>
          </li>
          <li>
            <Link className="px-4" to="/">
              Account
            </Link>
          </li>
          <li>
            <Link className="px-4" to="/grocery">
              Grocery
            </Link>
          </li>
          <li>
            <Link to="/cart" className="px-4 text-white cursor-pointer">
              ({cartitems.length})🛒
            </Link>
          </li>
          <li>
            <button
              className="log-btn"
              onClick={() => {
                btname === "Login" ? setbtname("LogOut") : setbtname("Login");
              }}
            >
              {btname}
            </button>
          </li>
          <li className="px-4 font-semibold">
            <span>{loggedinusername}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
