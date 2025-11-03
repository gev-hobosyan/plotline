import FeaturedSection from "@/app/components/sections/FeaturedSection";
import HeroSection from "./components/LandingHeroSection";
import Navbar from "./components/LandingNavbar";

const LandingPage = () => {
	return (
		<>
			<Navbar />
			<HeroSection />
			<FeaturedSection />
		</>
	);
};

export default LandingPage;