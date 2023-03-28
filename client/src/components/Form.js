import React, { useState } from "react";
import { Link } from "react-router-dom";

import Navbar from "./Navbar/Navbar";
// import TestNavbar from "./Navbar/TestNavbar";

const Form = () => {
  const [inputFields, setInputFields] = useState([
    {
      parameter: "",
      Value: "",
    },
  ]);

  const addInputFields = () => {
    setInputFields([
      ...inputFields,
      {
        parameter: "",
        Value: "",
      },
    ]);
  };

  const removeInputFields = (index) => {
    const rows = [...inputFields];
    rows.splice(index, 1);
    setInputFields(rows);
  };

  const handleChange = (index, event) => {
    const { name, value } = event.target;
    const list = [...inputFields];
    list[index][name] = value;
    setInputFields(list);
  };

  return (
    <div className="form-wrap ">
      {/* <TestNavbar /> */}
      <Navbar />
      <div className="w-full max-w-xl m-auto mt-10 ">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 font-serif ">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-lg font-bold mb-2"
              htmlFor="username"
            >
              Select the request type
            </label>
            <div className="inline-block relative w-64">
              <select className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                <option disabled selected hidden value="">
                  Request Type
                </option>
                <option className="hover:bg-red-200">POST</option>
                <option> GET</option>
                <option> PUT</option>
                <option> PATCH</option>
                <option> DELETE</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-lg font-bold mb-2"
              htmlFor="username"
            >
              Select the API
            </label>
            <div className="inline-block relative w-64">
              <select className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                <option disabled hidden selected value="">
                  API Name
                </option>
                <option className="hover:bg-red-200">API Name</option>
                <option> API Name</option>
                <option> API Name</option>
                <option> API Name</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              for="username"
            >
              Endpoint URL
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="url"
              type="text"
            />
          </div>

          <div className="container mx-auto">
            <div className="flex flex-col">
              {inputFields.map((data, index) => {
                const { parameter, Value } = data;
                return (
                  <div className="flex flex-row my-3" key={index}>
                    <div className="flex flex-col w-1/2 mr-2">
                      <div className="form-group">
                        <label className="block text-gray-700 font-bold mb-2">
                          Enter the test data
                        </label>
                        <input
                          type="text"
                          name="parameter"
                          value={parameter}
                          onChange={(event) => handleChange(index, event)}
                          placeholder="parameter"
                          className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col w-1/2">
                      <div className="form-group relative">
                        <label className="block text-gray-700 font-bold mb-8">
                          {" "}
                        </label>
                        <input
                          type="value"
                          name="Value"
                          value={Value}
                          onChange={(event) => handleChange(index, event)}
                          placeholder="value"
                          className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                      </div>
                    </div>
                    {inputFields.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeInputFields(index)}
                        className="cross mt-10 text-white"
                      >
                        &#10005;
                      </button>
                    )}
                  </div>
                );
              })}
              <div className="flex flex-row justify-start ">
                <button
                  type="button"
                  onClick={addInputFields}
                  className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline cross "
                >
                  &#10010;
                </button>
              </div>
            </div>
          </div>

          <label className="block text-gray-700 font-bold mb-2 mt-4">
            Response body
          </label>
          <textarea
            id="message"
            rows="4"
            class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500  dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          ></textarea>

          <Link to="/thanks">
            <button
              type="submit "
              className="bg-gray-500 py-2 mt-6 px-6 text-white rounded-xl shadow-md"
            >
              Submit
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Form;
