import { Router } from "express";
const reqRouter = Router();

/** import all controllers */
import * as apiController from "../controllers/apiController.js";

/** GET Methods */
reqRouter.route("/:userId/*").get(apiController.searchApiData);

/** POST Methods */
reqRouter.route("/:userId/*").post(apiController.searchApiData);

/** PUT Methods */
reqRouter.route("/:userId/*").put(apiController.searchApiData);

/** PATCH Methods */
reqRouter.route("/:userId/*").patch(apiController.searchApiData);

/** DELETE Methods */
reqRouter.route("/:userId/*").delete(apiController.searchApiData);

export default reqRouter;
