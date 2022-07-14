import Joi from "joi";
import { createCredentialData } from "../services/credentialsService.js";

export const credentialSchema = Joi.object<createCredentialData>({
	title: Joi.string().required(),
	url: Joi.string().uri().required(),
	username: Joi.string().required(),
	password: Joi.string().required(),
});
