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

	const movieData = data["short"]

	const movie: Movie = {
		id: 0,
		title: movieData["name"],
		description: movieData["description"],
		imageUrl: movieData["image"],
		releaseDate: movieData["datePublished"],
		imdbId: imdb_id,
		generes: movieData["genre"].map((genre: string) => {
			return {
				id: 0,
				genre
			}
		}),
		keyWords: movieData["keywords"] ? movieData["keywords"].split(",") : [""],
		trailerUrl: movieData["trailer"] ? movieData["trailer"]["url"] : "",
		runtime: data["top"]["runtime"] ? data["top"]["runtime"]["seconds"] : 0,
		type: ShowTypes.Movie,
		rating: data["top"]["ratingsSummary"]["aggregateRating"]
	}

	return new Response(JSON.stringify(movie), {
		status: 200,
		headers: { "Content-Type": "application/json" }
	})
}