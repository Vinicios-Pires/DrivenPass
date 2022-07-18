import prisma from "../config/database.js";

export async function findCredentialByTitleAndUserId(
	id: number,
	title: string
) {
	const credential = await prisma.credential.findFirst({
		where: {
			title,
			userId: id,
		},
	});

	return credential;
}

export async function createCredential(
	id: number,
	title: string,
	url: string,
	username: string,
	encryptedPassword: string
) {
	await prisma.credential.create({
		data: {
			userId: id,
			title,
			url,
			username,
			password: encryptedPassword,
		},
	});
}

export async function getAllCredentialsByUserId(id: number) {
	const credentials = await prisma.credential.findMany({
		where: {
			userId: id,
		},
	});

	return credentials;
}

export async function getCredentialByIdAndUserId(userId: number, id: number) {
	const credential = await prisma.credential.findFirst({
		where: {
			id,
			userId,
		},
	});

	return credential;
}

export async function deleteCredentialById(userId: number, id: number) {
	await prisma.credential.deleteMany({
		where: {
			id,
			userId,
		},
	});
}
