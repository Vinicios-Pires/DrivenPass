import { Router } from "express";

import { ensureAuthMiddleware } from "../middlewares/ensureAuthMiddleware.js";
import { validateSchemaMiddleware } from "../middlewares/validateSchema.js";
import { cardSchema } from "../schemas/cardSchema.js";
import * as cardsController from "./../controllers/cardsController.js";

const cardsRouter = Router();

cardsRouter.use(ensureAuthMiddleware);

cardsRouter.post(
	"/cards",
	validateSchemaMiddleware(cardSchema),
	cardsController.createCard
);

cardsRouter.get("/cards", cardsController.getCards);

cardsRouter.get("/cards/:id", cardsController.getCard);

cardsRouter.delete("/cards/:id", cardsController.deleteCard);

export default cardsRouter;
