import React, { useState } from "react";
import { Link } from "react-router";

const Nav = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = (
    <>
      <li>
        <Link
          to="/"
          className="font-serif relative text-black font-medium px-2 py-1 hover:text-[#23BE0A] transition-colors duration-300"
          onClick={() => setMobileOpen(false)}
        >
          Home
          <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-[#23BE0A] transition-all duration-300 hover:w-full"></span>
        </Link>
      </li>
      <li>
        <Link
          to="/ReadList"
          className="font-serif relative text-black font-medium px-2 py-1 hover:text-[#23BE0A] transition-colors duration-300"
          onClick={() => setMobileOpen(false)}
        >
          Listed Books
          <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-[#23BE0A] transition-all duration-300 hover:w-full"></span>
        </Link>
      </li>

      <li>
        <Link
          to="/read"
          className="font-serif relative text-black font-medium px-2 py-1 hover:text-[#23BE0A] transition-colors duration-300"
          onClick={() => setMobileOpen(false)}
        >
          Pages to Read
          <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-[#23BE0A] transition-all duration-300 hover:w-full"></span>
        </Link>
      </li>
    </>
  );

  return (
    <div className="navbar bg-white shadow-md px-4 lg:px-16 py-3">
      <div className="navbar-start">
        <button
          className="btn btn-ghost text-black lg:hidden"
          onClick={() => setMobileOpen((prev) => !prev)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        <a className="text-2xl font-bold text-[#23BE0A] font-serif ml-2">
          Read<span className="text-black">Ora</span>
        </a>
      </div>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <ul className="menu menu-sm dropdown-content mt-3 z-[999] p-2 shadow bg-white rounded-box w-52 flex flex-col lg:hidden absolute">
          {links}
        </ul>
      )}

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 flex space-x-6">{links}</ul>
      </div>

      <div className="navbar-end">
        <a className="font-serif rounded-lg bg-[#23BE0A] text-white font-semibold px-6 py-3 hover:bg-green-700 transition-colors">
          Sign In
        </a>
      </div>
    </div>
  );
};

export default Nav;
