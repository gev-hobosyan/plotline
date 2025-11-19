import { db } from "..";
import { users } from "../schema";

interface User {
	id: string;
	userName: string;
	email: string;
}

export async function insertUser({ id, userName, email }: User) {
	await db.insert(users).values({
		id,
		username: userName,
		email
	})
}