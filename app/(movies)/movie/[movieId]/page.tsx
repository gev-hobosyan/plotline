"use client"

import { Movie } from "@/app/assets/dummyData";
import { useParams } from "next/navigation";
import { useLayoutEffect, useState } from "react";

const MoviePage = () => {
	const params = useParams<{ movieId: string }>()
	const [movie, setMovie] = useState<Movie>()

	useLayoutEffect(() => {
		const res =
			fetch(`/api/movies?imdb_id=${params.movieId}`)
				.then((data) => data.json())
				.then((data) => {
					const _movie: Movie = {
						id: data.id,
						title: data.title,
						description: data.description,
						imageUrl: data.imageUrl,
						releaseDate: data.releaseDate,
						imdbId: data.imdbId,
						generes: data.generes,
						keyWords: data.keyWords,
						trailerUrl: data.trailerUrl,
						runtime: data.runtime,
						type: data.type,
						rating: data.rating
					}

					setMovie(_movie)
				})
	}, [params])

	return (
		<>
		</>
	);
};

export default MoviePage;