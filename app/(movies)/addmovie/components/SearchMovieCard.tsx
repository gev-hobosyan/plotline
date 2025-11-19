import { PlusIcon, Star } from 'lucide-react';
import { Movie } from '../../movie';
import { redirect } from 'next/navigation';

interface Props {
	movie: Movie,
	onClick: (id: string) => void
}

const SearchMovieCard = ({ movie, onClick }: Props) => {
	return (
		<>
			<div className="flex flex-col justify-between hover:-translate-y-1 transition duration-100 w-50 relative h-[300px] cursor-pointer overflow-hidden rounded-2xl group" onClick={() => onClick(movie.imdb_id)}>
				<div className="absolute inset-0 bg-cover transition-transform duration-500 ease-out bg-center rounded-2xl" style={{ backgroundImage: `url(${movie.image})` }}></div>

				<div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80"></div>

				<button className="absolute top-2 right-2 w-6 h-4 bg-gray-800/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-gray-700/80 transition-colors z-10 cursor-pointer">
					<PlusIcon className="w-3 h-3 text-white cursor-pointer" />
				</button>

				<div className="absolute inset-0 flex flex-col justify-end px-4 pb-3">

					<div className="flex items-center mb-3 transition-all duration-300 ease-out absolute flex-col place-self-center w-full group-hover:opacity-0">
						<div className="flex gap-0.5 items-center mb-2 self-center">
							<div className="place-self-start px-2 py-1 bg-gray-800/80 backdrop-blur-sm rounded-full flex items-center gap-0.5">
								<Star className="w-3 h-3 fill-current" />
								<span className="text-sm">{movie.year || "0"}</span>
							</div>
							<div className="place-self-start px-2 py-1 bg-gray-800/80 backdrop-blur-sm rounded-full flex items-center gap-0.5">
								<span className="text-sm">{movie.year}</span>
							</div>
						</div>

						<h1 className="place-self-center text-gray-200 font-medium leading-tight transition-all opacity-100  text-center mx-4">{movie.title}</h1>
					</div>

					<div className="transition-all duration-500 ease-out opacity-0 
					translate-y-4 max-h-0 group-hover:opacity-100 group-hover:translate-y-0 group-hover:max-h-40 overflow-hidden">
						<div className="flex gap-0.5 items-center ml-4 mb-2">
							<div className="place-self-start px-2 py-1 bg-gray-800/80 backdrop-blur-sm rounded-full flex items-center gap-0.5 hover:bg-gray-700/80 transition-colors">
								<Star className="w-3 h-3 fill-current" />
								<span className="text-sm">{movie.year || "0"}</span>
							</div>
							<div className="place-self-start px-2 py-1 bg-gray-800/80 backdrop-blur-sm rounded-full flex items-center gap-0.5 hover:bg-gray-700/80 transition-colors">
								<span className="text-sm">{movie.year}</span>
							</div>
						</div>
						<h1 className="text-gray-200 text-center font-medium leading-tight">{movie.title}</h1>
						<p className="text-sm text-gray-300 mb-4 line-clamp-3 text-center leading-tight">{movie.title}</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default SearchMovieCard;