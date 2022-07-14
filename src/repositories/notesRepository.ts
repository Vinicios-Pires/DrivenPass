import prisma from "../config/database.js";

export async function findNoteByTitleAndUserId(id: number, title: string) {
	const note = await prisma.note.findFirst({
		where: {
			userId: id,
			title,
		},
	});
	return note;
}

export async function createNote(id: number, title: string, note: string) {
	await prisma.note.create({
		data: {
			userId: id,
			title,
			note,
		},
	});
}

export async function getNotesByUserId(id: number) {
	const notes = await prisma.note.findMany({
		where: {
			userId: id,
		},
	});

	return notes;
}

export async function getNoteByIdAndUserId(userId: number, id: number) {
	const note = await prisma.note.findFirst({
		where: {
			id,
			userId,
		},
	});

	return note;
}

export async function deleteNote(userId: number, id: number) {
	await prisma.note.deleteMany({
		where: {
			userId,
			id,
		},
	});
}
