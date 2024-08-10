import Marquee from "react-fast-marquee";
import Events from "./_components/events";
import SearchBar from "./_components/searchBar";

export default function Home() {
  return (
    <div className="w-full">
      <div className="max-w-[1400px] mx-auto">
        <div className="h-[600px] sm:h-screen relative bg-sept-black overflow-hidden">
          <h1 className="absolute bottom-[27%] sm:bottom-[43%] z-10 text-sept-white text-2xl sm:text-6xl px-8">[ a_bout us ]</h1>
          <div className="absolute bottom-0 sm:-bottom-[135px] w-screen">
            <Marquee autoFill gradient gradientColor="#131313" gradientWidth={100} className="text-[100px] sm:text-[350px] font-semibold text-sept-white h-fit">
              THESEPT.
            </Marquee>
          </div>
        </div>
        <SearchBar />
        <Events />
      </div>
    </div>
  );
}