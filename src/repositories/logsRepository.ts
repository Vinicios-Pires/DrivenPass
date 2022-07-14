import prisma from "../config/database.js";

export async function findCredentialByTitle(title: string) {
	const credential = await prisma.credential.findUnique({
		where: {
			title,
		},
	});

	return credential;
}

export async function createCredential(
	id: number,
	title: string,
	url: string,
	username: string,
	password: string
) {
	await prisma.credential.create({
		data: {
			userId: id,
			title,
			url,
			username,
			password,
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
