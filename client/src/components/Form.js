import React, { useState, useEffect } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../helper/axios";

import Navbar from "./Navbar/Navbar";

const validationSchema = Yup.object().shape({
  requestType: Yup.string().required("Request type is required"),
  endpointUrl: Yup.string().required("Endpoint URL is required"),
  responseBody: Yup.string().required("Response body is required"),
  responseCode: Yup.number()
    .required("Required")
    .min(100, "Must be greater than or equal to 100")
    .max(600, "Must be less than or equal to 600"),
});

const MyForm = () => {
  const navigate = useNavigate();
  // const [formData, setFormData] = useState({});

  // useEffect(() => {
  //   setFormData({});
  //   console.log(formData);
  // }, [formData]);

  const getUserID = () => {
    const token = localStorage.getItem("token"); // get token from localstorage
    if (!token) return Promise.reject("Cannot find Token"); // if token not found
    let decode = jwt_decode(token); // decode token
    return decode.userId;
  };

  const onSubmit = async (values) => {
    // e.preventDefault();
    try {
      const userId = await getUserID();
      const payload = { ...values, userId };
      console.log(payload);
      alert("Form submitted successfully", payload);
      await axiosInstance.post("/api/createApiData", payload);
      navigate("/thanks");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="form-wrap">
      <Navbar />
      <h1 className="text-3xl font-bold text-center my-8">My Form</h1>

      <div className="w-full max-w-xl m-auto mt-10 ">
        <Formik
          initialValues={{
            requestType: "",
            endpointUrl: "",
            responseBody: "",
            responseCode: "",
          }}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ errors, touched }) => (
            <Form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 font-serif">
              <div className="mb-4">
                <label
                  htmlFor="requestType"
                  className="block text-gray-700 text-lg font-bold mb-2"
                >
                  Request Type
                </label>
                <div className="inline-block relative w-64">
                  <Field
                    as="select"
                    name="requestType"
                    id="requestType"
                    className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                  >
                    <option disabled selected hidden value="">
                      Select a request type
                    </option>
                    <option className="hover:bg-red-200" value="GET">
                      GET
                    </option>
                    <option className="hover:bg-red-200" value="POST">
                      POST
                    </option>
                    <option className="hover:bg-red-200" value="PUT">
                      PUT
                    </option>
                    <option className="hover:bg-red-200" value="PATCH">
                      PATCH
                    </option>
                    <option className="hover:bg-red-200" value="DELETE">
                      DELETE
                    </option>
                  </Field>
                  {errors.requestType && touched.requestType ? (
                    <div className="bg-red-500">{errors.requestType}</div>
                  ) : null}
                </div>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="endpointUrl"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Endpoint URL
                </label>
                <Field
                  type="text"
                  name="endpointUrl"
                  id="endpointUrl"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                {errors.endpointUrl && touched.endpointUrl ? (
                  <div>{errors.endpointUrl}</div>
                ) : null}
              </div>
              <div className="mb-4">
                <label
                  htmlFor="responseBody"
                  className="block text-gray-700 font-bold mb-2 mt-4"
                >
                  Response Body
                </label>
                <Field
                  as="textarea"
                  name="responseBody"
                  id="responseBody"
                  class="block text-black p-2.5 w-full text-sm  bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500  dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
                {errors.responseBody && touched.responseBody ? (
                  <div>{errors.responseBody}</div>
                ) : null}
              </div>
              <div className="mb-4">
                <label
                  htmlFor="endpointUrl"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Response Code
                </label>
                <Field
                  type="text"
                  name="responseCode"
                  id="responseCode"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                {errors.responseCode && touched.responseCode ? (
                  <div>{errors.responseCode}</div>
                ) : null}
              </div>
              <button
                type="submit"
                className="bg-gray-500 py-2 mt-6 px-6 text-white rounded-xl shadow-md"
              >
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default MyForm;
