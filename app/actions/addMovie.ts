"use server"

import { insertMovie } from "@/db/queries/insertMovie";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export async function addMovie(lists: string[], categories: string[], imdb_id: string) {
	const { getUser } = await getKindeServerSession()
	const user = await getUser()

	for (let list of lists) {
		const res = await insertMovie({ userId: user!.id, imdb_id, categories: categories, list: list })
	}
}