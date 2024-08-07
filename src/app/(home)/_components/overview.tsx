import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

export default function OverView() {
    return (
        <div className="w-full">
            <div className="max-w-[1300px] mx-auto">
                <div className="h-52 place-content-center">
                    <h1 className="text-2xl md:text-4xl font-pulang text-center">Our Upcoming Events</h1>
                </div>
                <div className="flex flex-wrap justify-center gap-6 rounded-sm">
                    <div className="relative">
                        <div className="absolute inset-0 bg-[#d8d9d8] text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-65 duration-200 transition-all ease-out cursor-pointer rounded-[20px]">
                            <h2 className="font-poetsen text-2xl">Lollapalooza</h2>
                            {/* <p className="mx-auto px-3 pb-16 text-lg font-bold tracking-wider">Manglayang</p> */}
                            <p className="absolute bottom-12 font-poetsen text-sm">May 30th, 2025</p>
                        </div>
                        <div>
                            <Image src="/images/event1.jpg" alt="event3" width={350} height={350} className="rounded-[20px]" />
                        </div>
                    </div>
                    <div className="relative">
                        <div className="absolute inset-0 bg-[#d8d9d8] text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-65 duration-200 transition-all ease-out cursor-pointer rounded-[20px]">
                            <h3 className="font-poetsen text-2xl">Coachella</h3>
                            {/* <p className="mx-auto px-3 pb-16 text-lg font-bold tracking-wider">Manglayang</p> */}
                            <p className="absolute bottom-12 font-poetsen text-sm">Aug 8th, 2025</p>
                        </div>
                        <div>
                            <Image src="/images/event2.jpg" alt="event2" width={350} height={350} className="rounded-[20px] object-contain" />
                        </div>
                    </div>
                    <div className="relative">
                        <div className="absolute inset-0 bg-[#d8d9d8] text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-65 duration-200 transition-all ease-out cursor-pointer rounded-[20px]">
                            <h3 className="font-poetsen text-2xl">Wacken Open Air</h3>
                            {/* <p className="mx-auto px-3 pb-16 text-lg font-bold tracking-wider">Manglayang</p> */}
                            <p className="absolute bottom-12 font-poetsen text-sm">Dec 24th, 2025</p>
                        </div>
                        <div>
                            <Image src="/images/event3.jpg" alt="event3" width={350} height={350} className="rounded-[20px]" />
                        </div>
                    </div>
                </div>
                <div className="h-20 place-content-center">
                    <Link href="/festivals">
                        <p className="text-2xl font-pulang text-center justify-center flex gap-2">
                            ...more events
                            <FaArrowRight className="pt-2" />
                        </p>
                    </Link>
                </div>
            </div>
        </div>
    )
}