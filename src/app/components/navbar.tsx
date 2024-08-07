"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import ModalSign from "./modalsign";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosClose } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "/", text: "Home" },
  { href: "/festival", text: "Festivals" },
  { href: "/Galery", text: "Gallery" },
  { href: "/Contact", text: "Contact" },
];

interface ButtonProps {
  onClick: () => void;
}
const loginButton = ({ onClick }: ButtonProps) => (
  <button
    onClick={onClick}
    className="hidden md:block relative overflow-hidden w-[100px] h-[50px] rounded-3xl z-20 border-[#cd96c1] bg-black py-2 px-5 text-stone-50 transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-[#cd96c1] before:rounded-md before:transition-transform before:duration-300 before:content-[''] before:hover:scale-x-100"
  >
    Log In
  </button>
);

const LoginTextButton = ({ onClick }: ButtonProps) => (
  <span onClick={onClick} className="py-2 cursor-pointer">
    Login
  </span>
);

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null); // ref buat ngecek kalo ngeklik diluar sidebar

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll); // event listener buat ngecek scroll
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      sidebarRef.current &&
      !sidebarRef.current.contains(event.target as HTMLElement) // cek kalo ngeklik diluar sidebar
    ) {
      setIsSidebarOpen(false);
    }
  };

  useEffect(() => {
    if (isSidebarOpen) {
      document.body.classList.add("overflow-hidden"); // ngasih body classlist buat ngehilangin scroll
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.body.classList.remove("overflow-hidden");
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSidebarOpen]);

  return (
    <>
      <AnimatePresence>
        {isSidebarOpen && (
          <>
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
              className="fixed md:hidden inset-0 bg-black bg-opacity-50 z-20" // backdrop sidebarnya
            />
            <motion.div
              ref={sidebarRef}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 20,
                delay: 0.2,
              }}
              className="fixed md:hidden top-0 right-0 w-3/5 md:w-1/2   h-full bg-white shadow-lg z-20" // sidebar backgroundnya
            >
              <button
                onClick={toggleSidebar}
                className="absolute top-4 right-4 text-5xl text-black"
              >
                <IoIosClose />
              </button>
              <div className="flex flex-col items-start px-6 py-16 font-bogart font-semibold text-black gap-5">
                {links.map((
                  link // konten sidebar nge map dari list di atas
                ) => (
                  <Link
                    key={link.text}
                    href={link.href}
                    className="py-2 hover:scale-110"
                  >
                    {link.text}
                  </Link>
                ))}
                <ModalSign ButtonComponent={LoginTextButton} />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
      <nav
        className={`bg-white h-[100px] font-bogart font-semibold flex-wrap w-full flex items-center justify-between px-20 py-auto fixed top-0 z-10 ${
          // navbar utama
          isScrolled // kalau scroll, navbar timbul dan sticky
            ? "bg-opacity-100 transition-[background-color] ease-in duration-300 drop-shadow-md text-black"
            : "bg-opacity-0 transition-[background-color] ease-out duration-300 text-stone-50"
        }`}
      >
        <div className="flex items-center">
          <Image src="/vercel.svg" alt="logo" width={100} height={100} />
        </div>
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link key={link.text} href={link.href} className="hover:scale-110">
              {link.text}
            </Link>
          ))}
        </div>
        <div className="flex items-center">
          <ModalSign ButtonComponent={loginButton} />
          <div className="flex md:hidden">
            <button
              onClick={toggleSidebar} // button buat toggle sidebar/hamburger
              className="text-2xl text-black"
            >
              {isSidebarOpen ? (
                ""
              ) : (
                <RxHamburgerMenu
                  className={`${isScrolled ? "text-black" : "text-white"} `}
                />
              )}
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
