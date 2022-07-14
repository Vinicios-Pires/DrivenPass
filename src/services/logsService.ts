import { credential } from "@prisma/client";

import * as logsRepository from "./../repositories/logsRepository.js";

export type createCredentialData = Omit<credential, "id" | "userId">;

export async function createCredential(
	id: number,
	title: string,
	url: string,
	username: string,
	password: string
) {
	if (!title || !url || !username || !password) {
		throw { type: "Unprocessable Entity" };
	}

	const credentialExists = await logsRepository.findCredentialByTitleAndUserId(
		id,
		title
	);
	if (credentialExists) throw { type: "Conflict" };

	await logsRepository.createCredential(id, title, url, username, password);
}

export async function getAllCredentials(id: number) {
	const credentials = await logsRepository.getAllCredentialsByUserId(id);
	return credentials;
}

export async function getCredential(userId: number, id: number) {
	const credential = await logsRepository.getCredentialByIdAndUserId(
		userId,
		id
	);

	return credential;
}

export async function deleteCredential(userId: number, id: number) {
	await logsRepository.deleteCredentialById(userId, id);
}
