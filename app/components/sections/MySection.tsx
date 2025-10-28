import { ArrowRightIcon } from "lucide-react";
import BlurLine from "../blur/BlurLine";
import MovieCard from "../MovieCard";
import { dummyMoviesData } from "@/app/assets/dummyData";

interface Props {
	contentType: "movies" | "books"
}

const MySection = ({ contentType }: Props) => {
	return (
		<>
			<div className="py-4 px-10 max-md:px-5 overflow-hidden">
				<div className="relative flex items-center justify-between pt-10 pb-7">
					<BlurLine contentType={contentType} />

					<p className="text-gray-300 font-medium text-lg">Fantasy</p>
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
			</div>
		</>
	);
};

export default MySection;