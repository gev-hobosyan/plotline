import { ArrowRightIcon } from "lucide-react";
import image from "../assets/image.png";
import Image from "next/image";

interface Props {
	error?: string;
}

const HeroSection = ({ error }: Props) => {
	return (
		<>
			<div className="flex items-center justify-center h-screen flex-col">
				{/* <Image src={image} alt="hero_image" className="w-full max-h-full object-fit overflow-hidden fixed -z-50 blur-xs" /> */}

				<Image src={image} alt="hero_image" className="size-full absolute inset-0 -z-10 object-cover object-center blur-xs" />

				<h1 className="text-3xl text-center">
					{error ? error : "The place where all stories live"}
				</h1>
				<div className="flex mt-4 gap-4 items-center justify-center">
					<button className="flex gap-2 border border-m-dark items-center justify-center px-4 py-2 rounded-full group cursor-pointer">
						Learn More
					</button>
					<button className="flex gap-2 bg-m-primary/30 border border-m-dark items-center justify-center px-4 py-2 rounded-full group cursor-pointer">
						Get Started
						<ArrowRightIcon className="w-3 h-3 group-hover:translate-x-0.5 transition" />
					</button>
				</div>
			</div>
		</>
	);
};

export default HeroSection;