import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import sun from "../../assets/icons/sun .png";
import moon from "../../assets/icons/moon.png";

const Navbar = () => {
  // dark and light mode -
  const [theme, setTheme] = useState("null");
  const handleToggle = () => {
    setTheme((curr) => (curr === "dark" ? "light" : "dark"));
    document.documentElement.classList.toggle("dark");
  };

  // useEffect(() => {}, [theme]);

  // Navlink items..
  const items = (
    <>
      <li>
        <NavLink
          className="bg-transparent hover:text-primary  navlink py-1 text-xl"
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className="bg-transparent hover:text-primary navlink py-1 text-xl"
          to="appointment"
        >
          Appointment
        </NavLink>
      </li>
      <li>
        <NavLink
          className="bg-transparent hover:text-primary navlink py-1 text-xl"
          to="about"
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          className="bg-transparent hover:text-primary navlink py-1 text-xl"
          to="reviews"
        >
          Reviews
        </NavLink>
      </li>
      <li>
        <NavLink
          className="bg-transparent hover:text-primary navlink py-1 text-xl"
          to="contact"
        >
          Contact Us
        </NavLink>
      </li>
      <li>
        <NavLink
          className="bg-transparent hover:text-primary navlink py-1 text-xl"
          to="signIn"
        >
          SignIn
        </NavLink>
      </li>
    </>
  );
  return (
    <div className=" backdrop-blur sticky border-b-2 border-slate-200 dark:border-slate-600  top-0 z-50 navbar bg-slate-100/[0.8] text-black dark:bg-slate-700/[0.8] dark:text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 px-2 shadow bg-slate-200 text-black dark:bg-slate-600 dark:text-white rounded-md pb-5 w-52"
          >
            {items}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">Doctors Portal</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{items}</ul>
      </div>
      <div className="navbar-end">
        <button onClick={handleToggle}>
          {/* {theme === "dark" ? <span>Dark</span> : <span>Light</span>} mode */}
          <img
            className="block w-8 h-8 cursor-pointer lg:mr-10"
            src={theme === "dark" ? sun : moon}
            alt="..."
          />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
