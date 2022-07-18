import prisma from "../config/database.js";

import { createCardData } from "../services/cardsService.js";

export async function findCardByTitleAndUserId(id: number, title: string) {
	const card = await prisma.card.findFirst({
		where: {
			title,
			userId: id,
		},
	});

	return card;
}

export async function createCard(id: number, cardData: createCardData) {
	await prisma.card.create({
		data: {
			userId: id,
			title: cardData.title,
			number: cardData.number,
			name: cardData.name,
			code: cardData.code,
			expireIn: cardData.expireIn,
			password: cardData.password,
			virtual: cardData.virtual,
			typeId: cardData.typeId,
		},
	});
}

export async function getCards(id: number) {
	const cards = await prisma.card.findMany({
		where: {
			userId: id,
		},
		select: {
			id: true,
			user: {
				select: {
					id: true,
					email: true,
				},
			},
			title: true,
			number: true,
			name: true,
			password: true,
			code: true,
			expireIn: true,
			virtual: true,
			type: {
				select: {
					type: true,
				},
			},
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
		select: {
			id: true,
			user: {
				select: {
					id: true,
					email: true,
				},
			},
			title: true,
			number: true,
			name: true,
			password: true,
			code: true,
			expireIn: true,
			virtual: true,
			type: {
				select: {
					type: true,
				},
			},
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
