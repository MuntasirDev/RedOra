import React from "react";
import { Link } from "react-router";

const Nav = () => {
  const links = (
    <>
      <Link to="/">
        <li className="m-2">
          <button className="font-serif relative text-black font-medium px-2 py-1 hover:text-[#23BE0A] transition-colors duration-300">
            Home
            <span className="font-serif absolute left-0 -bottom-1 h-0.5 w-0 bg-[#23BE0A] transition-all duration-300 hover:w-full"></span>
          </button>
        </li>
      </Link>

      <Link to="/About">
        <li className="m-2">
          <button className="font-serif relative text-black font-medium px-2 py-1 hover:text-[#23BE0A] transition-colors duration-300">
            About
            <span className="font-serif absolute left-0 -bottom-1 h-0.5 w-0 bg-[#23BE0A] transition-all duration-300 hover:w-full"></span>
          </button>
        </li>
      </Link>
    </>
  );

  return (
    <div className="navbar bg-white shadow-md px-4 lg:px-16 py-3">
      {/* Navbar start */}
      <div className="navbar-start">
        {/* Mobile dropdown */}
        <div className="dropdown">
          <div tabIndex={0} className="btn btn-ghost lg:hidden text-black">
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
            tabIndex="-1"
            className="font-serif menu menu-sm dropdown-content bg-white rounded-box z-10 mt-3 w-52 p-2 shadow-lg flex flex-col"
          >
            {links}
          </ul>
        </div>

        <a className="text-2xl font-bold text-[#23BE0A] font-serif">
          Read<span className="text-black">Ora</span>
        </a>
      </div>

      {/* Navbar center */}
      <div className=" font-serif navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 flex space-x-6">{links}</ul>
      </div>

      {/* Navbar end */}
      <div className="navbar-end">
        <a className="font-serif rounded-lg bg-[#23BE0A] text-white font-semibold px-6 py-3  hover:bg-green-700 transition-colors">
          Sign In
        </a>
      </div>
    </div>
  );
};

export default Nav;
