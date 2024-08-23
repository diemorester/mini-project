"use client"
import { useState } from "react";
import SearchBar from "@/components/searchBar";
import { IoFilter } from "react-icons/io5";
import { FaChevronDown } from "react-icons/fa";
import ReactDatePicker from "./date";

export default function Filter() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isLocationOpen, setIsLocationOpen] = useState(false)
  const [isDateOpen, setIsDateOpen] = useState(false)

  const locations = [{ place: "Jakarta" }, { place: "Bandung" }, { place: "Bali" }]

  return (
    <div className="bg-sept-black w-full overflow-visible pt-[100px]">
      {/* <h1 className="h-[69px] z-10 text-sept-white text-2xl sm:text-6xl px-8">
        [&nbsp; Our Festivals &emsp; &emsp; ]
      </h1> */}
      <div className="flex w-full">
        <SearchBar />
        <div className="w-[25%] h-[69px] sm:h-[150px] place-content-center text-center">
          <IoFilter onClick={() => setIsModalOpen(true)} className="text-8xl text-sept-green hover:text-sept-purple duration-150 mx-auto" />
        </div>
      </div>
      {isModalOpen && (
        <dialog className="modal modal-open">
          <div className="modal-box bg-sept-gray text-sept-white">
            <form method="dialog">
              <button onClick={() => setIsModalOpen(false)} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            </form>
            <h2 className="font-bold text-xl pb-3 divider divider-start">Filter</h2>
            <div className="flex flex-col gap-3">
              <div>
                <button className="w-full cursor-default flex justify-between" onClick={() => isLocationOpen ? setIsLocationOpen(false) : setIsLocationOpen(true)}>
                  <h3 className="font-bold text-lg mb-2">Location</h3>
                  <FaChevronDown className="cursor-pointer" />
                </button>
                {isLocationOpen && (
                  <div>
                    {locations.map((location) =>
                      <div className="cursor-default">
                        <div className=" flex gap-2">
                          <input type="checkbox" className="checkbox mb-3 fill-sept-black" />
                          {location.place}
                        </div>
                      </div>)}
                  </div>
                )}
              </div>
              <div>
                <button className="w-full cursor-default flex justify-between" onClick={() => isDateOpen ? setIsDateOpen(false) : setIsDateOpen(true)}>
                  <h3 className="font-bold text-lg">Date</h3>
                  <FaChevronDown className="cursor-pointer" />
                </button>
                {isDateOpen && (
                  <div className="">
                    <ReactDatePicker />
                  </div>
                )}
              </div>
            </div>
          </div>
        </dialog>
      )}
    </div>
  )
}