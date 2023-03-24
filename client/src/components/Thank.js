import React from "react";
import { Link } from "react-router-dom";

import Navbar from "./Navbar/Navbar";

const Thank = () => {
  return (
    <section className="thank p-20">
      <Navbar />
      <div className="text-4xl font-mono font-bold ">Thank You!</div>

      <p className="text-lg font-mono">
        The request has been submitted succesfully
      </p>
      <Link to="/">
        <button className="bg-gray-500 py-2 mt-6 px-6 text-white rounded-xl shadow-md">
          close
        </button>
      </Link>
    </section>
  );
};

export default Thank;
