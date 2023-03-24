// import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// import MenuItems from "./MenuItems";

const Navbar = () => {
  const navigate = useNavigate();
  // const [active, setActive] = useState(false);

  // const showMenu = () => {
  //   setActive(!active);
  // };
  // logout handler function
  function userLogout() {
    localStorage.removeItem("token"); // remove token from localstorage
    navigate("/username");
  }
  return (
    <div className="w-full flex justify-between p-4 items-center">
      <div className="text-2xl font-bold text-center">
        <h1>
          <span className="block uppercase text-2xl">logo</span>
        </h1>
      </div>

      <nav>
        <div></div>
        <ul className="hidden md:flex gap-8 p-6 uppercase bg-white/10">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/username">Login</Link>
          </li>
          <li>
            <button onClick={userLogout}>Logout</button>
          </li>
        </ul>
        {/* <MenuItems /> */}
      </nav>
    </div>
  );
};

export default Navbar;
