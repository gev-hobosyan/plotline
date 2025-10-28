import "./globals.css";
import NavBar from "./components/NavBar";
import { ClerkProvider } from '@clerk/nextjs';
import { SignedOut, SignedIn } from "@clerk/nextjs";

export default async function RootLayout({
  children,
  landing
}: Readonly<{
  children: React.ReactNode;
  landing: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          {/* <NavBar />
          {children} */}

          <SignedIn>
            <NavBar />
            {children}
          </SignedIn>
          <SignedOut>
            {landing}
          </SignedOut>
        </body>
      </html>
    </ClerkProvider>
  );
};