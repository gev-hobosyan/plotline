import { getUserMovies } from "@/db/queries/getUserMovies";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
	try {
		const { getUser } = await getKindeServerSession();
		const user = await getUser();
		const userId = user?.id;
		const params = req.nextUrl.searchParams;

		if (!userId) {
			return new Response("UserId not found", {
				status: 500,
				headers: {
					'Content-Type': "text/plain"
				}
			})
		}

		// console.log(JSON.parse(params.get('lists')!))
		console.log(params.get("lists"))

		const movies = await getUserMovies(userId!, "mymovies", "fantasy")

		return new NextResponse('Success', {
			status: 200,
			headers: {
				'Content-Type': "text/plain"
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