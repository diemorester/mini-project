import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";

export default function Events() {
  const firstEventControls = useAnimation();
  const secondEventControls = useAnimation();
  const thirdEventControls = useAnimation();
  const [scrollDirection, setScrollDirection] = useState<"up" | "down">("up");
  const [lastScrollY, setLastScrollY] = useState(0);
  const firstEventRef = useRef<HTMLDivElement>(null);
  const secondEventRef = useRef<HTMLDivElement>(null);
  const thirdEventRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        setScrollDirection("down");
      } else {
        setScrollDirection("up");
      }
      setLastScrollY(currentScrollY);

      const firstEventTop =
        (firstEventRef.current?.getBoundingClientRect().top ?? 0) +
        window.scrollY;
      const secondEventTop =
        (secondEventRef.current?.getBoundingClientRect().top ?? 0) +
        window.scrollY;
      const thirdEventTop =
        (thirdEventRef.current?.getBoundingClientRect().top ?? 0) +
        window.scrollY;

      const offset = 500;

      if (
        currentScrollY + offset >= firstEventTop &&
        currentScrollY + offset < secondEventTop
      ) {
        firstEventControls.start({ x: 0, opacity: 1 });
      } else {
        firstEventControls.start({ x: "-100%", opacity: 0 });
      }

      if (
        currentScrollY + offset >= secondEventTop &&
        currentScrollY + offset < thirdEventTop
      ) {
        secondEventControls.start({ x: 0, opacity: 1 });
      } else {
        secondEventControls.start({ x: "100%", opacity: 0 });
      }

      if (currentScrollY + offset >= thirdEventTop) {
        thirdEventControls.start({ x: 0, opacity: 1 });
      } else {
        thirdEventControls.start({ x: "-100%", opacity: 0 });
      }
    };

    const debounce = (func: Function, wait: number) => {
      let timeout: NodeJS.Timeout;
      return function (...args: any[]) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func(...args), wait);
      };
    };

    const debouncedHandleScroll = debounce(handleScroll, 100);

    window.addEventListener("scroll", debouncedHandleScroll);
    return () => {
      window.removeEventListener("scroll", debouncedHandleScroll);
    };
  }, [
    lastScrollY,
    firstEventControls,
    secondEventControls,
    thirdEventControls,
  ]);

  return (
    <div className="bg-sept-black relative">
      <h1 className="h-[250px] text-sept-white text-2xl sm:text-6xl z-50 px-8 place-content-center">
        [&nbsp;OUR UPCOMING EVENTS. &nbsp;]
      </h1>
      <div className="flex flex-col gap-96">
        <motion.div
          ref={firstEventRef}
          initial={{ x: "100%", opacity: 0 }}
          animate={firstEventControls}
          transition={{ type: "spring", stiffness: 300, damping: 50 }}
          className="flex left-0 relative justify-end w-3/4 z-50"
        >
          <div className="line-nav flex w-full gap-5 h-fit items-center absolute -top-5 left-0 z-30">
            <span className="h-3 w-full bg-sept-green z-20" />
            <p className="text-2xl sm:text-4xl italic font-bold text-sept-green text-nowrap z-30">
              JAVA JAZZ.
            </p>
          </div>
          <div className="container-box flex ml-10 w-[750px] bg-sept-gray h-[350px]">
            <div className="w-1/3">
              <Image
                src="/images/foto4.jpeg"
                alt="foto1"
                width={500}
                height={750}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col gap-4 w-2/3 items-center h-full relative justify-center px-6 py-6">
              <p className="text-sept-white text-justify overflow-hidden text-sm sm:text-lg">
                The Java Jazz Festival is one of the largest and most renowned
                jazz festivals in the world, held annually in Jakarta,
                Indonesia. The festival showcases a diverse lineup of jazz
                artists with contemporary styles like R&B, soul, and funk. Known
                for its vibrant atmosphere and eclectic performances, the Java
                Jazz Festival offers a rich cultural experience that celebrates
                both the heritage and the evolving nature of jazz music.
              </p>
              <div className="self-end">
                <Link href="/" className="">
                  <button
                    className='relative overflow-hidden text-3xl italic text-sept-green
                                    z-[3] bg-transparent transition-colors before:absolute before:left-0 before:top-0 before:-z-10
                                    before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-sept-purple
                                    before:transition-transform before:duration-300 before:content-[""] hover:text-sept-white before:hover:scale-x-100'
                  >
                    more info.
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          ref={secondEventRef}
          initial={{ x: "100%", opacity: 0 }}
          animate={secondEventControls}
          transition={{ type: "spring", stiffness: 300, damping: 50 }}
          className="flex right-0 relative justify-start w-3/4 z-50 self-end"
        >
          <div className="line-nav flex w-full gap-5 h-fit items-center absolute -top-5 left-0 z-30">
            <p className="text-2xl sm:text-4xl italic font-bold text-sept-green text-nowrap z-30">
              JAVA JAZZ.
            </p>
            <span className="h-3 w-full bg-sept-green z-20" />
          </div>
          <div className="container-box flex mr-10 w-[750px] bg-sept-gray h-[350px]">
            <div className="flex flex-col gap-4 w-2/3 items-center h-full relative justify-center px-6 py-6">
              <p className="text-sept-white text-justify overflow-hidden text-sm sm:text-lg">
                The Java Jazz Festival is one of the largest and most renowned
                jazz festivals in the world, held annually in Jakarta,
                Indonesia. The festival showcases a diverse lineup of jazz
                artists with contemporary styles like R&B, soul, and funk. Known
                for its vibrant atmosphere and eclectic performances, the Java
                Jazz Festival offers a rich cultural experience that celebrates
                both the heritage and the evolving nature of jazz music.
              </p>
              <div className="self-end">
                <Link href="/" className="">
                  <button
                    className='relative overflow-hidden text-3xl italic text-sept-green
                                    z-[3] bg-transparent transition-colors before:absolute before:left-0 before:top-0 before:-z-10
                                    before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-sept-purple
                                    before:transition-transform before:duration-300 before:content-[""] hover:text-sept-white before:hover:scale-x-100'
                  >
                    more info.
                  </button>
                </Link>
              </div>
            </div>
            <div className="w-1/3">
              <Image
                src="/images/foto4.jpeg"
                alt="foto1"
                width={500}
                height={750}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          ref={thirdEventRef}
          initial={{ x: "100%", opacity: 0 }}
          animate={thirdEventControls}
          transition={{ type: "spring", stiffness: 300, damping: 50 }}
          className="flex left-0 relative justify-end w-3/4 z-50"
        >
          <div className="line-nav flex w-full gap-5 h-fit items-center absolute -top-5 left-0 z-30">
            <span className="h-3 w-full bg-sept-green z-20" />
            <p className="text-2xl sm:text-4xl italic font-bold text-sept-green text-nowrap z-30">
              JAVA JAZZ.
            </p>
          </div>
          <div className="container-box flex ml-10 w-[750px] bg-sept-gray h-[350px]">
            <div className="w-1/3">
              <Image
                src="/images/foto4.jpeg"
                alt="foto1"
                width={500}
                height={750}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col gap-4 w-2/3 items-center h-full relative justify-center px-6 py-6">
              <p className="text-sept-white text-justify overflow-hidden text-sm sm:text-lg">
                The Java Jazz Festival is one of the largest and most renowned
                jazz festivals in the world, held annually in Jakarta,
                Indonesia. The festival showcases a diverse lineup of jazz
                artists with contemporary styles like R&B, soul, and funk. Known
                for its vibrant atmosphere and eclectic performances, the Java
                Jazz Festival offers a rich cultural experience that celebrates
                both the heritage and the evolving nature of jazz music.
              </p>
              <div className="self-end">
                <Link href="/" className="">
                  <button
                    className='relative overflow-hidden text-3xl italic text-sept-green
                                    z-[3] bg-transparent transition-colors before:absolute before:left-0 before:top-0 before:-z-10
                                    before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-sept-purple
                                    before:transition-transform before:duration-300 before:content-[""] hover:text-sept-white before:hover:scale-x-100'
                  >
                    more info.
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <svg
        className="absolute fill-sept-purple max-sm:hidden animate-spin-slow z-0 top-[23%] -right-[10%]"
        xmlns="http://www.w3.org/2000/svg"
        width="500"
        height="500"
        viewBox="0 0 2048 2048"
      >
        <path d="M1006 0h37v2l16 7 15 12v2h2l12 17 14 23 17 28 9 15 31 51 9 15 12 19 6 2 12 2 11-7 18-13 38-28 18-13 38-28 18-13 14-9 14-7 12-3 6-1h17l12 3 14 7 12 10 9 12 7 14 4 16 8 51 18 119 3 12 10 7h7l60-15 70-17 36-9 19-3h16l15 3 16 8 12 11 7 8 6 11 4 13 1 6v18l-5 25-13 52-18 74-8 32v7l7 11 5 3 161 25 22 4 15 5 14 8 10 9 6 7 6 10 5 15 1 6v15l-4 17-10 19-8 11-10 14-13 17-12 17-13 17-4 6-14 19-12 16-13 18-9 12v9l2 9 9 6 112 68 30 18 16 12 5 4 10 13 7 14 3 7v33l-3 3-6 13-8 11-6 7-19 13-23 14-28 17-20 12-56 34-20 12-3 3-3 12v7l13 18 9 12 10 14 14 19 13 18 12 16 13 18 14 19 11 16 8 15 4 13 1 5v17l-4 15-5 10-7 10-9 9-13 8-14 5-24 5-119 18-44 7-6 1-2 5-5 8 4 18 29 118 10 42 2 12v16l-2 10-4 11-6 11-9 10-8 7-14 7-15 4-13 1-18-2-82-20-94-23-4 1-12 8-2 6-7 46-10 65-10 64-4 15-5 12-9 13-7 7-14 9-13 5-12 2-14-1-14-3-16-8-11-7-133-98-9-6-8 1-10 2-2 5-13 22-16 26-27 45-8 13-28 46-9 11-5 5-8 7-9 5-14 6-4 1h-30l-3-3-13-6-11-8-9-9-12-17-18-30-14-23-51-84-7-11-4-2-10-2h-6l-14 10-19 14-36 26-13 10-36 26-19 14-15 10-17 8-18 4h-13l-15-4-14-7-12-11-8-10-6-12-4-13-6-35-18-118-5-31-3-5-10-6-15 3-123 30-42 10-16 2h-8l-15-3-12-5-9-6-10-9-7-9-7-14-3-12v-21l5-24 16-66 10-40 13-54-1-7-7-11-13-3-142-22-30-5-16-5-12-6-11-9-9-11-8-16-3-11v-18l4-16 8-16 9-13 42-57 11-15 13-18 12-16 14-19 9-12 1-4-3-14-5-4-25-15-112-68-16-10-11-9-7-7-9-13-7-17v-30h2l2-9 7-13 8-10 9-8 13-9 112-68 20-12 19-12 3-14v-5l-12-17-12-16-14-19-13-18-28-38-13-18-14-19-9-15-6-17-1-4v-20l4-15 9-16 4-5h2l2-4 12-9 13-6 15-4 56-9 100-15 24-4 4-2 5-7 1-9-18-73-14-58-9-37-3-16v-19l4-16 6-12 9-11 12-10 15-7 16-3h14l20 3 163 40 9 1 11-7 3-3 26-168 4-21 6-16 8-12 5-6 10-8 15-8 14-3h13l17 3 19 9 13 9 19 14 18 13 20 15 18 13 17 13 14 10 19 14 12 9h8l9-2 5-5 7-12 12-20 51-84 12-20 10-16 11-14 9-8 11-7 10-4h2zm16 132-12 20-17 28-12 20-11 18-17 28-7 11-8 10-11 9-12 7-15 5-33 7-22 3-19-3-16-6-11-7-18-13-16-12-19-14-18-13-12-9-19-14-13-9-2 2-9 57-10 65-5 27-5 13-7 12-9 11-10 8-12 8-20 13-16 8-14 4-8 1h-14l-17-3-122-30-12-2 2 12 23 93 9 38 1 7v20l-4 16-10 19-16 24-10 13-11 10-10 6-13 5-25 5-104 16-25 4v3l8 10 26 36 28 38 13 18 12 17 7 14 4 14 1 6v16l-5 28-6 25-5 12-6 10-8 10-10 8-16 10-23 14-56 34-26 16-6 4 5 5 23 14 21 13 25 15 28 17 21 13 9 7 6 5 8 10 6 10 6 17 7 35 1 7v21l-4 16-4 9-7 12-8 11-14 19-13 18-11 15-12 16-13 18-9 12-4 7 36 6 96 15 23 5 12 5 12 8 8 7 11 14 14 21 10 17 5 13 2 10v21l-6 28-14 57-15 60v4l18-4 73-18 50-12 7-1h22l14 3 17 8 27 18 14 11 10 11 8 14 5 15 6 36 17 111h4l18-14 17-12 38-28 14-10 19-14 14-9 17-8 17-3h15l28 5 25 6 12 5 12 8 9 8 11 15 21 35 16 26 12 20 14 23 8 13 2 3h2l14-23 13-21 15-25 17-28 12-20 12-17 7-7 13-9 11-5 18-5 25-5 21-2 17 2 16 6 15 9 95 70 14 10 5 2 3-15 19-121 3-14 4-12 8-14 12-13 15-11 12-8 14-9 14-7 10-3 7-1h22l20 4 48 12 78 19h2l-2-10-12-50-19-78-2-11v-22l4-16 9-17 14-21 10-14 4-5 11-9 14-8 17-5 57-9 84-13 4-1-2-4-10-14-13-18-28-38-13-18-14-19-9-14-7-15-3-14v-18l5-27 5-23 5-13 8-13 9-10 13-10 84-51 26-16 10-6 2-3-19-12-28-17-20-12-56-34-11-9-8-8-9-14-5-12-5-19-5-27-1-16 3-18 5-13 7-12 10-14 15-20 13-18 9-12 11-15 14-19 10-14 3-6-65-10-76-12-16-4-16-8-10-8-8-8-13-18-11-17-8-14-5-15-1-5v-22l5-24 30-123v-2l-8 1-132 32-13 2h-13l-13-2-16-6-18-11-20-14-13-11-9-12-8-16-5-23-18-118-2-14h-4l-11 8-18 13-12 9-18 13-38 28-17 12-14 8-16 5-11 2h-10l-20-3-29-6-15-5-14-8-9-8h-2l-2-4-10-13-16-27-10-16-17-28-24-40-5-8z" />
      </svg>
      <svg
        className="absolute fill-sept-green animate-spin-slow-reversed z-0"
        xmlns="http://www.w3.org/2000/svg"
        width="250"
        height="250"
        viewBox="0 0 2048 2048"
      >
        <path d="M1000 0h49l1 2 14 7 22 22 7 12 4 7 36 60 7 10 8 13 3 6 6 9 6 11 6 9 5 10v2h2l5 7v4h13l4 3 3-1 2-4 8-6 5-3 11-9 7-4 5-4 5-3 11-9 5-3 10-8 18-12 10-8 6-4 11-9 5-3 11-9 7-4 5-4 12-6 8-6 11-1 2-2 5-1h27l19 9 10 6 9 9 6 10 8 17 1 4v13h2l1 2 1 16v6l3 1 1 19v8l3 1 1 11v16l3 1 1 14v9l3 1 1 27 3 1 1 23 3 1 1 14 2 6 2 2 8 3v2l6-2 4-2 11-1 5-3 11-1 2-2 18-2 5-3 11-1 2-2 14-2 2-2 14-2 5-3 11-1 2-2 14-2 2-2 13-2 3-2 14-2 2-2 6-1h42l16 8 6 4 16 16 7 12 3 6 1 5v34l-1 11-2 3-2 13-2 3-2 13-2 3-2 13-2 3-2 14-2 2-2 13-2 3-2 13-2 3-2 13-2 3-2 13-2 2-1 14-3 7-2 13-3 5 3 5 3 7 10 6 24 1 3 1 1 2 19 1 5 2v2l3-1 20 1 4 1 1 2 20 1 4 2v2h24l4 2v2h20l4 2v2h20l5 3 9 2 18 10 17 17 6 10 4 9 1 8v23l-1 10-2 2-2 10-5 9-3 4h-2l-2 7-4 5-5 5-5 8-8 9-3 6-5 6-3 6-5 5-4 5-3 6-9 10-3 6-9 10-3 6-7 7-5 9-6 8-3 5-7 7-5 10-1 13 1 3 6 3 8 6 12 6 9 6 12 7 13 8 10 6 10 7 14 8 9 6 16 9 7 5 12 6 6 5 14 7 22 22 6 10 3 6 1 1v48h-2l-2 7-7 11-20 20-17 9-9 6-11 6-9 6-11 6-9 6-12 7-15 10-17 10-13 8-7 4-13 8-7 4-10 7v11l-3 3v2l5 5 5 6 10 16v2h2l8 10 6 9 6 7 6 9 7 9 1 4h2l7 11 9 11 6 9 6 7 2 6h2l9 12 1 4h2l6 10v2h2l5 8 4 10v5h2l1 2 1 11-1 23-2 2-2 10-3 5-6 11-7 8-6 5-18 8-12 4-11 2-4 2-20 2-6 2-22 2-4 2-15 1-9 1-6 2-18 2-6 2-22 2-3 2-12 1-9 1-7 2-14 2-3 5-2 5-2 4v3h2l1 2 2 14 2 2 2 18 2 2 2 14 2 3 2 13 2 3 2 13 2 3 1 13h2l2 10v6h2l2 10v6h2l2 11v5h2l2 12v4h2l1 2 1 26-1 20-2 2-2 10-7 11-17 17-18 9h-44l-22-5-71-18-61-14-24-6-1 3-7 3-3 4-3 7-1 10-1 11-2 2-2 26-2 2-2 22-1 2h-2v16l-1 10-1 2h-2v14l-2 10h-2v16l-1 10-1 2h-2v15l-1 7-2 2-2 10-3 5-7 13-18 18-18 9h-42l-1-3-10-1-6-6-7-3-10-6-7-7-7-3-9-9-7-3-5-5-8-4-8-8-8-4-8-8-8-4-8-8-8-4-8-8-7-3-5-5-8-4-8-8-7-3-4-2h-15l-1 6-6 6-4 9-6 10h-2l-2 7-6 10-4 5-7 14-6 8-3 5-5 7-6 12-5 6-7 14-5 6-7 14-5 6-7 14-22 22-16 8-1 2h-49l-3-3-13-7-20-20v-2h-2l-9-17-6-9-6-11-6-9-6-11-6-9-6-11-6-9-7-10-7-13-4-5-8-15-4-5-8-15-1-3h-2l-3-7h-12l-3-3-4 2-7 7-8 4-6 5-6 3-10 9-6 3-10 9-7 4-9 8-6 3-6 5-7 4-9 8-6 3-7 7-9 5-7 7-9 5-9 6-11 6-5 5-5 1-9 1-2 2h-35v-2l-7-2-18-10-10-10-13-26-1-3-1-13-3-7-1-17-3-7-1-21-3-7-1-21-3-7-1-17-3-7-1-21-3-7-1-17-3-6v-12l-3-5-2-2-7-3-4-1-4 3-14 2-6 2-14 2-5 2-11 2-6 2-10 2-5 2-11 2-5 2-11 2-5 2-11 2-5 2-11 2-5 2-11 2-3 2-13 2-6 2-34 1-13-1-4-3-11-6-8-7-12-12-9-17-1-3v-45l3-4 2-14 2-3 2-12 2-4 2-12 2-4 2-12 2-4 2-12 2-4 2-12 2-4 2-12 2-4 2-16 2-4 2-12 2-4 2-14 3-1-2-7-4-8-3-3-8-3-27-3-3-1-21-3-20-3-32-5-12-2-16-3-23-3-4-1-19-2-3-2-10-3-14-7-10-9-11-11-8-16-2-5v-36l3-5 2-8 5-10 6-8 3-5 8-9 3-6 9-10 3-6 6-8 3-5 8-9 3-6 9-10 3-6 9-10 3-6 9-10 3-6 6-8 3-5 8-9 4-8 1-13-1-4-7-3-5-4-14-7-5-5-7-3-8-4-5-5-7-3-9-5-4-4-7-3-5-5-7-3-8-4-5-5-7-3-8-4-5-5-7-3-8-4-5-5-7-3-10-6-21-21-7-14v-2H0v-48l3-5 6-11 9-10h2l1-3 8-7 6-5 12-6 9-6 12-7 13-8 10-6 17-10 7-5 7-4 9-6 9-5 13-8 10-6 19-11 8-5 1-11 2-4h2l-7-8-4-5-2-6h-2l-7-11-9-11-6-9-6-7-4-6-8-10-12-18-8-10-6-9-6-7-6-9-6-7-2-6h-2l-6-10v-2h-2l-6-10-3-7-2-7-2-5v-25l2-7 3-9 8-17 5-6 10-8 16-8 8-2 6-2 9-1 2-2 6-1 16-1 2-2 6-1 20-1 2-2 6-1 20-1 2-2 6-1 16-1 2-2 6-1 20-1 2-2 6-1 18-1v-2l18-2 4-4 4-8v-5l-2-2-2-13-3-7-1-13-3-7-1-9-2-3-2-13-2-3-2-13-2-3-2-13-2-3-2-13-2-3-2-13-2-3-2-13-2-3-2-13-2-3-1-5v-43l8-15 3-5 14-14 7-6 17-8h43l6 2 1 1 13 2 5 2 11 2 5 2 11 2 5 2 12 2 4 2 12 2 4 2 12 2 4 2 12 2 4 2 12 1 5 3 12 1 3 1 1 2 12 1 5 3 6-1 7-3 4-5 3-7 1-16 2-6 1-2 1-20 2-6 1-2 1-16 2-6 1-2 1-20 2-6 1-2 1-16 2-6 1-2 1-20 2-6 1-2 1-16 2-7 3-9 8-17 8-8 5-6 10-8 17-8h36l5 2 7 2 5 3 5 4 14 7 10 9 8 5 10 8 18 12 10 8 6 4 10 8 6 4 8 7 6 3 10 9 6 3 4 3v2l7 2 9 9 8 4 1 1h17l3-6 6-8 6-12 6-8 6-12 6-8 6-12 6-8 3-5 5-7 6-12 6-8 6-12 6-8 6-12 5-6 7-14 24-24 14-7z" />
      </svg>
      <svg
        className="absolute fill-sept-purple bottom-[15%] md:bottom-[260px] md:right-[425px] z-0 animate-spin-slow"
        xmlns="http://www.w3.org/2000/svg"
        width="350"
        height="350"
        viewBox="0 0 2048 2048"
      >
        <path d="M1000 0h49l1 2 14 7 22 22 7 12 4 7 36 60 7 10 8 13 3 6 6 9 6 11 6 9 5 10v2h2l5 7v4h13l4 3 3-1 2-4 8-6 5-3 11-9 7-4 5-4 5-3 11-9 5-3 10-8 18-12 10-8 6-4 11-9 5-3 11-9 7-4 5-4 12-6 8-6 11-1 2-2 5-1h27l19 9 10 6 9 9 6 10 8 17 1 4v13h2l1 2 1 16v6l3 1 1 19v8l3 1 1 11v16l3 1 1 14v9l3 1 1 27 3 1 1 23 3 1 1 14 2 6 2 2 8 3v2l6-2 4-2 11-1 5-3 11-1 2-2 18-2 5-3 11-1 2-2 14-2 2-2 14-2 5-3 11-1 2-2 14-2 2-2 13-2 3-2 14-2 2-2 6-1h42l16 8 6 4 16 16 7 12 3 6 1 5v34l-1 11-2 3-2 13-2 3-2 13-2 3-2 13-2 3-2 14-2 2-2 13-2 3-2 13-2 3-2 13-2 3-2 13-2 2-1 14-3 7-2 13-3 5 3 5 3 7 10 6 24 1 3 1 1 2 19 1 5 2v2l3-1 20 1 4 1 1 2 20 1 4 2v2h24l4 2v2h20l4 2v2h20l5 3 9 2 18 10 17 17 6 10 4 9 1 8v23l-1 10-2 2-2 10-5 9-3 4h-2l-2 7-4 5-5 5-5 8-8 9-3 6-5 6-3 6-5 5-4 5-3 6-9 10-3 6-9 10-3 6-7 7-5 9-6 8-3 5-7 7-5 10-1 13 1 3 6 3 8 6 12 6 9 6 12 7 13 8 10 6 10 7 14 8 9 6 16 9 7 5 12 6 6 5 14 7 22 22 6 10 3 6 1 1v48h-2l-2 7-7 11-20 20-17 9-9 6-11 6-9 6-11 6-9 6-12 7-15 10-17 10-13 8-7 4-13 8-7 4-10 7v11l-3 3v2l5 5 5 6 10 16v2h2l8 10 6 9 6 7 6 9 7 9 1 4h2l7 11 9 11 6 9 6 7 2 6h2l9 12 1 4h2l6 10v2h2l5 8 4 10v5h2l1 2 1 11-1 23-2 2-2 10-3 5-6 11-7 8-6 5-18 8-12 4-11 2-4 2-20 2-6 2-22 2-4 2-15 1-9 1-6 2-18 2-6 2-22 2-3 2-12 1-9 1-7 2-14 2-3 5-2 5-2 4v3h2l1 2 2 14 2 2 2 18 2 2 2 14 2 3 2 13 2 3 2 13 2 3 1 13h2l2 10v6h2l2 10v6h2l2 11v5h2l2 12v4h2l1 2 1 26-1 20-2 2-2 10-7 11-17 17-18 9h-44l-22-5-71-18-61-14-24-6-1 3-7 3-3 4-3 7-1 10-1 11-2 2-2 26-2 2-2 22-1 2h-2v16l-1 10-1 2h-2v14l-2 10h-2v16l-1 10-1 2h-2v15l-1 7-2 2-2 10-3 5-7 13-18 18-18 9h-42l-1-3-10-1-6-6-7-3-10-6-7-7-7-3-9-9-7-3-5-5-8-4-8-8-8-4-8-8-8-4-8-8-8-4-8-8-7-3-5-5-8-4-8-8-7-3-4-2h-15l-1 6-6 6-4 9-6 10h-2l-2 7-6 10-4 5-7 14-6 8-3 5-5 7-6 12-5 6-7 14-5 6-7 14-5 6-7 14-22 22-16 8-1 2h-49l-3-3-13-7-20-20v-2h-2l-9-17-6-9-6-11-6-9-6-11-6-9-6-11-6-9-7-10-7-13-4-5-8-15-4-5-8-15-1-3h-2l-3-7h-12l-3-3-4 2-7 7-8 4-6 5-6 3-10 9-6 3-10 9-7 4-9 8-6 3-6 5-7 4-9 8-6 3-7 7-9 5-7 7-9 5-9 6-11 6-5 5-5 1-9 1-2 2h-35v-2l-7-2-18-10-10-10-13-26-1-3-1-13-3-7-1-17-3-7-1-21-3-7-1-21-3-7-1-17-3-7-1-21-3-7-1-17-3-6v-12l-3-5-2-2-7-3-4-1-4 3-14 2-6 2-14 2-5 2-11 2-6 2-10 2-5 2-11 2-5 2-11 2-5 2-11 2-5 2-11 2-5 2-11 2-3 2-13 2-6 2-34 1-13-1-4-3-11-6-8-7-12-12-9-17-1-3v-45l3-4 2-14 2-3 2-12 2-4 2-12 2-4 2-12 2-4 2-12 2-4 2-12 2-4 2-12 2-4 2-16 2-4 2-12 2-4 2-14 3-1-2-7-4-8-3-3-8-3-27-3-3-1-21-3-20-3-32-5-12-2-16-3-23-3-4-1-19-2-3-2-10-3-14-7-10-9-11-11-8-16-2-5v-36l3-5 2-8 5-10 6-8 3-5 8-9 3-6 9-10 3-6 6-8 3-5 8-9 3-6 9-10 3-6 9-10 3-6 9-10 3-6 6-8 3-5 8-9 4-8 1-13-1-4-7-3-5-4-14-7-5-5-7-3-8-4-5-5-7-3-9-5-4-4-7-3-5-5-7-3-8-4-5-5-7-3-8-4-5-5-7-3-8-4-5-5-7-3-10-6-21-21-7-14v-2H0v-48l3-5 6-11 9-10h2l1-3 8-7 6-5 12-6 9-6 12-7 13-8 10-6 17-10 7-5 7-4 9-6 9-5 13-8 10-6 19-11 8-5 1-11 2-4h2l-7-8-4-5-2-6h-2l-7-11-9-11-6-9-6-7-4-6-8-10-12-18-8-10-6-9-6-7-6-9-6-7-2-6h-2l-6-10v-2h-2l-6-10-3-7-2-7-2-5v-25l2-7 3-9 8-17 5-6 10-8 16-8 8-2 6-2 9-1 2-2 6-1 16-1 2-2 6-1 20-1 2-2 6-1 20-1 2-2 6-1 16-1 2-2 6-1 20-1 2-2 6-1 18-1v-2l18-2 4-4 4-8v-5l-2-2-2-13-3-7-1-13-3-7-1-9-2-3-2-13-2-3-2-13-2-3-2-13-2-3-2-13-2-3-2-13-2-3-2-13-2-3-2-13-2-3-1-5v-43l8-15 3-5 14-14 7-6 17-8h43l6 2 1 1 13 2 5 2 11 2 5 2 11 2 5 2 12 2 4 2 12 2 4 2 12 2 4 2 12 2 4 2 12 1 5 3 12 1 3 1 1 2 12 1 5 3 6-1 7-3 4-5 3-7 1-16 2-6 1-2 1-20 2-6 1-2 1-16 2-6 1-2 1-20 2-6 1-2 1-16 2-6 1-2 1-20 2-6 1-2 1-16 2-7 3-9 8-17 8-8 5-6 10-8 17-8h36l5 2 7 2 5 3 5 4 14 7 10 9 8 5 10 8 18 12 10 8 6 4 10 8 6 4 8 7 6 3 10 9 6 3 4 3v2l7 2 9 9 8 4 1 1h17l3-6 6-8 6-12 6-8 6-12 6-8 6-12 6-8 3-5 5-7 6-12 6-8 6-12 6-8 6-12 5-6 7-14 24-24 14-7z" />
      </svg>
      <svg
        className="absolute fill-sept-white max-md:hidden bottom-[190px] right-[350px] z-0 animate-spin-slow"
        xmlns="http://www.w3.org/2000/svg"
        width="500"
        height="500"
        viewBox="0 0 2048 2048"
      >
        <path d="M1006 0h37v2l16 7 15 12v2h2l12 17 14 23 17 28 9 15 31 51 9 15 12 19 6 2 12 2 11-7 18-13 38-28 18-13 38-28 18-13 14-9 14-7 12-3 6-1h17l12 3 14 7 12 10 9 12 7 14 4 16 8 51 18 119 3 12 10 7h7l60-15 70-17 36-9 19-3h16l15 3 16 8 12 11 7 8 6 11 4 13 1 6v18l-5 25-13 52-18 74-8 32v7l7 11 5 3 161 25 22 4 15 5 14 8 10 9 6 7 6 10 5 15 1 6v15l-4 17-10 19-8 11-10 14-13 17-12 17-13 17-4 6-14 19-12 16-13 18-9 12v9l2 9 9 6 112 68 30 18 16 12 5 4 10 13 7 14 3 7v33l-3 3-6 13-8 11-6 7-19 13-23 14-28 17-20 12-56 34-20 12-3 3-3 12v7l13 18 9 12 10 14 14 19 13 18 12 16 13 18 14 19 11 16 8 15 4 13 1 5v17l-4 15-5 10-7 10-9 9-13 8-14 5-24 5-119 18-44 7-6 1-2 5-5 8 4 18 29 118 10 42 2 12v16l-2 10-4 11-6 11-9 10-8 7-14 7-15 4-13 1-18-2-82-20-94-23-4 1-12 8-2 6-7 46-10 65-10 64-4 15-5 12-9 13-7 7-14 9-13 5-12 2-14-1-14-3-16-8-11-7-133-98-9-6-8 1-10 2-2 5-13 22-16 26-27 45-8 13-28 46-9 11-5 5-8 7-9 5-14 6-4 1h-30l-3-3-13-6-11-8-9-9-12-17-18-30-14-23-51-84-7-11-4-2-10-2h-6l-14 10-19 14-36 26-13 10-36 26-19 14-15 10-17 8-18 4h-13l-15-4-14-7-12-11-8-10-6-12-4-13-6-35-18-118-5-31-3-5-10-6-15 3-123 30-42 10-16 2h-8l-15-3-12-5-9-6-10-9-7-9-7-14-3-12v-21l5-24 16-66 10-40 13-54-1-7-7-11-13-3-142-22-30-5-16-5-12-6-11-9-9-11-8-16-3-11v-18l4-16 8-16 9-13 42-57 11-15 13-18 12-16 14-19 9-12 1-4-3-14-5-4-25-15-112-68-16-10-11-9-7-7-9-13-7-17v-30h2l2-9 7-13 8-10 9-8 13-9 112-68 20-12 19-12 3-14v-5l-12-17-12-16-14-19-13-18-28-38-13-18-14-19-9-15-6-17-1-4v-20l4-15 9-16 4-5h2l2-4 12-9 13-6 15-4 56-9 100-15 24-4 4-2 5-7 1-9-18-73-14-58-9-37-3-16v-19l4-16 6-12 9-11 12-10 15-7 16-3h14l20 3 163 40 9 1 11-7 3-3 26-168 4-21 6-16 8-12 5-6 10-8 15-8 14-3h13l17 3 19 9 13 9 19 14 18 13 20 15 18 13 17 13 14 10 19 14 12 9h8l9-2 5-5 7-12 12-20 51-84 12-20 10-16 11-14 9-8 11-7 10-4h2zm16 132-12 20-17 28-12 20-11 18-17 28-7 11-8 10-11 9-12 7-15 5-33 7-22 3-19-3-16-6-11-7-18-13-16-12-19-14-18-13-12-9-19-14-13-9-2 2-9 57-10 65-5 27-5 13-7 12-9 11-10 8-12 8-20 13-16 8-14 4-8 1h-14l-17-3-122-30-12-2 2 12 23 93 9 38 1 7v20l-4 16-10 19-16 24-10 13-11 10-10 6-13 5-25 5-104 16-25 4v3l8 10 26 36 28 38 13 18 12 17 7 14 4 14 1 6v16l-5 28-6 25-5 12-6 10-8 10-10 8-16 10-23 14-56 34-26 16-6 4 5 5 23 14 21 13 25 15 28 17 21 13 9 7 6 5 8 10 6 10 6 17 7 35 1 7v21l-4 16-4 9-7 12-8 11-14 19-13 18-11 15-12 16-13 18-9 12-4 7 36 6 96 15 23 5 12 5 12 8 8 7 11 14 14 21 10 17 5 13 2 10v21l-6 28-14 57-15 60v4l18-4 73-18 50-12 7-1h22l14 3 17 8 27 18 14 11 10 11 8 14 5 15 6 36 17 111h4l18-14 17-12 38-28 14-10 19-14 14-9 17-8 17-3h15l28 5 25 6 12 5 12 8 9 8 11 15 21 35 16 26 12 20 14 23 8 13 2 3h2l14-23 13-21 15-25 17-28 12-20 12-17 7-7 13-9 11-5 18-5 25-5 21-2 17 2 16 6 15 9 95 70 14 10 5 2 3-15 19-121 3-14 4-12 8-14 12-13 15-11 12-8 14-9 14-7 10-3 7-1h22l20 4 48 12 78 19h2l-2-10-12-50-19-78-2-11v-22l4-16 9-17 14-21 10-14 4-5 11-9 14-8 17-5 57-9 84-13 4-1-2-4-10-14-13-18-28-38-13-18-14-19-9-14-7-15-3-14v-18l5-27 5-23 5-13 8-13 9-10 13-10 84-51 26-16 10-6 2-3-19-12-28-17-20-12-56-34-11-9-8-8-9-14-5-12-5-19-5-27-1-16 3-18 5-13 7-12 10-14 15-20 13-18 9-12 11-15 14-19 10-14 3-6-65-10-76-12-16-4-16-8-10-8-8-8-13-18-11-17-8-14-5-15-1-5v-22l5-24 30-123v-2l-8 1-132 32-13 2h-13l-13-2-16-6-18-11-20-14-13-11-9-12-8-16-5-23-18-118-2-14h-4l-11 8-18 13-12 9-18 13-38 28-17 12-14 8-16 5-11 2h-10l-20-3-29-6-15-5-14-8-9-8h-2l-2-4-10-13-16-27-10-16-17-28-24-40-5-8z" />
      </svg>
      {/* <div className="flex relative items-center gap-2 mt-36">
        <p className="italic text-2xl sm:text-4xl font-bold text-sept-white absolute right-[11%] z-20">
          SYNCHRONIZE.
        </p>
        <span className="bg-sept-white w-[10%] h-3 absolute right-0 z-20"></span>
      </div>
      <div className="flex relative items-center gap-2 mt-36">
        <p className="italic text-2xl sm:text-4xl font-bold text-sept-white absolute left-[11%] z-20">
          HAMMERSONIC.
        </p>
        <span className="bg-sept-white w-[10%] h-3 absolute z-20"></span>
      </div>
      <div className="h-[1400px]"></div> */}
    </div>
  );
}
