import { eq } from "drizzle-orm"
import { db } from ".."
import { categories as dbCategories } from "../schema"

export async function getCategories(userId: string) {
	const categories = db.select({ category: dbCategories.categoryName })
		.from(dbCategories)
		.where(eq(dbCategories.userId, userId))
		.then(res => res.map(item => item.category))
		.catch(e => {
			console.log("[ERROR] Error accured while fetching data: ", e)
			return
		})

	return categories
}