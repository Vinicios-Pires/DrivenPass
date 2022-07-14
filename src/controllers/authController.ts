import { Request, Response } from "express";

import * as authService from "./../services/authService.js";

import { userData } from "./../services/authService.js";

export async function signUp(req: Request, res: Response) {
	const { email, password }: userData = req.body;

	await authService.signUp(email, password);

	res.sendStatus(201);
}

export async function signIn(req: Request, res: Response) {
	const { email, password }: userData = req.body;

	const token = await authService.signIn(email, password);

	res.status(200).send(token);
}
