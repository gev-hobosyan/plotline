import { eq } from "drizzle-orm";
import { db } from "..";
import { movies } from "../schema";

export async function getMoviesList(userId: string) {
	try {
		const response = await db.select()
			.from(movies)
			.where(eq(movies.userId, userId))

		return response
	} catch (e) {
		console.log("[ERROR] Error accured while fetching data: ", e)
		return
	}
}