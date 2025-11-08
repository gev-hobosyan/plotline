"use client"

import { Dispatch, ReactNode, SetStateAction } from "react";
import type { Step } from "../recommend/page";
import Button from "./Button";


type ContentType = "movies" | "books"

interface Props {
	contentType: ContentType;
	step: Step;
	handleNext: () => void;
	setSelectedOption: Dispatch<SetStateAction<string | null>>;
	selectedOption: string | null;
	isLastStep?: boolean
}

const Card = ({ contentType, step, handleNext, setSelectedOption, selectedOption, isLastStep = false }: Props) => {
	const bgColor = contentType === "movies" ? "bg-m-primary" : "bg-b-dark"
	const borderColor = contentType === "movies" ? "border-m-dark" : "border-b-dark"

	return (
		<>
			<div className={`w-[500px] h-[500px] bg-black/30 border-black border flex flex-col items-center justify-between py-10 px-6 rounded-2xl backdrop-blur overflow-hidden`}>
				<p className="text-2xl">{step.title}</p>
				<div className="flex flex-col items-center gap-4">
					{
						step.options.map((option, index) => (
							<Button onClick={() => setSelectedOption(option.value)} key={index} contentType={contentType as ("movies" | "books")} className={selectedOption === option.value ? `${bgColor}/30 ${borderColor}` : `bg-none ${borderColor} transition-colors duration-300`}>
								{option.label}
							</Button>
						))
					}
				</div>

				<Button contentType={contentType} onClick={() => handleNext()} className={contentType === "movies" ? "bg-m-primary/30 border-m-dark" : "bg-b-dark/50 border-b-dark"} >
					{isLastStep ? "Complete" : "Continue"}
				</Button>
				{/* 				
				<div className="cursor-pointer" onClick={() => handleNext()}>
					{isLastStep ? "Complete" : "Continue"}
				</div> */}
			</div>
		</>
	);
};

export default Card;