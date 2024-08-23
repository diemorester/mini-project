import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";

export default function PageNumber() {
    return (
        <div className="flex flex-row text-6xl gap-5 z-30 text-sept-white">
            <button className="hover:text-sept-green">
                <FaChevronLeft />
            </button>
            <button className="hover:text-sept-green italic">1</button>
            <button className="hover:text-sept-green italic">2</button>
            <button className="hover:text-sept-green italic">3</button>
            <button className="hover:text-sept-green italic">4</button>
            <button className="hover:text-sept-green italic">5</button>
            <button className="hover:text-sept-green italic">
                <FaChevronRight />
            </button>
        </div>
    )
}