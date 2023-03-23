/** IMPORT DEPENDENCIES */
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";

/** IMPORT HELPERS */
import { profileValidation } from "../helper/validate";
import convertToBase64 from "../helper/convert";
import { updateUser } from "../helper/helper";

/** IMPORT HOOKS */
import useFetch from "../hooks/fetch.hook";

/** IMPORT STYLES */
import styles from "../styles/Username.module.css";
import extend from "../styles/Profile.module.css";

/** IMPORT ASSETS */
import avatar from "../assets/profile.png";

export default function Profile() {
  const [file, setFile] = useState(); // file state
  const [{ isLoading, apiData, serverError }] = useFetch(); // fetch user data
  const navigate = useNavigate(); // navigate hook

  /** FORM VALIDATION AND SUBMIT */
  const formik = useFormik({
    initialValues: {
      firstName: apiData?.firstName || "",
      lastName: apiData?.lastName || "",
      email: apiData?.email || "",
      mobile: apiData?.mobile || "",
      address: apiData?.address || "",
    },
    enableReinitialize: true,
    validate: profileValidation,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      values = await Object.assign(values, {
        // add profile to values
        profile: file || apiData?.profile || "",
      });
      let updatePromise = updateUser(values); // update user data

      // toast
      toast.promise(updatePromise, {
        loading: "Updating...", // loading message
        success: <b>Update Successfully...!</b>, // success message
        error: <b>Could not Update!</b>, // error message
      });
      navigate("/");
    },
  });

  /** formik doensn't support file upload so we need to create this handler */
  const onUpload = async (e) => {
    const base64 = await convertToBase64(e.target.files[0]); // convert file to base64
    setFile(base64);
  };

  // logout handler function
  function userLogout() {
    localStorage.removeItem("token"); // remove token from localstorage
    navigate("/username");
  }

  if (isLoading) {
    return <h1 className="text-2xl font-bold">isLoading</h1>; // Loading
  }
  if (serverError) {
    return <h1 className="text-xl text-red-500">{serverError.message}</h1>; // Error
  }

  return (
    <div className="container mx-auto">
      <Toaster position="top-center" reverseOrder={false}></Toaster>

      <div className="flex justify-center items-center h-screen">
        <div
          className={`${styles.glass} ${extend.glass}`}
          style={{ width: "45%", paddingTop: "3em" }}
        >
          <div className="title flex flex-col items-center">
            <h4 className="text-5xl font-bold">Profile</h4>
            <span className="py-4 text-xl w-2/3 text-center text-gray-500">
              You can update the details.
            </span>
          </div>

          <form className="py-1" onSubmit={formik.handleSubmit}>
            <div className="profile flex justify-center py-4">
              <label htmlFor="profile">
                <img
                  src={apiData?.profile || file || avatar}
                  className={`${styles.profile_img} ${extend.profile_img}`}
                  alt="avatar"
                />
              </label>

              <input
                onChange={onUpload}
                type="file"
                id="profile"
                name="profile"
              />
            </div>

            <div className="textbox flex flex-col items-center gap-6">
              <div className="name flex w-3/4 gap-10">
                <input
                  {...formik.getFieldProps("firstName")}
                  className={`${styles.textbox} ${extend.textbox}`}
                  type="text"
                  placeholder="FirstName"
                />
                <input
                  {...formik.getFieldProps("lastName")}
                  className={`${styles.textbox} ${extend.textbox}`}
                  type="text"
                  placeholder="LastName"
                />
              </div>

              <div className="name flex w-3/4 gap-10">
                <input
                  {...formik.getFieldProps("mobile")}
                  className={`${styles.textbox} ${extend.textbox}`}
                  type="text"
                  placeholder="Mobile No."
                />
                <input
                  {...formik.getFieldProps("email")}
                  className={`${styles.textbox} ${extend.textbox}`}
                  type="text"
                  placeholder="Email*"
                />
              </div>

              <input
                {...formik.getFieldProps("address")}
                className={`${styles.textbox} ${extend.textbox}`}
                type="text"
                placeholder="Address"
              />
              <button className={styles.btn} type="submit">
                Update
              </button>
            </div>
          </form>
          <div className="text-center py-4">
            <span className="text-gray-500">
              come back later?{" "}
              <Link to="/" className="text-red-500">
                Skip{" / "}
              </Link>
              <button onClick={userLogout} className="text-red-500">
                Logout
              </button>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
