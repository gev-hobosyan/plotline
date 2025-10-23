import Link from "next/link";
import { Dispatch, SetStateAction } from "react";

interface Props {
	href: string,
	children: string,
	setIsOpen: Dispatch<SetStateAction<boolean>>,
}

const NavLink = ({ href, children, setIsOpen }: Props) => {
	return (
		<>
			<div className="group">
				<Link href={href} onClick={() => { setIsOpen(prev => !prev); scrollTo(0, 0); }} className="text-white text-lg">{children}</Link>
				<div className="h-[1.5px] w-0 rounded-full duration-200 transition-[width] bg-white group-hover:w-full"></div>
			</div>
		</>
	);
};

export default NavLink;