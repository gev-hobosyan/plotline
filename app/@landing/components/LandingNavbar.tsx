import { SignedOut, SignInButton, SignUpButton } from '@clerk/nextjs';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
	return (
		<>
			<div className="w-full px-10 max-md:px-5 py-5 fixed top-0 left-0 flex items-center justify-between z-50">
				<Link href="/" className="text-2xl font-work text-white cursor-pointer">Plot<span className="text-white">Line</span></Link>

				<div className="flex gap-3 items-center justify-center">
					<div className="max-md:hidden flex items-center cursor-pointer">
						<SignedOut>
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
					</div>
				</div>
			</div>
		</>
	);
};

export default Navbar;