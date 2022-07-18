import Joi from "joi";
import { createWifiData } from "../services/wifiService.js";

export const wifiSchema = Joi.object<createWifiData>({
	title: Joi.string().required(),
	name: Joi.string().required(),
	password: Joi.string().required(),
});
