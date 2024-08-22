"use client";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function PromotionOne() {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const scrollTop =
          window.scrollY || document.documentElement.scrollTop;

        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
          controls.start("visible");
        } else if (scrollTop < lastScrollTop) {
          controls.start("hidden");
        }

        setLastScrollTop(scrollTop);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [controls, lastScrollTop]);

  const leftVariants = {
    hidden: { opacity: 0, x: -100, color: "#FFFFFF" },
    visible: {
      opacity: 1,
      x: 0,
      color: ["#FFFFFF", "#FF0000", "#FFFFFF"],
      transition: { duration: 1.3, times: [0, 0.7, 1] },
    },
  };

  const rightVariants = {
    hidden: { opacity: 0, x: 100, color: "#FFFFFF" },
    visible: {
      opacity: 1,
      x: 0,
      color: ["#FFFFFF", "#00FF00", "#FFFFFF"],
      transition: { duration: 1.3, times: [0, 0.7, 1] },
    },
  };

  const leftVariants2 = {
    hidden: { opacity: 0, x: -100, color: "#FFFFFF" },
    visible: {
      opacity: 1,
      x: 0,
      color: ["#FFFFFF", "#0000FF", "#FFFFFF"],
      transition: { duration: 1.3, times: [0, 0.7, 1] },
    },
  };

  const rightVariants2 = {
    hidden: { opacity: 0, x: 100, color: "#FFFFFF" },
    visible: {
      opacity: 1,
      x: 0,
      color: ["#FFFFFF", "#FFFF00", "#FFFFFF"],
      transition: { duration: 1.3, times: [0, 0.7, 1] },
    },
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 1,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      className="bg-sept-purple py-[60px] md:py-[200px] text-sept-white font-semibold"
      initial="hidden"
      animate={controls}
      variants={containerVariants}
    >
      <motion.p
        className="text-center text-lg px-6 md:text-7xl"
        variants={leftVariants}
      >
        WE WILL HELP YOU CREATE
      </motion.p>
      <motion.p
        className="text-center text-lg md:text-7xl"
        variants={rightVariants}
      >
        AN ELECTRIFYING &nbsp; &emsp; &nbsp; EVENTS
      </motion.p>
      <motion.p
        className="text-center text-lg md:text-7xl"
        variants={leftVariants2}
      >
        &emsp; &emsp; &emsp; &emsp; THAT RESONATE
      </motion.p>
      <motion.p
        className="text-start text-lg md:text-7xl"
        variants={rightVariants2}
      >
        &emsp; &emsp; &emsp; IN THE HEARTS
      </motion.p>
      <motion.p
        className="text-center text-lg md:text-7xl"
        variants={leftVariants}
      >
        &emsp; &nbsp; OF EVERY FANS
      </motion.p>
    </motion.div>
  );
}
