import prisma from "../config/database.js";

export async function findCardByTitleAndUserId(id: number, title: string) {
	const card = await prisma.card.findFirst({
		where: {
			title,
			userId: id,
		},
	});

	return card;
}

export async function createCard(
	id: number,
	title: string,
	number: number,
	name: string,
	code: number,
	expireIn: Date,
	password: number,
	virtual: boolean,
	typeId: number
) {
	await prisma.card.create({
		data: {
			userId: id,
			title,
			number,
			name,
			code,
			expireIn,
			password,
			virtual,
			typeId,
		},
	});
}

export async function getCards(id: number) {
	const cards = await prisma.card.findMany({
		where: {
			userId: id,
		},
	});

	return cards;
}

export async function getCardByIdAndUserId(userId: number, id: number) {
	const card = await prisma.card.findFirst({
		where: {
			id,
			userId,
		},
	});

	return card;
}

export async function deleteCardById(userId: number, id: number) {
	await prisma.card.deleteMany({
		where: {
			id,
			userId,
		},
	});
}
