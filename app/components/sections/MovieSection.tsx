import { Movie } from '@/app/assets/dummyData';
import { ArrowRightIcon } from 'lucide-react';
import React from 'react';
import MovieCard from '../MovieCard';
import Link from 'next/link';
import AddCard from '../AddCard';

interface Props {
	title: string;
	movies: any[];
}

const MovieSection = ({ title, movies }: Props) => {
	return (
		<>
			<div className="py-6 px-10 max-md:px-5 overflow-hidden">
				<div className="relative flex items-center justify-between pt-10 pb-7">
					<p className="text-gray-300 font-medium text-lg">{title}</p>
					<button className="flex items-center gap-2 group justify-center text-sm text-gray-300">
						View All
						<ArrowRightIcon className="w-4 h-4 group-hover:translate-x-0.5 transition" />
					</button>
				</div>

				<div className="flex flex-wrap justify-center md:justify-start gap-8">
					{movies.map(movie => (
						<Link href={`/movie/${movie.imdbId}`} key={movie.imdbId}>
							<MovieCard movie={movie} />
						</Link>
					))}

					{
						movies.length < 6 &&
						<AddCard />
					}
				</div>
			</div>
		</>
	);
};

export default React.memo(MovieSection);