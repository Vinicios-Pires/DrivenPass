import { credential } from "@prisma/client";

import * as credentialsRepository from "./../repositories/credentialsRepository.js";

export type createCredentialData = Omit<credential, "id" | "userId">;

export async function createCredential(
	id: number,
	title: string,
	url: string,
	username: string,
	password: string
) {
	if (!title || !url || !username || !password) {
		throw { type: "unprocessable_entity" };
	}

	const credentialExists =
		await credentialsRepository.findCredentialByTitleAndUserId(id, title);
	if (credentialExists) throw { type: "conflict" };

	await credentialsRepository.createCredential(
		id,
		title,
		url,
		username,
		password
	);
}

export async function getAllCredentials(id: number) {
	const credentials = await credentialsRepository.getAllCredentialsByUserId(id);
	return credentials;
}

export async function getCredential(userId: number, id: number) {
	const credential = await credentialsRepository.getCredentialByIdAndUserId(
		userId,
		id
	);

	if (!credential) throw { type: "not_found" };

	return credential;
}

export async function deleteCredential(userId: number, id: number) {
	await credentialsRepository.deleteCredentialById(userId, id);
}
