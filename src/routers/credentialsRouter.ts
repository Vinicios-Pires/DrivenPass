import { Router } from "express";

import { ensureAuthMiddleware } from "../middlewares/ensureAuthMiddleware.js";
import { validateSchemaMiddleware } from "../middlewares/validateSchema.js";
import { credentialSchema } from "../schemas/credentialSchema.js";

import * as credentialsController from "./../controllers/credentialsController.js";

const credentialsRouter = Router();

credentialsRouter.use(ensureAuthMiddleware);

credentialsRouter.post(
	"/credentials",
	validateSchemaMiddleware(credentialSchema),
	credentialsController.createCredential
);

credentialsRouter.get("/credentials", credentialsController.getAllCredentials);

credentialsRouter.get("/credentials/:id", credentialsController.getCredential);

credentialsRouter.delete(
	"/credentials/:id",
	credentialsController.deleteCredential
);

export default credentialsRouter;
