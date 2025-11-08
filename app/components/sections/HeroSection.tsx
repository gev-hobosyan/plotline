import { ArrowRightIcon } from "lucide-react";
import image from "@/app/assets/movies.png";
import Image from "next/image";
import { PT_Sans } from "next/font/google"
import Button from "../Button";

const ptSans = PT_Sans({
	weight: "700",
})

const HeroSection = () => {
	return (
		<>
			<div className="flex items-center justify-center h-screen flex-col">
				{/* <Image src={image} alt="hero_image" className="w-full max-h-full object-fit overflow-hidden fixed -z-50 blur-xs" /> */}

				<Image src={image} alt="hero_image" className="size-full absolute inset-0 -z-10 object-cover object-center blur-xs" />

				<h1 className="max-md:text-2xl md:text-6xl text-center">
					The place where <br className="md:hidden" /> <span className={`${ptSans.className} text-m-primary font-bold`}>All Stories</span> live.
				</h1>

				<div className="flex mt-4 gap-4 items-center justify-center">
					<button className="flex gap-2 border border-m-dark items-center justify-center px-4 py-2 rounded-full backdrop-blur group cursor-pointer">
						Learn More
					</button>
					{/* <SignUpButton>
						<Button contentType="movies">
							Get Started
							<ArrowRightIcon className="w-3 h-3 group-hover:translate-x-0.5 transition" />
						</Button>
					</SignUpButton> */}
				</div>
			</div>
		</>
	);
};

export default HeroSection;