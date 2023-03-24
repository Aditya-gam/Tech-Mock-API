/** IMPORT DEPENDENCIES */
import React from "react";
import toast, { Toaster } from "react-hot-toast";
import { useFormik } from "formik";
import { useNavigate, Navigate } from "react-router-dom";

/** IMPORT HELPERS */
import { resetPasswordValidation } from "../helper/validate";
import { resetPassword } from "../helper/helper";
import Navbar from "./Navbar/Navbar";

/** IMPORT STORE */
import { useAuthStore } from "../store/store";

/** IMPORT HOOKS */
import useFetch from "../hooks/fetch.hook";

/** IMPORT STYLES */
import styles from "../styles/Username.module.css";

export default function Reset() {
  const { username } = useAuthStore((state) => state.auth); // Get username from store
  const navigate = useNavigate(); // Navigate hook
  const [{ isLoading, status, serverError }] = useFetch("createResetSession"); // Fetch hook

  /** FORM VALIDATION AND SUBMIT */
  const formik = useFormik({
    initialValues: {
      password: "",
      confirm_pwd: "",
    },
    validate: resetPasswordValidation,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      let resetPromise = resetPassword({ username, password: values.password });

      toast.promise(resetPromise, {
        loading: "Updating...",
        success: <b>Reset Successfully...!</b>,
        error: <b>Could not Reset!</b>,
      });

      resetPromise.then(function () {
        navigate("/password");
      });
    },
  });

  if (isLoading) {
    return <h1 className="text-2xl font-bold">isLoading</h1>; // Display loading message
  }
  if (serverError) {
    return <h1 className="text-xl text-red-500">{serverError.message}</h1>; // Display error message
  }
  if (status && status !== 201) {
    return <Navigate to={"/password"} replace={true}></Navigate>; // Redirect to password page
  }

  return (
    <div className="container mx-auto">
      <Navbar />
      <Toaster position="top-center" reverseOrder={false}></Toaster>

      <div className="flex justify-center items-center h-screen">
        <div className={styles.glass} style={{ width: "50%" }}>
          <div className="title flex flex-col items-center">
            <h4 className="text-5xl font-bold">Reset</h4>
            <span className="py-4 text-xl w-2/3 text-center text-gray-500">
              Enter new password.
            </span>
          </div>

          <form className="py-20" onSubmit={formik.handleSubmit}>
            <div className="textbox flex flex-col items-center gap-6">
              <input
                {...formik.getFieldProps("password")}
                className={styles.textbox}
                type="text"
                placeholder="New Password"
              />
              <input
                {...formik.getFieldProps("confirm_pwd")}
                className={styles.textbox}
                type="text"
                placeholder="Repeat Password"
              />
              <button className={styles.btn} type="submit">
                Reset
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
