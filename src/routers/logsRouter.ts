import { Router } from "express";

import { ensureAuthMiddleware } from "../middlewares/ensureAuthMiddleware.js";

import * as logsController from "./../controllers/logsController.js";

const logsRouter = Router();

logsRouter.use(ensureAuthMiddleware);

logsRouter.get("/logs", logsController.countLogs);

export default logsRouter;
