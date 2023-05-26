/** IMPORT DEPENDENCIES */
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

/** import all components */
import Username from "./components/Username";
import Password from "./components/Password";
import Register from "./components/Register";
import Profile from "./components/Profile";
import Recovery from "./components/Recovery";
import Reset from "./components/Reset";
import PageNotFound from "./components/PageNotFound";
// import Navbar from "./components/Navbar/Navbar";
import Form from "./components/Form";
import Thank from "./components/Thank";

/** auth middleware */
import { AuthorizeUser, ProtectRoute } from "./middleware/auth";

/** root routes */
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <AuthorizeUser>
        <Form />
      </AuthorizeUser>
    ),
  },
  {
    path: "/apiform",
    element: (
      <AuthorizeUser>
        <Form />
      </AuthorizeUser>
    ),
  },
  {
    path: "/username",
    element: <Username />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/password",
    element: (
      <ProtectRoute>
        <Password />
      </ProtectRoute>
    ),
  },
  {
    path: "/profile",
    element: (
      <AuthorizeUser>
        <Profile />
      </AuthorizeUser>
    ),
  },
  {
    path: "/recovery",
    element: <Recovery />,
  },
  {
    path: "/reset",
    element: <Reset />,
  },
  {
    path: "/thanks",
    element: <Thank />,
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
]);

export default function App() {
  return (
    <main>
      {/* <Navbar /> */}
      <RouterProvider router={router}></RouterProvider>
    </main>
  );
}
