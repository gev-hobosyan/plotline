import { NextRequest } from "next/server";
import type { Movie } from "@/app/(movies)/movie";

export async function GET(request: NextRequest) {
	const params = request.nextUrl.searchParams;
	const title = params.get("title");

	if (!title) {
		return new Response("Title is requiered", {
			status: 400,
			headers: { "Content-Type": "text/plain" }
		})
	}

	const response = await fetch(`https://imdb.iamidiotareyoutoo.com/search?q=${title}`);

	if (response.status !== 200) {
		return new Response("Error while fetching data", {
			status: 500,
			headers: { "Content-Type": "text/plain" }
		})
	}

	const data = (await response.json()).description

	if (!data) {
		return new Response("Movie not found", {
			status: 400,
			headers: { "Content-Type": "text/plain" }
		})
	}

	const movies: Movie = data.map((movie: any) => {
		return {
			title: movie["#TITLE"],
			year: movie["#YEAR"],
			imdb_id: movie["#IMDB_ID"],
			actors: movie["#ACTORS"],
			aka: movie["#AKA"],
			image: movie["#IMG_POSTER"],
		}
	})

	return new Response(JSON.stringify(movies), {
		status: 200,
		headers: { 'Content-Type': "text/plain" }
	})
}