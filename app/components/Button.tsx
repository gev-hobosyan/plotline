"use client"

import { ReactNode } from "react";

interface Props {
	contentType: "movies" | "books";
	children: ReactNode | ReactNode[] | string | undefined;
	className?: string;
	onClick?: any;
}

const Button = ({ contentType, className, children, onClick }: Props) => {
	return (
		<>
			<button className={`flex gap-2  border  items-center justify-center px-4 py-2 rounded-full group cursor-pointer ${className}`} onClick={onClick}>
				{children}
			</button>
		</>

		//${contentType === "movies" ? "bg-m-primary/30 border-m-dark" : "bg-b-dark/30 border-b-dark"}
	);
};

export default Button;