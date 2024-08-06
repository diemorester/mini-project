"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={` bg-stone-50 h-[100px] font-semibold flex-wrap w-full flex items-center justify-between px-20 py-auto fixed top-0 z-20 ${
        isScrolled
          ? "bg-opacity-100 transition-[background-color] ease-in duration-300 drop-shadow-md text-black"
          : "bg-opacity-0 transition-[background-color] ease-out duration-300 text-stone-50"
      }`}
    >
      <div className="flex items-center">
        <Image
          src="/vercel.svg"
          alt="logo"
          width={100}
          height={100}
          className=""
        />
      </div>
      <div className="flex items-center gap-8">
        <Link href="/" className="hover:scale-110">
          Home
        </Link>
        <Link href="/festivals" className="hover:scale-110">
          Festivals
        </Link>
        <Link href="/register" className="hover:scale-110">
          Gallery
        </Link>
        <Link href="/register" className="hover:scale-110">
          Contact
        </Link>
      </div>
      <div className="flex items-center">
        <Link href="/login">
          <button className="relative overflow-hidden w-[100px] h-[50px] rounded-2xl z-20 border-[#cd96c1] bg-black py-2 px-5 text-stone-50 transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-[#cd96c1] before:rounded-md before:transition-transform before:duration-300 before:content-[''] hover:text-black before:hover:scale-x-100">Login</button>
        </Link>
      </div>
    </nav>
  );
}