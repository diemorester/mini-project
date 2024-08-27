"use client";

import Image from "next/image";
import { useState } from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import VoucherCodeForm from "../_components/promotionCode";

export default function DetailedEvents() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const [isPointUsed, setIsPointUsed] = useState(false);
  const [pointUse, setPointUse] = useState(0);


  const point = 5000;
  const ticketPrice = 200000;
  const discountValue = 30000;

  const optionAmount = [
    { label: "1 Fan", value: 1 },
    { label: "2 Fans", value: 2 },
    { label: "3 Fans", value: 3 },
  ];

  const handlePointToggle = () => {
    setIsPointUsed(!isPointUsed);
    setPointUse(isPointUsed ? 0 : point);
  };

  const handleSelectAmount = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedAmount = parseInt(e.target.value, 10);
    setTotalPrice(selectedAmount > 0 ? selectedAmount * ticketPrice : 0);
  };

  const calculateSubTotal = () => {
    const discountedPrice = isPointUsed
      ? totalPrice - discountValue
      : totalPrice;
    return Math.max(discountedPrice, 0);
  };

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
              Istora Senayan
            </p>
            <p className="sm:text-2xl font-bold text-sept-white">May 30th</p>
          </div>
          <div className="w-[6px] h-16 bg-white "></div>
          <p className="text-xs sm:text-6xl text-sept-purple font-extrabold">
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
        <button
          onClick={() => setIsCartOpen(true)}
          className="flex gap-2 text-sept-white hover:text-sept-purple hover:scale-110 transition-colors duration-100 ease-in-out"
        >
          <p className="text-5xl italic font-extrabold ">Get The Tickets</p>
          <FaChevronRight className="text-3xl sm:text-6xl" />
        </button>
      </div>
      {isCartOpen && (
        <dialog className="modal modal-open">
          <div className="modal-box bg-stone-400 text-black w-10/12 max-w-3xl h-auto">
            <div className="flex justify-between">
              <div className="flex gap-3">
                <div className="max-sm:hidden sm:w-[30%]">
                  <Image
                    src="/images/foto4.jpeg"
                    alt="javajazz"
                    width={600}
                    height={600}
                  />
                </div>
                <div className="flex flex-col">
                  <p className="font-extrabold sm:text-3xl italic">
                    JAVA JAZZ.
                  </p>
                  <select
                    onChange={handleSelectAmount}
                    className="select w-full max-w-xs border-stone-400 bg-stone-400"
                  >
                    <option value={0}>Ticket Amount</option>
                    {optionAmount.map((item, index) => (
                      <option
                        className="text-start"
                        key={index}
                        value={item.value}
                      >
                        {item.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="sm:w-[20%]">
                <p className="sm:text-xl text-end">
                  Rp{totalPrice.toLocaleString("de-DE")}
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-3 py-3">
              <p>{`${point} Points`}</p>
              <div onClick={handlePointToggle}>
                <button
                  className={
                    isPointUsed
                      ? "text-sept-purple italic"
                      : "text-sept-green italic"
                  }
                >
                  {isPointUsed ? "Used" : "Use"}
                </button>
              </div>
            </div>
            <div>
              <div className="w-full">
                <VoucherCodeForm />
              </div>
            </div>
            <div className="flex flex-col pt-16 gap-3">
              <div className="flex justify-between sm:px-20">
                <p>Points Used :</p>
                <p>{pointUse.toLocaleString("de-DE")}</p>
              </div>
              <div className="flex justify-between sm:px-20">
                <p>Discount :</p>
                <p>-Rp{discountValue.toLocaleString("de-DE")}</p>
              </div>
              <div className="flex justify-between sm:px-20">
                <p>Sub Total :</p>
                <p>Rp{calculateSubTotal().toLocaleString("de-DE")}</p>
              </div>
            </div>
            <div className="pt-10 flex justify-center">
              <button className="w-8/12 bg-sept-green">
                <p className="p-4 sm:text-xl font-extrabold text-sept-white">
                  Pay Now
                </p>
              </button>
            </div>
            <form method="dialog">
              <button
                className="flex items-center"
                onClick={() => setIsCartOpen(false)}
              >
                <FaChevronLeft />
                <p className="italic">Return</p>
              </button>
            </form>
          </div>
        </dialog>
      )}
    </div>
  );
}
