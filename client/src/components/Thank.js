import React from "react";
import { Link } from "react-router-dom";
import jwt_decode from "jwt-decode";

import Navbar from "./Navbar/Navbar";

const Thank = () => {
  const getUserID = () => {
    const token = localStorage.getItem("token"); // get token from localstorage
    if (!token) return Promise.reject("Cannot find Token"); // if token not found
    let decode = jwt_decode(token); // decode token
    return decode.userId;
  };
  return (
    <section className="thank p-20">
      <Navbar />
      <div className="text-4xl font-mono font-bold ">Thank You!</div>

      <p className="text-lg font-mono">
        The request has been submitted succesfully
      </p>
      <p className="text-lg font-mono">
        You can make a request to: http://localhost:8080/req/{getUserID()}/{" "}
        <br />
        Add your endpoint after last slash
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
