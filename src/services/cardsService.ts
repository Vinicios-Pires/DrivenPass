import * as cardsRepository from "./../repositories/cardsRepository.js";

import { card } from "@prisma/client";

export type createCardData = Omit<card, "id" | "userId">;

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
	if (
		!title ||
		!number ||
		!name ||
		!code ||
		!expireIn ||
		!password ||
		!virtual ||
		!typeId
	) {
		throw { type: "unprocessable_entity" };
	}

	const cardExists = await cardsRepository.findCardByTitleAndUserId(id, title);
	if (cardExists) throw { type: "conflict" };

	await cardsRepository.createCard(
		id,
		title,
		number,
		name,
		code,
		expireIn,
		password,
		virtual,
		typeId
	);
}

export async function getCards(id: number) {
	const cards = await cardsRepository.getCards(id);
	return cards;
}

export async function getCard(userId: number, id: number) {
	const card = await cardsRepository.getCardByIdAndUserId(userId, id);

	return card;
}

export async function deleteCard(userId: number, id: number) {
	await cardsRepository.deleteCardById(userId, id);
}
