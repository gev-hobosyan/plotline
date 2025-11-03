import { Movie, ShowTypes } from "@/app/assets/dummyData";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
	const params = request.nextUrl.searchParams;
	const imdb_id = params.get("imdb_id");

	if (!imdb_id) {
		return new Response("Imdb ID is required", {
			status: 400,
			headers: { "Content-Type": "text/plain" }
		})
	}

	const response = await fetch(`https://imdb.iamidiotareyoutoo.com/search?tt=${imdb_id}`);

	if (response.status !== 200) {
		return new Response("Error while fetching data", {
			status: 500,
			headers: { "Content-Type": "text/plain" }
		})
	}

	const data = (await response.json())

	const movie: Movie = {
		id: 0,
		title: "",
		description: "",
		imageUrl: "",
		releaseDate: "",
		imdbId: "",
		generes: [],
		keyWords: [],
		trailerUrl: "",
		runtime: 0,
		type: ShowTypes.Movie,
		rating: null
	}

	return new Response(imdb_id, {
		status: 200,
		headers: { "Content-Type": "text/plain" }
	})
}