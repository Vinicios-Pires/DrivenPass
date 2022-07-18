import { Request, Response } from "express";

import * as wifiService from "./../services/wifiService.js";

import { createWifiData } from "./../services/wifiService.js";

export async function createWifi(req: Request, res: Response) {
	const { id }: { id: number } = res.locals.user;
	const { title, name, password }: createWifiData = req.body;

	await wifiService.createWifi(id, title, name, password);

	res.sendStatus(201);
}

export async function getAllWifi(req: Request, res: Response) {
	const { id }: { id: number } = res.locals.user;

	const allWifi = await wifiService.getAllWifi(id);

	res.status(200).send(allWifi);
}

export async function getWifi(req: Request, res: Response) {
	const { id: userId }: { id: number } = res.locals.user;
	const { id } = req.params;

	const wifi = await wifiService.getWifi(userId, Number(id));

	res.status(200).send(wifi);
}

export async function deleteWifi(req: Request, res: Response) {
	const { id: userId }: { id: number } = res.locals.user;
	const { id } = req.params;

	await wifiService.deleteWifi(userId, Number(id));

	res.sendStatus(200);
}
