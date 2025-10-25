import Link from "next/link";
import Alert from "../components/Alert";
import BlurCircle from "../components/BlurCircle";
import FeaturedSection from "../components/FeaturedSection";
import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";

const MyMovies = () => {
	return (
		<>
			<BlurCircle top="10px" left="10px" />
			<BlurCircle top="170px" right="90px" />
			<BlurCircle bottom="10px" left="130px" />

			<SignedOut>
				<Alert>Please <SignInButton><span className="cursor-pointer text-m-primary">Log In</span></SignInButton> to proceed</Alert>
			</SignedOut>

			<SignedIn>

			</SignedIn>
		</>
	);
};

export default MyMovies;