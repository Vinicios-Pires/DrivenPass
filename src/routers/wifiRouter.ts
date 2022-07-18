import { Router } from "express";

import { ensureAuthMiddleware } from "../middlewares/ensureAuthMiddleware.js";
import { validateSchemaMiddleware } from "../middlewares/validateSchema.js";
import { wifiSchema } from "../schemas/wifiSchema.js";

import * as wifiController from "./../controllers/wifiController.js";

const wifiRouter = Router();

wifiRouter.use(ensureAuthMiddleware);

wifiRouter.post(
	"/wifi",
	validateSchemaMiddleware(wifiSchema),
	wifiController.createWifi
);

wifiRouter.get("/wifi", wifiController.getAllWifi);

wifiRouter.get("/wifi/:id", wifiController.getWifi);

wifiRouter.delete("/wifi/:id", wifiController.deleteWifi);

export default wifiRouter;
