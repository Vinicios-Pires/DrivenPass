import { Router } from "express";

import * as authController from "../controllers/authController.js";

import { validateSchemaMiddleware } from "../middlewares/validateSchema.js";
import { userSchema } from "../schemas/authSchema.js";

const authRouter = Router();

// authRouter.use(validateSchemaMiddleware(userSchema));

authRouter.post(
	"/signup",
	validateSchemaMiddleware(userSchema),
	authController.signUp
);
authRouter.post(
	"/signin",
	validateSchemaMiddleware(userSchema),
	authController.signIn
);

export default authRouter;
