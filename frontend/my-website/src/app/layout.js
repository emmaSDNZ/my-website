import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../../libreries/components/Navbar";
import Footer from "../../libreries/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "E. Sudañez Portfolio",
  description: "Portfolio profesional de E. Sudañez",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background font-sans flex flex-col min-h-screen`}
      >
        {/* Navbar fijo */}
        <Navbar />

        {/* Contenido principal con padding superior para navbar y padding inferior para footer */}
        <main className="flex-1 w-full max-w-5xl mx-auto pt-28 pb-28 px-4 md:px-8">
          {children}
        </main>

        {/* Footer fijo */}
        <Footer />
      </body>
    </html>
  );
}
