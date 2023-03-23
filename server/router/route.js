import { Router } from "express";
const authRouter = Router();

/** import all controllers */
import * as controller from "../controllers/appController.js";
import { registerMail } from "../controllers/mailer.js";
import Auth, { localVariables } from "../middleware/auth.js";

/** POST Methods */
authRouter.route("/register").post(controller.register); // register user
authRouter.route("/registerMail").post(registerMail); // send the email
authRouter
  .route("/authenticate")
  .post(controller.verifyUser, (req, res) => res.end()); // authenticate user
authRouter.route("/login").post(controller.verifyUser, controller.login); // login in app

/** GET Methods */
authRouter.route("/user/:username").get(controller.getUser); // user with username
authRouter
  .route("/generateOTP")
  .get(controller.verifyUser, localVariables, controller.generateOTP); // generate random OTP
authRouter.route("/verifyOTP").get(controller.verifyUser, controller.verifyOTP); // verify generated OTP
authRouter.route("/createResetSession").get(controller.createResetSession); // reset all the variables

/** PUT Methods */
authRouter.route("/updateuser").put(Auth, controller.updateUser); // is use to update the user profile
authRouter
  .route("/resetPassword")
  .put(controller.verifyUser, controller.resetPassword); // use to reset password

export default authRouter;
