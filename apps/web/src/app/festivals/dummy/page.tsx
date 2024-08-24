import Image from "next/image";
import { FaChevronRight } from "react-icons/fa";

export default function DetailedEvents() {
  return (
    <div className="relative overflow-hidden">
      <div className="w-screen h-[500px] bg-sept-black">
        <Image
          className="w-screen h-full object-cover opacity-50"
          src="/images/test.jpg"
          alt="test"
          width={2000}
          height={1000}
        />
      </div>
      <div className="bg-sept-black relative h-[80px]">
        <div className="flex gap-8 italic absolute -top-[35%] left-[30%]">
          <div className="text-end">
            <p className="sm:text-2xl font-bold text-sept-green">
              Istora Senayan{" "}
            </p>
            <p className="sm:text-2xl font-bold text-sept-white">May 30th</p>
          </div>
          <div className="w-[6px] h-16 bg-white "></div>
          <p className="sm:text-6xl text-sept-purple font-extrabold">
            JAVA JAZZ.
          </p>
        </div>
      </div>
      <div className="bg-sept-black sm:text-justify px-20 py-40">
        <p className="sm:text-2xl font-thin">
          The Java Jazz Festival is one of the largest and most renowned jazz
          festivals in the world, held annually in Jakarta, Indonesia.
          Established in 2005, the festival attracts both international and
          local jazz enthusiasts, offering a diverse lineup that spans various
          genres, including traditional jazz, contemporary jazz, fusion, blues,
          R&B, soul, and more. It typically takes place over three days in early
          March, featuring multiple stages with performances by a mix of
          legendary jazz artists, up-and-coming musicians, and world-renowned
          headliners. The festival is known for its vibrant atmosphere, with
          thousands of attendees enjoying not only the music but also the
          cultural diversity of the festival, the food stalls, and the unique
          merchandise. The Java Jazz Festival has become a significant cultural
          event, showcasing rich musical heritage of Indonesia and its
          connection to the global jazz community.
        </p>
      </div>
      <div className="flex justify-end gap-11 items-center bg-sept-black p-5 sm:px-16">
        <div className="flex gap-2 cursor-pointer text-sept-white hover:text-sept-purple hover:scale-110 transition-colors duration-100 ease-in-out">
          <p className="text-5xl italic font-extrabold ">Get The Tickets</p>
          <button>
            <FaChevronRight className="text-3xl sm:text-6xl" />
          </button>
        </div>
      </div>
    </div>
  );
}
