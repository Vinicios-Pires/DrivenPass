import prisma from "../config/database.js";

export async function createWifi(
	id: number,
	title: string,
	name: string,
	encryptedPassword: string
) {
	await prisma.wifi.create({
		data: {
			userId: id,
			title,
			name,
			password: encryptedPassword,
		},
	});
}

export async function getAllWifi(id: number) {
	const allWifi = await prisma.wifi.findMany({
		where: {
			userId: id,
		},
	});

	return allWifi;
}

export async function getWifi(userId: number, id: number) {
	const wifi = await prisma.wifi.findFirst({
		where: {
			id,
			userId,
		},
	});

	return wifi;
}

export async function deleteWifi(userId: number, id: number) {
	await prisma.wifi.deleteMany({
		where: {
			id,
			userId,
		},
	});
}
