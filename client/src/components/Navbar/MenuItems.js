import React from "react";
import { Link } from "react-router-dom";

const MenuItems = () => {
  return (
    <ul className="">
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
  );
};

export default MenuItems;
