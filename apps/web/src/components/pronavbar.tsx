"use client"

import Link from "next/link";
import { useState } from "react"

export default function ProNavbar() {
    const [isOpen, setIsOpen] = useState(false);

    const handleClose = () => setIsOpen(false);

    return (
        <div className="">
            <div className="fixed bg-transparent text-sept-white hover:text-sept-green w-screen h-[100px] text-lg sm:text-5xl font-bold z-50 p-5">
                <div
                    id="text"
                    className=""
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {!isOpen ? (
                        <button className="z-50">
                            MENU
                        </button>
                    ) : (
                        <button>
                            CLOSE
                        </button>
                    )}
                </div>
            </div>
            <div
                className={`fixed transition-all ease-in-out duration-700 z-40 ${isOpen ? "bg-sept-gray h-screen w-screen" : "h-0 overflow-hidden"
                    }`}
            >
                <div className="flex flex-col w-full absolute bottom-[30%] text-6xl px-8">
                    <div className="">
                        <Link
                            href="/"
                            className="text-sept-white hover:text-sept-green"
                            onClick={handleClose}
                        >
                            HOME
                        </Link>
                    </div>
                    <div className="">
                        <Link
                            href="/#why"
                            className="text-sept-white hover:text-sept-green"
                            onClick={handleClose}
                        >
                            WHY US
                        </Link>
                    </div>
                    <div className="">
                        <Link
                            href="/festival"
                            className="text-sept-white hover:text-sept-green"
                            onClick={handleClose}
                        >
                            FESTIVAL
                        </Link>
                    </div>
                    <div className="">
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