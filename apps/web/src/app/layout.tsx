import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import ScrollTop from "@/components/scrollTop";
import BackgroundNoise from "@/components/backgroundNoise";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "the sept.",
  description: "the sept.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <BackgroundNoise />
        {/* <Navbar />
        <ScrollTop /> */}
        {children}
      </body>
    </html>
  );
}
