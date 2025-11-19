import { and, eq } from "drizzle-orm";
import { db } from "..";
import { movies } from "../schema";

interface Movie {
	userId: string;
	imdb_id: string;
	categories: string[];
}

export async function insertMovie({ userId, imdb_id, categories }: Movie) {
	try {
		const response = await db.select()
			.from(movies)
			.where(and(eq(movies.userId, userId), eq(movies.imdbId, imdb_id)))

		if (response.length !== 0) return;

		await db.insert(movies).values({ userId, imdbId: imdb_id, categories })
	} catch (e) {
		console.log("[ERROR] Error accured while fetching data: ", e)
		return
	}
}