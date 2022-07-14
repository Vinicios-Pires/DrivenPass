import prisma from "../config/database.js";

export async function createUser(email: string, hashedPassword: string) {
	await prisma.user.create({
		data: {
			email,
			password: hashedPassword,
		},
	});
}

export async function findUserByEmail(email: string) {
	const user = prisma.user.findUnique({
		where: {
			email,
		},
	});

	return user;
}
