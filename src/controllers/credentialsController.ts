import { Request, Response } from "express";

import * as credentialsService from "./../services/credentialsService.js";

import { createCredentialData } from "../services/credentialsService.js";

export async function createCredential(req: Request, res: Response) {
	const { id }: { id: number } = res.locals.user;
	const { title, url, username, password }: createCredentialData = req.body;

	await credentialsService.createCredential(id, title, url, username, password);

	res.sendStatus(201);
}

export async function getAllCredentials(req: Request, res: Response) {
	const { id }: { id: number } = res.locals.user;

	const credentials = await credentialsService.getAllCredentials(id);

	res.send(credentials);
}

export async function getCredential(req: Request, res: Response) {
	const { id: userId }: { id: number } = res.locals.user;
	const { id } = req.params;

	const credential = await credentialsService.getCredential(userId, Number(id));

	res.send(credential);
}

export async function deleteCredential(req: Request, res: Response) {
	const { id: userId }: { id: number } = res.locals.user;
	const { id } = req.params;

	await credentialsService.deleteCredential(userId, Number(id));

	res.sendStatus(200);
}
