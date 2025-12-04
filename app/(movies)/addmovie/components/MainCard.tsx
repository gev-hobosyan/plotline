'use client'

import Button from '@/app/components/Button';
import React, { useCallback, useEffect, useState } from 'react';
import type { Movie as DetailedMovie } from '@/app/assets/dummyData';
import type { Movie } from '../../movie';
import MovieCard from './SearchMovieCard';
import { ArrowLeftIcon, ArrowRightIcon } from 'lucide-react';
import Link from 'next/link';
import LoadingSpinner from '@/app/components/sections/LoadingSpinner';
import SearchCard from './SearchCard';
import MovieDetailsCard from './MovieDetailsCard';
import { dummyMoviesData } from '@/app/assets/dummyData';

type ContentType = "movies" | "books"

interface Props {
	contentType: ContentType;
	to: string | undefined;
	category: string | undefined;
}

const Card = React.memo(({ contentType, to, category }: Props) => {
	const [title, setTitle] = useState("Frieren")
	const [movies, setMovies] = useState<Movie[]>()
	const [error, setError] = useState()
	const [indexToShow, setIndexToShow] = useState([0, 5])
	const [isLoading, setIsLoading] = useState<boolean>(false)
	const [selectedMovie, setSelectedMovie] = useState<DetailedMovie | undefined>(dummyMoviesData[3])
	const [loadingSelected, setLoadingSelected] = useState<boolean>()

	const handleClick = useCallback(async (title: string) => {
		setIsLoading(true)
		fetch(`/api/movies/find?title=${title}`)
			.then(data => data.json())
			.then(data => {
				setMovies(data as Movie[])
				setIsLoading(false)
			})
			.catch(error => setError(error))
	}, [])

	const handleSelectMovie = useCallback(async (id: string) => {
		setLoadingSelected(true)
		fetch(`/api/movies?imdb_id=${id}`)
			.then(data => data.json())
			.then(data => {
				setSelectedMovie(data)
				setLoadingSelected(false)
				console.log(selectedMovie)
			})
			.catch(error => setError(error))
	}, [])

	return (
		<>
			{
				loadingSelected && (<div className='z-50 bg-black/30 backdrop-blur-xs w-screen h-screen absolute flex items-center justify-center'>
					<LoadingSpinner contentType={'movies'} />
				</div>)
			}

			{
				(selectedMovie && !error) &&
				(
					<div className='z-50 bg-black/30 backdrop-blur-xs w-full h-full absolute flex items-center justify-center'>
						<div className='w-full h-full absolute bg-transparent' onClick={() => setSelectedMovie(undefined)}></div>
						<MovieDetailsCard searchCategory={category} movie={selectedMovie} close={() => setSelectedMovie(undefined)} to={to} />
					</div>
				)
			}

			{
				error ? <h1>Error</h1>
					: isLoading
						? <LoadingSpinner contentType='movies' />
						: movies
							? (
								<>
									<div className="flex flex-wrap justify-center gap-8">
										{movies.map((movie, index) => (
											(index < indexToShow[1] && index >= indexToShow[0] && (movie.image !== undefined)) && <MovieCard movie={movie} key={movie.imdb_id} onClick={handleSelectMovie} />
										))}
									</div>
									<div className='fixed bottom-6 flex gap-4'>
										{
											indexToShow[0] > 0 &&
											<Button className="bg-m-primary/30 border-m-dark" onClick={() => (
												setIndexToShow([0, indexToShow[0]])
											)}>
												<ArrowLeftIcon />
											</Button>
										}
										<Button className="bg-m-primary/30 border-m-dark">
											<Link href={`/addcustommovie?to=mymovies`}>Add your movie</Link>
										</Button>
										{
											movies.length > indexToShow[1] &&
											<Button className="bg-m-primary/30 border-m-dark" onClick={() => (
												setIndexToShow([indexToShow[1], movies.length])
											)}>
												<ArrowRightIcon />
											</Button>
										}
									</div>
								</>
							)
							: <SearchCard contentType={contentType} title={title} setTitle={setTitle} handleClick={handleClick} />
			}
		</>
	);
});

export default Card;