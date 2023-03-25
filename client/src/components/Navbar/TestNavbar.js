import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const TestNavbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  return (
    <nav className="flex items-center justify-between flex-wrap bg-transparent py-4 px-6 fixed top-0 w-full z-10">
      <div className="flex items-center flex-shrink-0 mr-6">
        <Link to="/" className="">
          <img src="logo.png" alt="Logo" width="50" height="50" />
        </Link>
      </div>
      <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-black-200 border-gray-400 hover:text-red hover:border-red">
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden">
        <ul className="text-md lg:flex-grow lg:flex lg:justify-end">
          {isLoggedIn ? (
            <>
              <li className="block mt-4 lg:inline-block lg:mt-0 text-black-200 hover:text-red mr-10">
                <Link to="/history">History</Link>
              </li>
              <li className="block mt-4 lg:inline-block lg:mt-0 text-black-200 hover:text-red">
                <Link to="/logout">Logout</Link>
              </li>
            </>
          ) : (
            <>
              <li className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-10">
                <Link to="/register">Sign Up</Link>
              </li>
              <li className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white">
                <Link to="/login">Login</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default TestNavbar;
