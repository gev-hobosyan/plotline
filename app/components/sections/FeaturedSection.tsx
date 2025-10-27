import { ArrowRightIcon } from "lucide-react";
import BlurCircle from "@/app/components/blur/BlurCircle";
import BlurLine from "@/app/components/blur/BlurLine";
import MovieCard from "@/app/components/MovieCard";
import { dummyMoviesData } from "@/app/assets/dummyData";

const FeaturedSection = () => {
	return (
		<>
			<div className="py-6 px-10 max-md:px-5 overflow-hidden">
				<div className="relative flex items-center justify-between pt-10 pb-7">
					<BlurLine />
					<BlurCircle right="-80px" />

					<p className="text-gray-300 font-medium text-lg">Trending Now</p>
					<button className="flex items-center gap-2 group justify-center text-sm text-gray-300">
						View All
						<ArrowRightIcon className="w-4 h-4 group-hover:translate-x-0.5 transition" />
					</button>
				</div>

				<div className="flex flex-wrap justify-center gap-8">
					<MovieCard movie={dummyMoviesData[0]} />
					<MovieCard movie={dummyMoviesData[1]} />
					<MovieCard movie={dummyMoviesData[0]} />
					<MovieCard movie={dummyMoviesData[1]} />
					<MovieCard movie={dummyMoviesData[0]} />
					<MovieCard movie={dummyMoviesData[1]} />
				</div>

				<div className="relative flex items-center justify-between pt-10 pb-7">
					<BlurCircle top="200px" left="100px" />

					<p className="text-gray-300 font-medium text-lg">Coming Soon</p>
					<button className="flex items-center gap-2 group justify-center text-sm text-gray-300">
						View All
						<ArrowRightIcon className="w-4 h-4 group-hover:translate-x-0.5 transition" />
					</button>
				</div>

				<div className="flex flex-wrap justify-center gap-8">
					<MovieCard movie={dummyMoviesData[3]} />
					<MovieCard movie={dummyMoviesData[2]} />
					<MovieCard movie={dummyMoviesData[3]} />
					<MovieCard movie={dummyMoviesData[2]} />
					<MovieCard movie={dummyMoviesData[3]} />
					<MovieCard movie={dummyMoviesData[2]} />
				</div>
			</div>
		</>
	);
};

export default FeaturedSection;