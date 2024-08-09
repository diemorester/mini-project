import Image from "next/image";
import Link from "next/link";

export default function Ticket() {
  return (
    <div className="w-full">
      <div className="max-w-[1300px] mx-auto">
        <div className="h-52 place-content-center">
          <h1 className="text-2xl md:text-4xl text-center">
            get a ticket
          </h1>
        </div>
        <div className="flex flex-wrap justify-center gap-[38px]">
          <div className="relative">
            <Image
              src="/images/ticket1.png"
              alt="ticket1"
              width={550}
              height={350}
            />
            <h2 className="text-2xl min-[375px]:text-3xl sm:text-4xl text-[#4B0082] absolute left-1 sm:left-3 top-[40%] -rotate-90">
              festival
            </h2>
            <h3 className="absolute text-xl sm:text-3xl text-[#4B0082] left-[35%] top-7 sm:top-10">
              Lollapalooza
            </h3>
            <p className="absolute text-xl text-[#4B0082] left-[35%] top-16 sm:top-32">
              Rp2.499.999,00
            </p>
            <Link href="/festival" className="absolute left-[35%] top-[65%]">
              <button className="relative overflow-hidden text-xs sm:text-base w-[150px] sm:w-[275px] rounded-2xl z-[3] bg-stone-50 py-2 px-5 text-[#4B0082] transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-[#4B0082] before:rounded-md before:transition-transform before:duration-300 before:content-[''] hover:text-stone-50 before:hover:scale-x-100">
                buy now!
              </button>
            </Link>
          </div>
          <div className="relative">
            <Image
              src="/images/ticket2.png"
              alt="ticket2"
              width={550}
              height={350}
            />
            <h2 className="text-2xl min-[375px]:text-3xl sm:text-4xl text-[#beb4d6] absolute right-2 md:right-5 top-[39%] -rotate-90">
              Festival
            </h2>
            <h3 className="absolute text-xl sm:text-3xl text-[#beb4d6] left-[15%] top-7 sm:top-10">
              Coachella
            </h3>
            <p className="absolute text-xl text-[#beb4d6] left-[15%] top-16 sm:top-32">
              Rp3.999.999,00
            </p>
            <Link
              href=""
              className="absolute left-[70px] sm:left-[16%] top-[65%]"
            >
              <button className="relative overflow-hidden text-xs sm:text-base w-[150px] sm:w-[275px] rounded-2xl z-[3] bg-stone-50 py-2 px-5 text-[#4B0082] transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-[#beb4d6] before:rounded-md before:transition-transform before:duration-300 before:content-[''] hover:text-[#4B0082] before:hover:scale-x-100">
                buy now!
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
