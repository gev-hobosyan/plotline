import { ArrowRightIcon } from "lucide-react";
import { StaticImageData } from "next/image";
import Image from "next/image";

interface Props {
	image: StaticImageData,
	contentType: "movies" | "books"
}

const RecommendationsSection = ({ image, contentType }: Props) => {
	const color = contentType === "movies" ? "m" : "b";

	return (
		<>
			<div className="flex items-center justify-center h-screen flex-col">
				<Image src={image} alt="hero_image" className="size-full absolute inset-0 -z-10 object-cover object-center blur-xs" />

				<h1 className="text-3xl text-center">
					It's time to discover <br /> <span className={`text-4xl ${color === "m" ? "text-m-primary" : "text-b-primary"} font-medium`}>A Whole New World</span>
				</h1>

				<button className={`flex items-center gap-2 group text-lg ${color === "m" ? "bg-m-primary/30" : "bg-b-dark/30"} my-7 py-3 px-6 border ${color === "m" ? "border-m-dark" : "border-b-dark rounded-full cursor-pointer"}`}>
					Let's start
					<ArrowRightIcon className="w-4.5 h-4.5 group-hover:translate-x-1 transition duration-300" />
				</button>
			</div>
		</>
	);
};

export default RecommendationsSection;