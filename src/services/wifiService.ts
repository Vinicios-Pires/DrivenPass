import { wifi } from "@prisma/client";

import Cryptr from "cryptr";

import * as wifiRepository from "./../repositories/wifiRepository.js";

export type createWifiData = Omit<wifi, "id" | "userId">;

const cryptr = new Cryptr(process.env.SECRET_KEY);

export async function createWifi(
	id: number,
	title: string,
	name: string,
	password: string
) {
	if (!title || !name || !password) {
		throw { type: "unprocessable_entity" };
	}

	const encryptedPassword = cryptr.encrypt(password);

	await wifiRepository.createWifi(id, title, name, encryptedPassword);
}

export async function getAllWifi(id: number) {
	const allWifi = await wifiRepository.getAllWifi(id);

	if (allWifi.length === 0) throw { type: "not_found" };

	allWifi.forEach((wifi) => {
		const decryptedPassword = cryptr.decrypt(wifi.password);
		wifi.password = decryptedPassword;
	});

	return allWifi;
}

export async function getWifi(userId: number, id: number) {
	const wifi = await wifiRepository.getWifi(userId, id);

	if (!wifi) throw { type: "not_found" };

	const decryptedPassword = cryptr.decrypt(wifi.password);
	wifi.password = decryptedPassword;

	return wifi;
}

export async function deleteWifi(userId: number, id: number) {
	await wifiRepository.deleteWifi(userId, id);
}
