import Image from "next/image"

export default function FestivalItems() {
    return (
        <div className="bg-sept-white w-[80%] h-[250px] gap-2 flex flex-row overflow-hidden z-30">
            <div className="px-1 sm:px-8 my-auto">
                <Image className="" src="/images/festival2.jpg" alt="image1" width={170} height={100}></Image>    
            </div>
            <div className="text-start place-content-center">
                <h1 className="sm:text-5xl font-extrabold text-sept-black italic pt-3">JAVA JAZZ.</h1>
                <p className="sm:text-5xl font-extrabold text-sept-black">2025</p>
                <p className="text-sept-black text-[10px] sm:text-base font-semibold pt-20">PT. Java Festival Production</p>
            </div>
        </div>
    )
}