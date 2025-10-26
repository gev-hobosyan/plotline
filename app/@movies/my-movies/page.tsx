import BlurCircle from "../../components/BlurCircle";
import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";

const MyMovies = () => {
	return (
		<>
			<BlurCircle top="10px" left="10px" />
			<BlurCircle top="170px" right="90px" />
			<BlurCircle bottom="10px" left="130px" />
		</>
	);
};

export default MyMovies;