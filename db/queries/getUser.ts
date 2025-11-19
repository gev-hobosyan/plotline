import { eq } from "drizzle-orm";
import { db } from "..";
import { users } from "../schema";

export async function getUser(id: string) {
	const response = await db.select()
		.from(users)
		.where(eq(users.id, id));

	return response[0]
}