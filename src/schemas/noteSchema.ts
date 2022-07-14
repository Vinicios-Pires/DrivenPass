import Joi from "joi";
import { createNoteData } from "../services/notesService.js";

export const noteSchema = Joi.object<createNoteData>({
	title: Joi.string().max(50).required(),
	note: Joi.string().max(1000).required(),
});
