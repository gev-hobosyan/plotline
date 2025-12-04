'use client'

import { MenuIcon, XIcon } from "lucide-react";
import NavLink from "./NavLink";
import { useEffect, useState, useTransition } from "react";
import Link from "next/link";
import ContentTypeSwitcher from "../ContentTypeSwitcher";
import Cookies from "js-cookie";
import { setContentTypeAction } from "../../actions/contentTypeActions";
import { LogoutLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";

type ContentType = "movies" | "books"

const NavBar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [contentType, setContentType] = useState<ContentType>();
	const [isPending, startTransition] = useTransition();

	const { isAuthenticated, user } = useKindeBrowserClient()

	useEffect(() => {
		setContentType(Cookies.get("contentType") as ContentType)
	}, [])

	const handleSwitch = (type: ContentType) => {
		setContentType(type);
		startTransition(async () => {
			await setContentTypeAction(type);
		});
	};

	return (
		<>
			<div className="w-full px-10 max-md:px-5 py-5 fixed top-0 left-0 flex items-center justify-between z-50">
				<Link href="/" className="text-2xl font-work text-white cursor-pointer">Plot<span className="text-white">Line</span></Link>

				<div className={`max-md:absolute max-md:top-0 max-md:left-0 ${isOpen ? 'max-md:w-full' : 'max-md:w-0'} flex items-center justify-center flex-row max-md:flex-col max-md:h-screen bg-black/10 backdrop-blur z-50 overflow-hidden transition-[width] duration-300 gap-8 ${contentType === "movies" ? 'md:bg-m-primary/20' : "md:bg-b-dark/20"} md:px-6 md:py-3 md:rounded-full md:border ${contentType === "movies" ? "md:border-m-dark" : "md:border-b-dark"} transition-all`}>
					<XIcon className="md:hidden fixed top-6 right-6 cursor-pointer" onClick={() => setIsOpen(!isOpen)} />

					<NavLink setIsOpen={setIsOpen} href="/">Home</NavLink>
					<NavLink setIsOpen={setIsOpen} href="/mymovies">My Movies</NavLink>
					<NavLink setIsOpen={setIsOpen} href="/wishlist">WishList</NavLink>
					<NavLink setIsOpen={setIsOpen} href="/coming">Upcoming</NavLink>
				</div>

				<div className="flex gap-3 items-center justify-center">
					<MenuIcon className="md:hidden cursor-pointer" onClick={() => setIsOpen(!isOpen)} />
					<div className="max-md:hidden flex items-center cursor-pointer">
						{
							isAuthenticated ?
								<LogoutLink postLogoutRedirectURL="/">
									Log out
								</LogoutLink>
								: <RegisterLink>
									<p>Register</p>
								</RegisterLink>
						}

						{/* <SignedOut>
							<SignInButton>
								<span className="cursor-pointer">Log In</span>
							</SignInButton>
							<div className="h-1 w-3"></div>
							<SignUpButton>
								<button className="border border-m-dark bg-m-primary/30 px-4 py-2 rounded-full cursor-pointer text-lg">
									Get Started
								</button>
							</SignUpButton>
						</SignedOut>
						<SignedIn>
							<UserButton />
						</SignedIn> */}
						<ContentTypeSwitcher contentType={contentType} handleSwitch={handleSwitch} />
					</div>
				</div>
			</div>
		</>
	);
};

export default NavBar;