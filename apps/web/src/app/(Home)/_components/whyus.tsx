import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

const WhyUs = () => {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);
  const [showFullText, setShowFullText] = useState(false);
  const [showColoredText, setShowColoredText] = useState(false);
  const [direction, setDirection] = useState("left");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          console.log("Intersection Observer Entry:", entry);
          if (entry.isIntersecting) {
            console.log("Element is in view");
            controls.start("visible");
            setShowFullText(true);
            setShowColoredText(true);
          } else {
            console.log("Element is out of view");
            controls.start("hidden");
            setShowFullText(false);
            setShowColoredText(false);
          }
        });
      },
      { threshold: 0.5 } 
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [controls]);

  const renderTypewriterText = (text: string, className: string) => (
    <span className={`typewriter ${className}`}>
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: index * 0.1 }}
        >
          {char}
        </motion.span>
      ))}
    </span>
  );

  useEffect(() => {
    setDirection(Math.random() > 0.5 ? "left" : "right");
  }, []);

  const textVariants = {
    hidden: (direction: string) => ({
      x: direction === "left" ? -100 : 100,
      opacity: 0,
    }),
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 30, damping: 20, duration: 1 },
    },
  };

  return (
    <div id="why" ref={ref}>
      <div className="w-full transition-all ease-in-out duration-300 h-[150px] sm:h-[250px] bg-sept-black text-sept-white px-8 place-content-center text-3xl sm:text-7xl">
        <motion.h1
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { duration: 1 } },
          }}
        >
          [
          {showFullText ? (
            <>
              &nbsp;&nbsp;
              {showColoredText &&
                renderTypewriterText("WHY", "text-sept-green")}
              &nbsp; US.&emsp; &emsp; &nbsp;
            </>
          ) : (
            "US"
          )}
          ]
        </motion.h1>
      </div>
      <div className="text-3xl sm:text-7xl text-sept-white bg-sept-black p-5 relative font-semibold py-[100px]">
        <motion.p
          initial="hidden"
          custom={direction}
          animate={controls}
          variants={textVariants}
          className="text-center"
          transition={{ delay: 0.2 }}
        >
          WE&nbsp;
          {showColoredText && renderTypewriterText("SPICE", "text-red-500")}
          &nbsp;UP
        </motion.p>
        <motion.p
          initial="hidden"
          custom={direction}
          animate={controls}
          variants={textVariants}
          className="text-left sm:pl-52"
          transition={{ delay: 0.4 }}
        >
          YOUR&nbsp;
          {showColoredText && renderTypewriterText("EVENTS", "text-sept-green")}
        </motion.p>
        <motion.p
          initial="hidden"
          custom={direction}
          animate={controls}
          variants={textVariants}
          className="text-center"
          transition={{ delay: 0.6 }}
        >
          AND MAKE IT
        </motion.p>
        <motion.p
          initial="hidden"
          custom={direction}
          animate={controls}
          variants={textVariants}
          className="text-center"
          transition={{ delay: 0.8 }}
        >
          &emsp; &nbsp;INTO A &nbsp;
          {showColoredText && renderTypewriterText("TREND", "text-sept-purple")}
        </motion.p>
      </div>
    </div>
  );
};

export default WhyUs;
