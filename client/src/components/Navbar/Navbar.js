// import React, { useState } from "react";
import { Link } from "react-router-dom";

// import MenuItems from "./MenuItems";

const Navbar = () => {
  // const [active, setActive] = useState(false);

  // const showMenu = () => {
  //   setActive(!active);
  // };
  return (
    <div className=" w-full flex justify-between p-4 items-center">
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
            <Link to="/">Logout</Link>
          </li>
        </ul>
        {/* <MenuItems /> */}
      </nav>
    </div>
  );
};

export default Navbar;
