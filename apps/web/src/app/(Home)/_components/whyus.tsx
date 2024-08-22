import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

const WhyUs = () => {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [showFullText, setShowFullText] = useState(false);
  const [showColoredText, setShowColoredText] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const scrollTop = window.scrollY || document.documentElement.scrollTop;

        
        if (rect.top >= 0) {
         
          controls.start("hidden");
          setShowFullText(false);
          setShowColoredText(false);
        } else {
          controls.start("visible").then(() => {
            setTimeout(() => {
              setShowFullText(true);
              setShowColoredText(true);
            }, 600);
          });
        }

        setLastScrollTop(scrollTop);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [controls, lastScrollTop]);

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

  const getRandomDirection = () => (Math.random() > 0.5 ? "left" : "right");

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
          custom={getRandomDirection()}
          initial="hidden"
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
          custom={getRandomDirection()}
          initial="hidden"
          animate={controls}
          variants={textVariants}
          className="text-left sm:pl-52"
          transition={{ delay: 0.4 }}
        >
          YOUR&nbsp;
          {showColoredText && renderTypewriterText("EVENTS", "text-sept-green")}
        </motion.p>
        <motion.p
          custom={getRandomDirection()}
          initial="hidden"
          animate={controls}
          variants={textVariants}
          className="text-center"
          transition={{ delay: 0.6 }}
        >
          AND MAKE IT
        </motion.p>
        <motion.p
          custom={getRandomDirection()}
          initial="hidden"
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
