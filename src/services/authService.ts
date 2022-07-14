import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import * as userRepository from "./../repositories/userRepository.js";

import { user } from "@prisma/client";

export type userData = Omit<user, "id">;

export async function signUp(email: string, password: string) {
	if (!email || !password) throw { type: "Unprocessable Entity" };

	const userExists = await userRepository.findUserByEmail(email);
	if (userExists) throw { type: "conflict" };

	const hash = 12;

	const hashedPassword = bcrypt.hashSync(password, hash);

	await userRepository.createUser(email, hashedPassword);
}

export async function signIn(email: string, password: string) {
	if (!email || !password) throw { type: "Unprocessable Entity" };

	const user = await userRepository.findUserByEmail(email);

	if (!user || !bcrypt.compareSync(password, user.password))
		throw { type: "Unauthorized" };

	const token = jwt.sign(
		{
			id: user.id,
		},
		process.env.JWT_SECRET
	);

	return token;
}

export async function verifytoken(token: any) {
	return jwt.verify(token, process.env.JWT_SECRET);
}
