import type { Metadata } from "next";
import "./globals.css";
import NavBar from "./components/NavBar";

import { ClerkProvider } from '@clerk/nextjs'

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
    <ClerkProvider>
      <html lang="en">
        <body>
          <NavBar />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
