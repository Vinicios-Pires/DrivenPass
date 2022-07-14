import { Request, Response } from "express";

import * as notesService from "./../services/notesService.js";

import { createNoteData } from "./../services/notesService.js";

export async function createNote(req: Request, res: Response) {
	const { id }: { id: number } = res.locals.user;
	const { title, note }: createNoteData = req.body;

	await notesService.createNote(id, title, note);

	res.sendStatus(201);
}

export async function getNotesByUserId(req: Request, res: Response) {
	const { id }: { id: number } = res.locals.user;
	const notes = await notesService.getNotesByUserId(id);

	res.send(notes);
}

export async function getNoteByIdAndUserId(req: Request, res: Response) {
	const { id: userId }: { id: number } = res.locals.user;
	const { id } = req.params;

	const note = await notesService.getNoteByIdAndUserId(userId, Number(id));

	res.send(note);
}

export async function deleteNote(req: Request, res: Response) {
	const { id: userId }: { id: number } = res.locals.user;
	const { id } = req.params;

	await notesService.deleteNote(userId, Number(id));

	res.sendStatus(200);
}
