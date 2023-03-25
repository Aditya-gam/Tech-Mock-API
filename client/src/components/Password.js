/** IMPORT DEPENDENCIES */
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { useFormik } from "formik";

/** IMPORT HELPER */
import { passwordValidate } from "../helper/validate";
import { verifyPassword } from "../helper/helper";
import { useAuthStore } from "../store/store";
import useFetch from "../hooks/fetch.hook"; // Custom Hook
import Navbar from "./Navbar/Navbar";

/** IMPORT STYLES */
import styles from "../styles/Username.module.css";

/** IMPORT ASSETS */
import avatar from "../assets/profile.png";

export default function Password() {
  const navigate = useNavigate();
  const { username } = useAuthStore((state) => state.auth); // Get username from store
  const [{ isLoading, apiData, serverError }] = useFetch(`/user/${username}`); // Fetch user data

  /** FORM VALIDATION AND SUBMIT */
  const formik = useFormik({
    initialValues: {
      password: "",
    },
    validate: passwordValidate,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      let loginPromise = verifyPassword({
        username,
        password: values.password,
      });
      toast.promise(loginPromise, {
        loading: "Checking...",
        success: <b>Logged In Successfully...!</b>,
        error: <b>Password doesn't Match!</b>,
      });

      loginPromise.then((res) => {
        let { token } = res.data;
        localStorage.setItem("token", token);
        navigate("/profile");
      });
    },
  });

  if (isLoading) {
    return <h1 className="text-2xl font-bold">isLoading</h1>; // Loading
  }
  if (serverError) {
    return <h1 className="text-xl text-red-500">{serverError.message}</h1>; // Error
  }

  return (
    <div className="container mx-auto">
      <Navbar />
      <Toaster position="top-center" reverseOrder={false}></Toaster>

      <div className="flex justify-center items-center h-screen">
        <div className={styles.glass}>
          <div className="title flex flex-col items-center">
            <h4 className="text-5xl font-bold">
              Hello {apiData?.firstName || apiData?.username}
            </h4>
            <span className="py-4 text-xl w-2/3 text-center text-gray-500">
              Explore More by connecting with us.
            </span>
          </div>

          <form className="py-1" onSubmit={formik.handleSubmit}>
            <div className="profile flex justify-center py-4">
              <img
                src={apiData?.profile || avatar}
                className={styles.profile_img}
                alt="avatar"
              />
            </div>

            <div className="textbox flex flex-col items-center gap-6">
              <input
                {...formik.getFieldProps("password")}
                className={styles.textbox}
                type="password"
                placeholder="Password"
              />
              <button className={styles.btn} type="submit">
                Sign In
              </button>
            </div>

            <div className="text-center py-4">
              <span className="text-gray-500">
                Forgot Password?{" "}
                <Link className="text-red-500" to="/recovery">
                  Recover Now
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
