"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import Marquee from "react-fast-marquee";
import Events from "./_components/events";
import PrevEvents from "./_components/prevEvents";
import SearchBar from "@/components/searchBar";
import WhyUs from "./_components/whyus";
import PromotionOne from "./_components/promotionOne";

export default function Home() {
  const controls = useAnimation();
  const [scrollDirection, setScrollDirection] = useState<"up" | "down">("up");
  const searchBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const searchBarPosition =
        searchBarRef.current?.getBoundingClientRect().top || 0;

      if (currentScrollY > searchBarPosition) {
        setScrollDirection("down");
        console.log("down");
      } else if (currentScrollY < searchBarPosition) {
        setScrollDirection("up");
        console.log("up");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (scrollDirection === "down") {
      controls.start({ x: 0, opacity: 1 });
    } else {
      controls.start({ x: "100%", opacity: 0 });
    }
  }, [scrollDirection, controls]);

  return (
    <div className="w-full overflow-hidden">
      <div className="h-[600px] sm:h-screen relative bg-sept-black">
        <h1 className="absolute bottom-[27%] sm:bottom-[43%] z-10 text-sept-white text-2xl sm:text-6xl px-8">
          [&nbsp;WHO WE ARE. &nbsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;]
        </h1>
        <div className="absolute bottom-0 sm:-bottom-[135px] w-screen z-0">
          <Marquee
            autoFill
            gradient
            gradientColor="#131313"
            gradientWidth={100}
            className="text-[100px] sm:text-[350px] font-semibold text-sept-white h-fit"
          >
            THESEPT.
          </Marquee>
        </div>
      </div>
      <div className="w-full h-[69px] sm:h-[150px] bg-sept-black">
        <motion.div
          ref={searchBarRef}
          initial={{ x: "100%", opacity: 0 }}
          animate={controls}
          transition={{ type: "spring", stiffness: 300, damping: 50 }}
        >
          <div className="w-3/4 fixed right-0">
            <SearchBar />
          </div>
        </motion.div>
      </div>
      <Events />
      <PrevEvents />
      <PromotionOne />
      <WhyUs />
    </div>
  );
}
