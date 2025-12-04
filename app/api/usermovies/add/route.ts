import { insertMovie } from "@/db/queries/insertMovie";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
	try {
		const body = await request.json()
		const { getUser } = await getKindeServerSession();
		const user = await getUser()
		const userId = user?.id

		if (!userId) {
			return new Response(`User id not found`, {
				status: 400,
				headers: {
					"Content-Type": "text/plain"
				}
			})
		}

		await insertMovie({ userId: userId!, imdb_id: body.movie, categories: ["fantasy"], list: "mymovies" })

		return new Response("Tests", {
			status: 201,
			headers: {
				"Content-Type": "text/plain"
			}
		})
	} catch (e) {
		return new Response(`${e}`, {
			status: 500,
			headers: {
				"Content-Type": "text/plain"
			}
		})
	}
}