import { Router } from "express";

import { ensureAuthMiddleware } from "../middlewares/ensureAuthMiddleware.js";
import { validateSchemaMiddleware } from "../middlewares/validateSchema.js";
import { noteSchema } from "../schemas/noteSchema.js";

import * as notesController from "./../controllers/notesController.js";

const notesRouter = Router();

notesRouter.use(ensureAuthMiddleware);

notesRouter.post(
	"/notes",
	validateSchemaMiddleware(noteSchema),
	notesController.createNote
);

notesRouter.get("/notes", notesController.getNotesByUserId);

notesRouter.get("/notes/:id", notesController.getNoteByIdAndUserId);

notesRouter.delete("/notes/:id", notesController.deleteNote);

export default notesRouter;
