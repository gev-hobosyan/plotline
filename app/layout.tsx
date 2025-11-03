import "./globals.css";
import NavBar from "./components/navbar/NavBar";
import { ClerkProvider } from '@clerk/nextjs';
import { SignedOut, SignedIn } from "@clerk/nextjs";
import LandingPage from "./(landing)/LandingPage";

export default async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <SignedIn>
            <NavBar />
            {children}
          </SignedIn>
          <SignedOut>
            <LandingPage />
          </SignedOut>
        </body>
      </html>
    </ClerkProvider>
  );
};