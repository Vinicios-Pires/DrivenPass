import { credential } from "@prisma/client";
import Cryptr from "cryptr";

import * as credentialsRepository from "./../repositories/credentialsRepository.js";

export type createCredentialData = Omit<credential, "id" | "userId">;

const cryptr = new Cryptr(process.env.SECRET_KEY);

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

	const encryptedPassword = cryptr.encrypt(password);

	await credentialsRepository.createCredential(
		id,
		title,
		url,
		username,
		encryptedPassword
	);
}

export async function getAllCredentials(id: number) {
	const credentials = await credentialsRepository.getAllCredentialsByUserId(id);

	if (credentials.length === 0) throw { type: "not_found" };

	credentials.forEach((credential) => {
		const decryptedPassword = cryptr.decrypt(credential.password);
		credential.password = decryptedPassword;
	});

	return credentials;
}

export async function getCredential(userId: number, id: number) {
	const credential = await credentialsRepository.getCredentialByIdAndUserId(
		userId,
		id
	);

	if (!credential) throw { type: "not_found" };

	const decryptedPassword = cryptr.decrypt(credential.password);
	credential.password = decryptedPassword;

	return credential;
}

export async function deleteCredential(userId: number, id: number) {
	await credentialsRepository.deleteCredentialById(userId, id);
}
