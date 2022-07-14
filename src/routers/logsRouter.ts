import { Router } from "express";

import { ensureAuthMiddleware } from "../middlewares/ensureAuthMiddleware.js";
import { validateSchemaMiddleware } from "../middlewares/validateSchema.js";
import { credentialSchema } from "../schemas/credentialSchema.js";

import * as logsController from "./../controllers/logsController.js";

const logsRouter = Router();

logsRouter.use(ensureAuthMiddleware);

logsRouter.post(
	"/credentials",
	validateSchemaMiddleware(credentialSchema),
	logsController.createCredential
);
logsRouter.get("/credentials", logsController.getAllCredentials);

logsRouter.post("/notes");
logsRouter.get("/notes");

logsRouter.post("/card");
logsRouter.get("/card");

logsRouter.post("/wifi");
logsRouter.get("/wifi");

logsRouter.get("/logs");

export default logsRouter;
