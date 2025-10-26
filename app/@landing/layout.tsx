import type { Metadata } from "next";
import "../globals.css";
import NavBar from "./components/LandingNavbar";

export const metadata: Metadata = {
	title: "Plotline",
	description: "Stories await you",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
			<NavBar />
			<>{children}</>
		</>
	);
}
