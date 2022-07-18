import prisma from "../config/database.js";

export async function countCredentials(id: number) {
	const countCredentials = await prisma.credential.count({
		where: {
			userId: id,
		},
	});

	return countCredentials;
}

export async function countNotes(id: number) {
	const countNotes = await prisma.note.count({
		where: {
			userId: id,
		},
	});

	return countNotes;
}

export async function countCards(id: number) {
	const countCards = await prisma.card.count({
		where: {
			userId: id,
		},
	});

	return countCards;
}

export async function countWifi(id: number) {
	const countWifi = await prisma.wifi.count({
		where: {
			userId: id,
		},
	});

	return countWifi;
}
