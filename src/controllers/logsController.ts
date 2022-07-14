import { Request, Response } from "express";

import * as logsService from "./../services/logsService.js";

import { createCredentialData } from "../services/logsService.js";

export async function createCredential(req: Request, res: Response) {
	const { id }: { id: number } = res.locals.user;
	const { title, url, username, password }: createCredentialData = req.body;

	await logsService.createCredential(id, title, url, username, password);

	res.sendStatus(201);
}

export async function getAllCredentials(req: Request, res: Response) {
	const { id }: { id: number } = res.locals.user;

	const credentials = await logsService.getAllCredentials(id);

	res.send(credentials);
}
