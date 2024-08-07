import OverView from "./(home)/_components/overview";
import Ticket from "./(home)/_components/ticket";

export default function Home() {
  return (
    <div className="w-full bg-stone-50 text-[#000001]">
      {/* <div className="max-w-[1000px] mx-auto">
        <div className="text-center place-content-center">
          <h1 className="font-pulang text-7xl">the sept.</h1>
          <p className="font-pulang text-2xl">the pilgrimage place of gigs, festival, events,</p>
          <p className="font-pulang text-2xl">and everything fun</p>
        </div>
        <OverView />
      </div> */}
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: "url(/images/hero.jpg)",
        }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md text-stone-50">
            <h1 className="mb-5 text-5xl font-pulang">the sept.</h1>
            <p className="font-pulang">
            the pilgrimage place of gigs, festival, events,
            </p>
            <p className="mb-5 font-pulang">
            and everything fun.
            </p>
          </div>
        </div>
      </div>
      <OverView />
      <Ticket />
    </div>
  );
}
