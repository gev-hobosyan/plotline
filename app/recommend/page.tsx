"use client"

import { useEffect, useState } from "react";
import Card from "../components/Card";
import Cookies from "js-cookie";
import Button from "../components/Button";
import ProgressBar from "../components/ProgressBar";
import BlurCircle from "../components/blur/BlurCircle";

type ContentType = "movies" | "books"
type Option = {
	label: string;
	value: string;
}

export type Step = {
	id: number;
	title: string;
	options: Option[];
}


const Recommend = () => {
	const [contentType, setContentType] = useState<ContentType>()
	const [currentStep, setCurrentStep] = useState(0)
	const [selectedOption, setSelectedOption] = useState<string | null>(null)
	const [isAnimating, setIsAnimating] = useState(false)

	useEffect(() => {
		setContentType(Cookies.get('contentType') as ContentType)
	})

	const handleNext = () => {
		if (!selectedOption) return;

		setIsAnimating(true);

		setTimeout(() => {
			if (currentStep < steps.length - 1) {
				setCurrentStep(currentStep + 1);
				setSelectedOption(null);
			} else {
				console.log('Onboarding complete!');
			}
			setIsAnimating(false);
		}, 300)
	}

	const steps: Step[] = [
		{
			id: 1,
			title: "Choose an option",
			options: [
				{
					label: "Use previous experiance",
					value: "previous"
				},
				{
					label: "Try something new",
					value: "new"
				}
			]
		},
		{
			id: 2,
			title: "Choose an option",
			options: [
				{
					label: "Use previous experiance",
					value: "previous"
				},
				{
					label: "Try something new",
					value: "new"
				}
			]
		},
		{
			id: 3,
			title: "Choose an option",
			options: [
				{
					label: "Use previous experiance",
					value: "previous"
				},
				{
					label: "Try something new",
					value: "new"
				}
			]
		},
	]

	return (
		<>
			<BlurCircle contentType={contentType} top="50px" left="100px" />
			<BlurCircle contentType={contentType} bottom="50px" right="-100px" />
			<BlurCircle contentType={contentType} bottom="-90px" right="900px" />
			<BlurCircle contentType={contentType} top="200px" right="350px" />

			<div className="flex items-center justify-center h-screen flex-col gap-8 overflow-hidden">
				<div className="w-full max-w-[500px]">
					<ProgressBar contentType={contentType!} steps={steps} currentStep={currentStep} />

					<div className="h-5"></div>

					<Card contentType={contentType!} step={steps[currentStep]} handleNext={handleNext} setSelectedOption={setSelectedOption} selectedOption={selectedOption} isLastStep={currentStep === (steps.length - 1)} />
				</div>
			</div>
		</>
	)
};

export default Recommend;