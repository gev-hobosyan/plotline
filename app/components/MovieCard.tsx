import { PlusIcon, Star } from "lucide-react";
import { Movie } from "@/app/assets/dummyData";

interface Props {
	movie: Movie
}

const MovieCard = ({ movie }: Props) => {
	return (
		<>
			<div className="flex flex-col justify-between hover:-translate-y-1 transition duration-100 w-50 relative h-[300px] cursor-pointer overflow-hidden rounded-2xl group">
				<div className="absolute inset-0 bg-cover transition-transform duration-500 ease-out bg-center rounded-2xl" style={{ backgroundImage: `url(${movie.imageUrl})` }}></div>

				<div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80"></div>

				<button className="absolute top-2 right-2 w-6 h-4 bg-gray-800/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-gray-700/80 transition-colors z-10 cursor-pointer">
					<PlusIcon className="w-3 h-3 text-white cursor-pointer" />
				</button>

				<div className="absolute inset-0 flex flex-col justify-end px-4 pb-3">

					<div className="flex items-center mb-3 transition-all duration-300 ease-out absolute flex-col place-self-center w-full group-hover:opacity-0">
						<div className="flex gap-0.5 items-center mb-2 self-center">
							<div className="place-self-start px-2 py-1 bg-gray-800/80 backdrop-blur-sm rounded-full flex items-center gap-0.5">
								<Star className="w-3 h-3 fill-current" />
								<span className="text-sm">{movie.rating || "0"}</span>
							</div>
							<div className="place-self-start px-2 py-1 bg-gray-800/80 backdrop-blur-sm rounded-full flex items-center gap-0.5">
								<span className="text-sm">{movie.releaseDate}</span>
							</div>
						</div>

						<h1 className="place-self-center text-gray-200 font-medium leading-tight transition-all opacity-100  text-center mx-4">{movie.title}</h1>
					</div>



					<div className="transition-all duration-500 ease-out opacity-0 
					translate-y-4 max-h-0 group-hover:opacity-100 group-hover:translate-y-0 group-hover:max-h-40 overflow-hidden">
						<div className="flex gap-0.5 items-center ml-4 mb-2">
							<div className="place-self-start px-2 py-1 bg-gray-800/80 backdrop-blur-sm rounded-full flex items-center gap-0.5 hover:bg-gray-700/80 transition-colors">
								<Star className="w-3 h-3 fill-current" />
								<span className="text-sm">{movie.rating || "0"}</span>
							</div>
							<div className="place-self-start px-2 py-1 bg-gray-800/80 backdrop-blur-sm rounded-full flex items-center gap-0.5 hover:bg-gray-700/80 transition-colors">
								<span className="text-sm">{movie.releaseDate}</span>
							</div>
						</div>
						<h1 className="text-gray-200 text-center font-medium leading-tight">{movie.title}</h1>
						<p className="text-sm text-gray-300 mb-4 line-clamp-3 text-center leading-tight">{movie.description}</p>
					</div>


					{/* <div className={`transition-all  overflow-hidden duration-300 ${
						isHovered 
						? "opacity-100 translate-y-0 max-h-40"
						: "opacity-0 translate-y-4 max-h-0"
					}`}>
						<p className="text-sm text-gray-300 mb-4 line-clamp-3">{movie.description}</p>
					</div> */}

					{/* <div className="opacity-0 translate-y-4 max-h-0 transition-all overflow-hidden group-hover:opacity-100 group-hover:translate-y-0 group-hover:max-h-40">
						<p className="text-sm text-gray-300 mb-4 line-clamp-3">{movie.description}</p>
					</div> */}
				</div>
			</div>
		</>
	);
};

export default MovieCard;