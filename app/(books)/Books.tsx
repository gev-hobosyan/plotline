import BlurCircle from "../components/blur/BlurCircle";
import FeaturedSection from "../components/sections/FeaturedSection";
import HomeSection from "../components/sections/HomeSection";
import RecommendationsSection from "../components/sections/RecommendationsSection";
import book from "@/app/assets/book.jpg"

const Books = () => {
	return (
		<>
			<BlurCircle contentType="books" top="10px" left="30px" z="z-50" />
			<BlurCircle contentType="books" bottom="10px" left="120px" z="z-50" />
			<BlurCircle contentType="books" bottom="10px" right="30px" z="z-50" />
			<BlurCircle contentType="books" top="30px" right="100px" z="z-50" />

			<RecommendationsSection image={book} contentType="books" />

			<HomeSection contentType="books" />
		</>
	);
};

export default Books;