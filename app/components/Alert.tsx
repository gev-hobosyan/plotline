import Link from "next/link";
import { ReactNode } from "react";

interface Props {
	children: ReactNode;
}

const Alert = ({
	children
}: Props
) => {
	return (
		<>
			<div className="my-25 mx-10 bg-m-primary/30 border border-m-dark rounded-full py-4 px-10 flex items-center justify-center gap-3">
				<p className="text-lg">{children}</p>
			</div>
		</>
	);
};

export default Alert;