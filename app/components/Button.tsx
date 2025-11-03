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
			<button className={`flex gap-2 ${contentType === "movies" ? "bg-m-primary/30 border-m-dark" : "bg-b-dark/30 border-b-dark"} border  items-center justify-center px-4 py-2 rounded-full group cursor-pointer ${className}`} onClick={onClick}>
				{children}
			</button>
		</>
	);
};

export default Button;