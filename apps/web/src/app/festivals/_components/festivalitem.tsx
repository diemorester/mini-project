import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";

interface FestivalItemsProps {
  id: number;
  imageSrc: string;
  festivalName: string;
  year: number;
  productionCompany: string;
}

const FestivalItems: React.FC<FestivalItemsProps> = ({
  id,
  imageSrc,
  festivalName,
  year,
  productionCompany,
}) => {
  return (
    <Link className="bg-sept-white w-[80%] h-[250px] gap-2 justify-between flex flex-row overflow-hidden z-30" href={`/festivals/${id}`}>
     
        <div className="flex flex-row">
          <div className="pl-3 sm:px-8 my-auto">
            <Image
              className="shadow-lg shadow-black/60 w-32 h-auto sm:w-[170px] sm:h-auto"
              src={imageSrc}
              alt={festivalName}
              width={170}
              height={100}
            />
          </div>
          <div className="text-start place-content-center pl-3 pb-2">
            <h1 className="sm:text-5xl font-extrabold text-sept-black italic sm:pt-3">
              {festivalName}
            </h1>
            <p className="sm:text-5xl font-extrabold text-sept-black">{year}</p>
            <p className="text-sept-black text-[10px] sm:text-base font-semibold sm:pt-20">
              {productionCompany}
            </p>
          </div>
        </div>
        <button className="place-content-center text-end">
          <FaChevronRight className="text-black text-5xl sm:text-[210px]" />
        </button>
    </Link>
  );
};

export default FestivalItems;
