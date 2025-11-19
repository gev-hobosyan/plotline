import type { Movie } from "@/app/assets/dummyData"
import Button from "@/app/components/Button";
import { StarIcon } from "lucide-react";
import { Metadata } from "next";
import { cookies } from "next/headers";
import Image from "next/image";
import Link from "next/link";

const basePath = process.env.BASE_PATH!

export async function generateMetadata({
	params
}: {
	params: Promise<{ movieId: string }>
}): Promise<Metadata> {
	const { movieId } = await params;

	const response = await fetch(`${basePath}/api/movies?imdb_id=${movieId}`, {
		headers: {
			Cookie: (await cookies()).toString(),
		},
	});

	const movie = await response.json() as Movie

	return {
		title: `${movie.title} | PlotLine`
	}
}

const MoviePage = async ({
	params
}: {
	params: Promise<{ movieId: string }>
}) => {
	const { movieId } = await params;

	const response = await fetch(`${basePath}/api/movies?imdb_id=${movieId}`, {
		headers: {
			Cookie: (await cookies()).toString(),
		},
	})

	const movie = await response.json() as Movie

	return (
		<>
			<div className="h-[500px] w-screen flex items-center bg-black/30">
				<div className="h-[500px] w-screen bg-center absolute inset-0 -z-50 blur-[2px]">
				</div>

				<Image
					src={movie.imageUrl}
					alt={movie.title}
					width={500}
					height={500}
					className="h-[500px] w-screen absolute inset-0 -z-50 blur-[2px] object-cover" />

				<Image
					src={movie.imageUrl}
					alt={movie.title}
					width={400}
					height={500}
					className="w-50 place-self-end ml-20 shadow-black shadow-2xl mb-5" />

				<div className="w-140 ml-10 flex flex-col justify-center place-self-end h-[295px] mb-5">
					<div className="flex items-center justify-start text-center gap-3 text-gray-300 text-nowrap">
						<div className="flex gap-1">
							<p>{movie.rating}</p>
							<StarIcon className="w-3.5 stroke-yellow-400 fill-yellow-400" />
						</div>
						<p>|</p>
						<p>{movie.generes.map((genre, index) => (index !== movie.generes.length - 1 ? genre.genre + " • " : genre.genre))}</p>
					</div>
					<h1 className="text-3xl font-bold mb-2">{movie.title.replace("&apos;", "'")}</h1>
					<div className="flex items-center justify-start text-center gap-3 text-gray-300 text-nowrap">
						<p>{movie.releaseDate}</p>
						<p>|</p>
						<p>{
							`${Math.floor(movie.runtime / 3600)}h ${Math.floor(Math.floor(movie.runtime / 60) % 60)}m`
						}</p>
					</div>
					<h2 className="text-wrap text-lg font-medium mt-5">{movie.description.replace("&apos;", "'")}</h2>

					<div className="flex items-center gap-5 mt-4">
						<Button className="w-20 bg-m-primary/30 border-m-dark backdrop-blur-xs">Add +</Button>
						<Button className="w-30 bg-white/20 text-nowrap backdrop-blur-xs"><Link href={movie.trailerUrl}>Watch Trailer</Link></Button>
					</div>
				</div>
			</div>

			<div>
				Actors
			</div>
		</>
	);
};

//style={{ boxShadow: "inset 0 2px 3px rgba(255, 255, 255, 255, 0.25)" }}

export default MoviePage;