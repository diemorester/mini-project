"use client"

import { useAnimation, useInView, useScroll, useTransform, motion, MotionValue } from "framer-motion";
import { useEffect, useRef } from "react"

export default function WhyUs() {
    // const containerRef = useRef(null);
    // const isInView = useInView(containerRef, { once: true })
    // const mainControls = useAnimation()

    // const { scrollYProgress }: { scrollYProgress: MotionValue<number> } = useScroll({
    //     target: containerRef,
    //     offset: ["start end", "end start"],
    // });

    // const fromLeft: MotionValue<string> = useTransform(
    //     scrollYProgress,
    //     [0, 1],
    //     ["-100%", "0%"]
    // );

    // const fromRight: MotionValue<string> = useTransform(
    //     scrollYProgress,
    //     [0, 1],
    //     ["100%", "0%"]
    // );

    // useEffect(() => {
    //     if (isInView) {
    //         mainControls.start("visible")
    //     }
    // }, [isInView])

    return (
        <div id="why">
            <div
                className="w-full h-[150px] sm:h-[250px] bg-sept-black text-sept-white px-8 place-content-center text-3xl sm:text-7xl">
                <h1 className="">[&nbsp;&nbsp;
                    <span className="text-sept-green">
                        WHY
                    </span>
                    &nbsp; US.&emsp; &emsp; &nbsp;]</h1>
            </div>
            <div className="text-3xl sm:text-7xl text-sept-white bg-sept-black p-5 relative font-semibold py-[100px]">
                <p
                    // style={{translateX: fromLeft}}
                    className="text-center">WE&nbsp;
                    <span className="text-red-500">
                        SPICE
                    </span>
                    &nbsp;UP</p>
                <p
                    // style={{translateX: fromRight}}
                    className="text-left sm:pl-52">YOUR&nbsp;
                    <span className="text-sept-green">
                        EVENTS
                    </span>
                </p>
                <p
                    // style={{translateX: fromLeft}}
                    className="text-center">AND MAKE IT</p>
                <p className="text-center pl-5 sm:pl-20">INTO A&nbsp;
                    <span className="text-sept-purple">
                        TREND
                    </span>
                </p>
            </div>
        </div>
    )
}