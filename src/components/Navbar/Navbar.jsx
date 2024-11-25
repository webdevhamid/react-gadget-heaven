import { Link, NavLink } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import "./Navbar.css";
import { getStoredCartList, getStoredWishList } from "../../Utilities/AddToDb";

const Navbar = () => {
  const [navColor, setNavColor] = useState(false);
  const location = useLocation();

  const cart = getStoredCartList();
  const wishList = getStoredWishList();

  useEffect(() => {
    if (location.pathname !== "/") {
      setNavColor(true);
    } else {
      setNavColor(false);
    }
  }, [location.pathname]);

  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/statistics">Statistics</NavLink>
      </li>
      <li>
        <NavLink to="/dashboard/currentTab">Dashboard</NavLink>
      </li>
      <li>
        <NavLink to="/login">Login</NavLink>
      </li>
    </>
  );
  return (
    <div
      className={`w-full absolute top-0 z-10 py-5 ${navColor ? "bg-white mt-0" : "bg-transparent"}`}
    >
      <nav className="navbar container mx-auto px-8">
        <div className="navbar-start">
          {/* Mobile Menu */}
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow gap-3 bg-white"
            >
              {navLinks}
            </ul>
          </div>
          {/* Nav logo  */}
          <NavLink
            to="/"
            className={`text-xl font-bold text-white ${navColor ? "!text-black" : "text-white"}`}
          >
            Gadget Heaven
          </NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-3">{navLinks}</ul>
        </div>
        <div className="navbar-end gap-4">
          {/* cart  */}

          <div className="indicator">
            <span className="indicator-item badge rounded-full text-color-primary">
              {cart.length}
            </span>
            <Link
              to={"/dashboard/cart"}
              className="p-2 bg-white rounded-full text-black cursor-pointer hover:text-color-primary transition"
            >
              <IoCartOutline className="text-xl" />
            </Link>
          </div>

          {/* wishlist */}
          <div className="indicator">
            <span className="indicator-item badge rounded-full text-color-primary">
              {wishList.length}
            </span>
            <Link
              to={"/dashboard/wishlist"}
              className="p-2 bg-white  rounded-full text-black cursor-pointer hover:text-color-primary transition"
            >
              <IoMdHeartEmpty className="text-xl" />
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
