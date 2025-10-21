import { ArrowRightIcon } from "lucide-react";
import image from "../assets/image.png";
import Image from "next/image";

interface Props {
	errorCode?: number;
	error?: string;
}

const ErrorSection = ({ errorCode, error }: Props) => {
	return (
		<>
			<div className="flex items-center justify-center h-screen flex-col">
				{/* <Image src={image} alt="hero_image" className="w-full max-h-full object-fit overflow-hidden fixed -z-50 blur-xs" /> */}

				<Image src={image} alt="hero_image" className="size-full absolute inset-0 -z-10 object-cover object-center blur-xs" />

				<h1 className="text-3xl text-center">
					{errorCode}
				</h1>
				<h2>
					{error}
				</h2>
			</div>
		</>
	);
};

export default ErrorSection;