import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Suspense } from "react";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TopBar from "@/components/TopBar";
import FacebookPixel from "@/components/FacebookPixel";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Home - Voordeligste-Warmtepomp.nl",
  description: "Vooroplopen in hernieuwbare energie voor een betere toekomst.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <body className={inter.className}>
        <Suspense fallback={null}>
          <FacebookPixel />
        </Suspense>
        <div className="flex flex-col min-h-screen">
          <TopBar />
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
      <GoogleAnalytics gaId="G-LPD416F609" />
    </html>
  );
}
