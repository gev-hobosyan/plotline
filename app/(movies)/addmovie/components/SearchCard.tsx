'use client'

import Button from '@/app/components/Button';
import { useEffect, useState } from 'react';
import type { Movie } from '../../movie';
import MovieCard from './SearchMovieCard';
import { redirect } from 'next/navigation';
import { ArrowLeftIcon, ArrowRightIcon } from 'lucide-react';

type ContentType = "movies" | "books"

interface Props {
	contentType: ContentType
}

const Card = ({ contentType }: Props) => {
	const [title, setTitle] = useState("Frieren")
	const [movies, setMovies] = useState<Movie[]>()
	const [error, setError] = useState()
	const [indexToShow, setIndexToShow] = useState([0, 5])

	async function handleClick(title: string) {
		const data = await fetch(`/api/movies/find?title=${title}`)
		const moviesData = (await data.json()) as Movie[]

		setMovies(moviesData)
	}

	useEffect(() => {
		console.log(movies)
	}, [movies])

	return (
		<>
			{
				movies
					? (
						<>
							<div className="flex flex-wrap justify-center gap-8">
								{movies.map((movie, index) => (
									(index < indexToShow[1] && index >= indexToShow[0]) && <MovieCard movie={movie} key={movie.imdb_id} />
								))}
							</div>
							<div className='fixed bottom-6 flex gap-4'>
								{
									indexToShow[0] > 0 &&
									<Button className="bg-m-primary/30 border-m-dark" contentType='movies' onClick={() => (
										setIndexToShow([0, indexToShow[0]])
									)}>
										<ArrowLeftIcon />
									</Button>
								}
								<Button className="bg-m-primary/30 border-m-dark" contentType='movies' onClick={() => (
									redirect("/addcustommovie")
								)}>
									Add your movie
								</Button>
								{
									movies.length > indexToShow[1] &&
									<Button className="bg-m-primary/30 border-m-dark" contentType='movies' onClick={() => (
										setIndexToShow([indexToShow[1], movies.length])
									)}>
										<ArrowRightIcon />
									</Button>
								}
							</div>
						</>
					)
					: <div className="bg-black/30 h-60 w-140 backdrop-blur rounded-2xl flex items-center justify-around flex-col py-5 px-10 border border-black">
						<p className="text-xl">Please enter the {contentType.slice(0, contentType.length - 1)} title</p>

						<input type="text" className="bg-m-primary/30 border-m-dark text-center border backdrop-blur py-3 px-4 rounded-full text-lg" value={title} onChange={(e) => setTitle(e.target.value)} />

						<Button contentType={contentType} className="bg-m-primary/30 border-m-dark" onClick={() => handleClick(title)}>
							Search
						</Button>
					</div>
			}
		</>
	);
};

export default Card;