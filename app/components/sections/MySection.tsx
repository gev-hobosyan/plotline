import Image, { StaticImageData } from "next/image";
import Button from "../Button";
import { PlusIcon } from "lucide-react";

interface Props {
	contentType: "movies" | "books"
	image: StaticImageData
}

const MySection = ({ contentType, image }: Props) => {
	return (
		<>
			<div className="flex items-center justify-center h-screen flex-col">
				<Image src={image} alt="hero_image" className="size-full absolute inset-0 -z-10 object-cover object-center blur-xs" />
				<h1 className="max-md:text-2xl md:text-6xl text-center my-6">
					Let's add new <br /> <span className={contentType === "movies" ? "text-m-primary" : "text-b-primary"}>{contentType.slice(0, contentType.length - 1)}</span> to your list
				</h1>

				<Button contentType={contentType}>
					Add
					<PlusIcon className="w-3 h-3" />
				</Button>
			</div>
		</>
	);
};

export default MySection;