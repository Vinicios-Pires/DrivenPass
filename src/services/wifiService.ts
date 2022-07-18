import { wifi } from "@prisma/client";

import * as wifiRepository from "./../repositories/wifiRepository.js";

export type createWifiData = Omit<wifi, "id" | "userId">;

export async function createWifi(
	id: number,
	title: string,
	name: string,
	password: string
) {
	if (!title || !name || !password) {
		throw { type: "unprocessable_entity" };
	}

	await wifiRepository.createWifi(id, title, name, password);
}

export async function getAllWifi(id: number) {
	const allWifi = await wifiRepository.getAllWifi(id);

	return allWifi;
}

export async function getWifi(userId: number, id: number) {
	const wifi = await wifiRepository.getWifi(userId, id);

	return wifi;
}

export async function deleteWifi(userId: number, id: number) {
	await wifiRepository.deleteWifi(userId, id);
}
