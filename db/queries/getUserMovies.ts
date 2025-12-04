import { and, eq, sql } from "drizzle-orm"
import { db } from ".."
import { categories as dbCategories } from "../schema"

export async function getUserMovies(userId: string, list: string, category: string) {
	const response = await db.select()
		.from(dbCategories)
		.where(and(eq(dbCategories.userId, userId), eq(dbCategories.listName, list), eq(dbCategories.categoryName, category)))

	return
}