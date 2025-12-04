import { and, eq, sql } from "drizzle-orm";
import { db } from "..";
import { categories as dbCategories } from "../schema";

interface Movie {
	userId: string;
	imdb_id: string;
	list: string;
	categories: string[];
}

export async function insertMovie({ userId, imdb_id, categories, list }: Movie) {
	try {
		console.log(userId, imdb_id, categories, list)

		for (let category of categories) {
			const res = await db.select()
				.from(dbCategories)
				.where(and(eq(dbCategories.userId, userId), eq(dbCategories.listName, list), eq(dbCategories.categoryName, category)))

			console.log(category)

			if (res.length === 1) {
				const movie = await db.select()
					.from(dbCategories)
					.where(and(eq(dbCategories.userId, userId), eq(dbCategories.listName, list), eq(dbCategories.categoryName, category), sql`${dbCategories.movies} @> ${sql`ARRAY[${imdb_id}]::text[]`}`))

				if (movie.length === 0) {
					const data = res[0]
					const movies = [...(data.movies)!, imdb_id]

					await db.update(dbCategories)
						.set({ movies: movies })
						.where(and(eq(dbCategories.userId, userId), eq(dbCategories.categoryName, category), eq(dbCategories.listName, list)))

					console.log(list)
				}
			} else {
				const res = await db.insert(dbCategories)
					.values({ userId: userId, categoryName: category, listName: list, movies: [imdb_id] })

				console.log("Success")
			}
		}

	} catch (e) {
		console.log("[ERROR] Error accured while fetching data: ", e)
		return
	}
}