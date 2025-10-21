"use client"
import { MenuIcon, XIcon } from "lucide-react";
import NavLink from "./NavLink";
import { useState } from "react";

const NavBar = () => {
	const [isOpen, setIsOpen] = useState(false);


	return (
		<>
			<div className="w-full px-10 py-5 fixed top-0 left-0 flex items-center justify-between z-50">
				<h1 className="text-2xl font-work text-white">Plot<span className="text-white">Line</span></h1>

				<div className={`max-md:absolute max-md:top-0 max-md:left-0 ${isOpen ? 'max-md:w-full' : 'max-md:w-0'} flex items-center justify-center flex-row max-md:flex-col max-md:h-screen bg-black/10 backdrop-blur z-50 overflow-hidden transition-[width] duration-300 gap-8 md:bg-m-primary/20 md:px-6 md:py-3 md:rounded-full md:border md:border-m-dark`}>
					<XIcon className="md:hidden fixed top-6 right-6 cursor-pointer" onClick={() => setIsOpen(!isOpen)} />

					<NavLink href="/">Home</NavLink>
					<NavLink href="/">My Movies</NavLink>
					<NavLink href="/">WishList</NavLink>
					<NavLink href="/">Upcoming</NavLink>
				</div>

				<div className="flex gap-3 items-center justify-center">
					<MenuIcon className="md:hidden cursor-pointer" onClick={() => setIsOpen(!isOpen)} />
					<button className="border border-m-dark bg-m-primary/30 px-4 py-2 rounded-full cursor-pointer">
						Log in
					</button>
				</div>
			</div>
		</>
	);
};

export default NavBar;