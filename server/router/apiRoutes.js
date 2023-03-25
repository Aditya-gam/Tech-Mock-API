import { Router } from "express";
const apiRouter = Router();

/** import all controllers */
import * as apiController from "../controllers/apiController";

/** POST Methods */
apiRouter.route("/createApiData").post(apiController.createApiData);
/** GET Methods */
apiRouter.route("/getApiData").get(apiController.getApiData);

/** PUT Methods */

export default apiRouter;
