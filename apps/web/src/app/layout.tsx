import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import BackgroundNoise from "@/components/backgroundNoise";
import ProNavbar from "@/components/pronavbar";

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
        <ProNavbar />
        {/* <Navbar /> */}
        {/* <ScrollTop /> */}
        {children}
      </body>
    </html>
  );
}
