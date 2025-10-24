import { Movie } from "../assets/dummyData";

interface Props {
	movie: Movie
}

const MovieCard = ({ movie }: Props) => {
	return (
		<>
			<div className="flex flex-col justify-between hover:-translate-y-1 transition duration-100 w-50 relative h-[300px] cursor-pointer overflow-hidden">
				<div className="absolute inset-0 bg-cover bg-center rounded-2xl" style={{ backgroundImage: `url(${movie.imageUrl})` }}></div>

				<div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80"></div>

				<div className="absolute inset-0 flex flex-col justify-end p-6">
					<h1 className="text-white text-center text-lg font-medium">{movie.title}</h1>
				</div>
			</div>
		</>
	);
};

export default MovieCard;