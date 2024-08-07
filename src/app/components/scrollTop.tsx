"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";
import { setTimeout } from "timers/promises";

export default function ScrollTop() {
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  let timeoutId: ReturnType<typeof setTimeout> | null = null;

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const docHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    setProgress(scrollPercent);
    setVisible(scrollTop > 100);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.div
      className="fixed bottom-12 right-12 h-12 w-12 cursor-pointer rounded-full shadow-inner z-10 bg-gray-200 drop-shadow-md"
      onClick={scrollToTop}
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: visible ? 0 : 100, opacity: visible ? 1 : 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <div className="absolute inset-0 rounded-full overflow-hidden">
        <div
          className="absolute bottom-0 left-0 right-0 bg-[#cd96c1]"
          style={{ height: `${progress}%` }}
        />
      </div>
      <FaArrowUp className="absolute inset-0 m-auto text-white" />
    </motion.div>
  );
}
