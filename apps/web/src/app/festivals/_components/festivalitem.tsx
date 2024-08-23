import Image from "next/image"
import { FaChevronRight } from "react-icons/fa";

export default function FestivalItems() {
    return (
        <div className="bg-sept-white w-[80%] h-[250px] gap-2 justify-between flex flex-row overflow-hidden z-30">
            <div className="flex flex-col sm:flex-row">
                <div className="pl-3 sm:px-8 my-auto">
                    <Image className="shadow-lg shadow-black/60 w-32 h-auto sm:w-[170px] sm:h-auto" src="/images/festival2.jpg" alt="image1" width={170} height={100}></Image>
                </div>
                <div className="text-start place-content-center pl-3 pb-2">
                    <h1 className="sm:text-5xl font-extrabold text-sept-black italic sm:pt-3">JAVA JAZZ.</h1>
                    <p className="sm:text-5xl font-extrabold text-sept-black">2025</p>
                    <p className="text-sept-black text-[10px] sm:text-base font-semibold sm:pt-20">PT. Java Festival Production</p>
                </div>
            </div>
            <button className="place-content-center text-end">
                <FaChevronRight href="/dummy" className="text-black text-5xl sm:text-[210px]" />
            </button >
        </div>
    )
}