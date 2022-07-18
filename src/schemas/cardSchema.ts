import Joi from "joi";
import { createCardData } from "../services/cardsService.js";

export const cardSchema = Joi.object<createCardData>({
	number: Joi.number().required(),
	title: Joi.string().required(),
	name: Joi.string().required(),
	code: Joi.number().required(),
	expireIn: Joi.date().required(),
	password: Joi.number().required(),
	virtual: Joi.boolean().required(),
	typeId: Joi.number().required(),
});
