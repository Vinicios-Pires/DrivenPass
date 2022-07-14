import { note } from "@prisma/client";

import * as notesRepository from "./../repositories/notesRepository.js";

export type createNoteData = Omit<note, "id" | "userId">;

export async function createNote(id: number, title: string, note: string) {
	if (!title || !note) throw { type: "Unprocessable Entity" };

	const noteExists = await notesRepository.findNoteByTitleAndUserId(id, title);
	if (noteExists) throw { type: "Conflict" };

	await notesRepository.createNote(id, title, note);
}

export async function getNotesByUserId(id: number) {
	const notes = await notesRepository.getNotesByUserId(id);
	return notes;
}

export async function getNoteByIdAndUserId(userId: number, id: number) {
	const note = await notesRepository.getNoteByIdAndUserId(userId, id);

	if (!note) throw { type: "Not Found" };

	return note;
}

export async function deleteNote(userId: number, id: number) {
	await notesRepository.deleteNote(userId, id);
}
