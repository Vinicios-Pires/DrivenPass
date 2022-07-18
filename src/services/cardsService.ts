import * as cardsRepository from "./../repositories/cardsRepository.js";

import { card } from "@prisma/client";

export type createCardData = Omit<card, "id" | "userId">;

export async function createCard(id: number, cardData: createCardData) {
	if (!cardData) {
		throw { type: "unprocessable_entity" };
	}

	const cardExists = await cardsRepository.findCardByTitleAndUserId(
		id,
		cardData.title
	);
	if (cardExists) throw { type: "conflict" };

	await cardsRepository.createCard(id, cardData);
}

export async function getCards(id: number) {
	const cards = await cardsRepository.getCards(id);

	if (cards.length === 0) throw { type: "not_found" };

	return cards;
}

export async function getCard(userId: number, id: number) {
	const card = await cardsRepository.getCardByIdAndUserId(userId, id);

	if (!card) throw { type: "not_found" };

	return card;
}

export async function deleteCard(userId: number, id: number) {
	await cardsRepository.deleteCardById(userId, id);
}
