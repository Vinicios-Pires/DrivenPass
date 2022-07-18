import { Request, Response } from "express";

import * as cardsService from "./../services/cardsService.js";

import { createCardData } from "./../services/cardsService.js";

export async function createCard(req: Request, res: Response) {
	const { id }: { id: number } = res.locals.user;
	const {
		title,
		number,
		name,
		code,
		expireIn,
		password,
		virtual,
		typeId,
	}: createCardData = req.body;

	await cardsService.createCard(
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

	res.sendStatus(201);
}

export async function getCards(req: Request, res: Response) {
	const { id }: { id: number } = res.locals.user;

	const cards = await cardsService.getCards(id);

	res.status(200).send(cards);
}

export async function getCard(req: Request, res: Response) {
	const { id: userId }: { id: number } = res.locals.user;
	const { id } = req.params;

	const card = await cardsService.getCard(userId, Number(id));

	res.status(200).send(card);
}

export async function deleteCard(req: Request, res: Response) {
	const { id: userId }: { id: number } = res.locals.user;
	const { id } = req.params;

	await cardsService.deleteCard(userId, Number(id));

	res.sendStatus(200);
}
