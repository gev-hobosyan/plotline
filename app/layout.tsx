import "./globals.css";
import NavBar from "./components/navbar/NavBar";
import LandingPage from "./(landing)/LandingPage";
import { AuthProvider } from "./AuthProvider";

export default async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AuthProvider>
      <html lang="en">
        <body>

          <NavBar />
          {children}

          {/* <LandingPage /> */}

        </body>
      </html>
    </AuthProvider>
  );
};