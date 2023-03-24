import { Router } from "express";
const authRouter = Router();

/** import all controllers */
import * as authController from "../controllers/authController.js";
import { registerMail } from "../controllers/mailer.js";
import Auth, { localVariables } from "../middleware/auth.js";

/** POST Methods */
authRouter.route("/register").post(authController.register); // register user
authRouter.route("/registerMail").post(registerMail); // send the email
authRouter
  .route("/authenticate")
  .post(authController.verifyUser, (req, res) => res.end()); // authenticate user
authRouter
  .route("/login")
  .post(authController.verifyUser, authController.login); // login in app

/** GET Methods */
authRouter.route("/user/:username").get(authController.getUser); // user with username
authRouter
  .route("/generateOTP")
  .get(authController.verifyUser, localVariables, authController.generateOTP); // generate random OTP
authRouter
  .route("/verifyOTP")
  .get(authController.verifyUser, authController.verifyOTP); // verify generated OTP
authRouter.route("/createResetSession").get(authController.createResetSession); // reset all the variables

/** PUT Methods */
authRouter.route("/updateuser").put(Auth, authController.updateUser); // is use to update the user profile
authRouter
  .route("/resetPassword")
  .put(authController.verifyUser, authController.resetPassword); // use to reset password

export default authRouter;
