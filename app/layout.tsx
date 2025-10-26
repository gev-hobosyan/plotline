import type { Metadata } from "next";
import "./globals.css";
import NavBar from "./components/NavBar";
import { ClerkProvider } from '@clerk/nextjs'
import { SignedOut, SignedIn } from "@clerk/nextjs";
import { cookies } from "next/headers";
import { setContentTypeAction } from "./actions/contentTypeActions";

type ContentType = "movies" | "books"

async function getContentType(): Promise<ContentType> {
  const cookieStore = await cookies()
  const contentType = cookieStore.get("contentType")?.value as ContentType

  if (!contentType) {
    setContentTypeAction("movies")
  }

  return contentType || "movies";
}

export async function generateMetadata(): Promise<Metadata> {
  const contentType = await getContentType()

  return {
    title: contentType,
    description: "The place where all stories live",
  }
}

export default async function RootLayout({
  children,
  landing,
  movies,
  books
}: Readonly<{
  children: React.ReactNode;
  landing: React.ReactNode;
  movies: React.ReactNode;
  books: React.ReactNode;
}>) {
  const contnentType = await getContentType();

  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          {/* <NavBar />
          {children} */}

          <SignedIn>
            <NavBar />
            {
              contnentType === "movies"
                ? movies
                : books
            }
          </SignedIn>
          <SignedOut>
            {landing}
          </SignedOut>
        </body>
      </html>
    </ClerkProvider>
  );
};