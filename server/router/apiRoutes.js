import { Router } from "express";
const apiRouter = Router();

/** import all controllers */

/** POST Methods */
apiRouter.route("/saverequest").post();
/** GET Methods */
apiRouter.route("/geturl").get();

/** PUT Methods */

export default apiRouter;
