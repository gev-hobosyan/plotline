import Link from "next/link";

interface Props {
	href: string,
	children: string
}

const NavLink = ({ href, children }: Props) => {
	return (
		<>
			<div className="group">
				<Link href={href} className="text-white text-lg">{children}</Link>
				<div className="h-[1.5px] w-0 rounded-full duration-200 transition-[width] bg-white group-hover:w-full"></div>
			</div>
		</>
	);
};

export default NavLink;