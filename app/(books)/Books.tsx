import BlurCircle from "../components/blur/BlurCircle";
import FeaturedSection from "../components/sections/FeaturedSection";
import RecommendationsSection from "../components/sections/RecommendationsSection";
import book from "@/app/assets/book.jpg"

const Books = () => {
	return (
		<>
			<RecommendationsSection image={book} contentType="books" />
		</>
	);
};

export default Books;