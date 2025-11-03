"use client"

import { Dispatch, ReactElement, SetStateAction, useEffect, useState } from "react";

type ContentType = "movies" | "books"

interface Props {
	contentType: ContentType;
	steps: any[];
	currentStep: number;
}

const ProgressBar = ({ contentType, steps, currentStep }: Props) => {
	return (
		<>
			<div className="flex gap-2 mb-8">
				{steps.map((_, index) => (
					<div
						key={index}
						className="h-2 flex-1 bg-gray-700 rounded-full overflow-hidden"
					>
						<div
							className={`h-full ${contentType === "movies" ? "bg-m-dark" : "bg-b-dark"} rounded-full transition-all duration-500 ease-out`}
							style={{
								width: index < currentStep ? '100%' : index === currentStep ? '100%' : '0%',
								opacity: index <= currentStep ? 1 : 0.3
							}}
						/>
					</div>
				))}
			</div>
		</>
	);
};

export default ProgressBar;