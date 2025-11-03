import BlurCircle from "../components/blur/BlurCircle";
import HomeSection from "../components/sections/HomeSection";
import RecommendationsSection from "../components/sections/RecommendationsSection";
import movies from "@/app/assets/movies.png"

const Movies = () => {
	return (
		<>
			<BlurCircle contentType="movies" top="10px" left="30px" z="z-50" />
			<BlurCircle contentType="movies" bottom="10px" left="120px" z="z-50" />
			<BlurCircle contentType="movies" bottom="10px" right="30px" z="z-50" />
			<BlurCircle contentType="movies" top="30px" right="100px" z="z-50" />

			<RecommendationsSection image={movies} contentType="movies" />

			<HomeSection contentType="movies" />
		</>
	);
};

export default Movies;