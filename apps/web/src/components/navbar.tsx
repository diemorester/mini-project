"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);

  return (
    <div>
      <div className="fixed bg-transparent text-sept-white w-screen h-[100px] text-lg sm:text-5xl z-[999] font-bold flex justify-between p-10 items-center">
        <div
          id="text"
          className=" hover:text-sept-green"
          onClick={() => setIsOpen(!isOpen)}
        >
          {!isOpen ? (
            <button className="z-50">MENU</button>
          ) : (
            <button>CLOSE</button>
          )}
        </div>
        <div>
          <Link href="/login" className="hover:text-sept-green">
            LOGIN
          </Link>
        </div>
      </div>
      <div
        className={`fixed transition-all ease-in-out duration-700 z-40 ${
          isOpen
            ? "bg-sept-gray h-screen w-screen"
            : "h-0 w-screen overflow-hidden"
        }`}
      >
        <div
          className={`flex flex-col w-full absolute bottom-[30%] text-3xl sm:text-6xl px-8 transition-opacity duration-700 ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
        >
          <div>
            <Link
              href="/"
              className="text-sept-white hover:text-sept-green"
              onClick={handleClose}
            >
              HOME
            </Link>
          </div>
          <div>
            <Link
              href="/#why"
              className="text-sept-white hover:text-sept-green"
              onClick={handleClose}
            >
              WHY US
            </Link>
          </div>
          <div>
            <Link
              href="/festivals"
              className="text-sept-white hover:text-sept-green"
              onClick={handleClose}
            >
              FESTIVAL
            </Link>
          </div>
          <div>
            <Link
              href="/#prev"
              className="text-sept-white hover:text-sept-green"
              onClick={handleClose}
            >
              PAST EVENTS
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
