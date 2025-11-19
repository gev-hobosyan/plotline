import { eq } from "drizzle-orm"
import { db } from ".."
import { categories } from "../schema"

export async function getCategories(userId: string) {
	try {
		const response = await db.select()
			.from(categories)
			.where(eq(categories.userId, userId))

		return response
	} catch (e) {
		console.log("[ERROR] Error accured while fetching data: ", e)
		return
	}
}	