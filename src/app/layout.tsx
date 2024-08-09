import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import localfont from "next/font/local";
import Navbar from "./components/navbar";
import ScrollTop from "./components/scrollTop";

const inter = Inter({ subsets: ["latin"] });

// const pulang = localfont({
//   src: [
//     {
//       path: "../../public/fonts/Pulang.ttf",
//       weight: "700",
//     },
//   ],
//   variable: "--font-pulang",
// });

// const poetsen = localfont({
//   src: [
//     {
//       path: "../../public/fonts/PoetsenOne-Regular.ttf",
//       weight: "500",
//     },
//   ],
//   variable: "--font-poetsen",
// });

// const bogart = localfont({
//   src: [
//     {
//       path: "../../public/fonts/Bogart-Regular-trial.ttf",
//       weight: "400",
//     },
//   ],
//   variable: "--font-bogart",
// });

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
    <html
      lang="en"
      // className={`${pulang.variable} ${poetsen.variable} ${bogart.variable}`}
    >
      <body className={inter.className}>
        {/* <Navbar />
        <ScrollTop /> */}
        {children}
      </body>
    </html>
  );
}
