import React from "react";

import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";

interface PageNumberProps {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const PageNumber: React.FC<PageNumberProps> = ({
  totalItems,
  itemsPerPage,
  currentPage,
  onPageChange,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  const renderPageNumbers = () => {
    const pages = [];
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(
          <button
            key={i}
            onClick={() => handlePageChange(i)}
            className={`px-2 py-1 mx-1 ${
              i === currentPage
                ? "text-sept-green font-bold text-xl"
                : "text-sept-white hover:text-sept-green"
            }`}
          >
            {i}
          </button>
        );
      }
    } else {
      pages.push(
        <button
          key={1}
          onClick={() => handlePageChange(1)}
          className={`px-2 py-1 mx-1 ${
            currentPage === 1
              ? "text-sept-green font-bold text-xl"
              : "text-sept-white hover:text-sept-green"
          }`}
        >
          1
        </button>
      );

      if (currentPage > 3) {
        pages.push(
          <span key="ellipsis1" className="px-2 py-1 mx-1">
            ...
          </span>
        );
      }

      const startPage = Math.max(2, currentPage - 1);
      const endPage = Math.min(totalPages - 1, currentPage + 1);

      for (let i = startPage; i <= endPage; i++) {
        pages.push(
          <button
            key={i}
            onClick={() => handlePageChange(i)}
            className={`px-2 py-1 mx-1 ${
              i === currentPage
                ? "text-sept-green font-bold text-xl"
                : "text-sept-white hover:text-sept-green"
            }`}
          >
            {i}
          </button>
        );
      }

      if (currentPage < totalPages - 2) {
        pages.push(
          <span key="ellipsis2" className="px-2 py-1 mx-1">
            ...
          </span>
        );
      }

      pages.push(
        <button
          key={totalPages}
          onClick={() => handlePageChange(totalPages)}
          className={`px-2 py-1 mx-1 ${
            currentPage === totalPages
              ? "text-sept-green font-bold text-xl"
              : "text-sept-white hover:text-sept-green"
          }`}
        >
          {totalPages}
        </button>
      );
    }
    return pages;
  };

  return (
    <div className="flex justify-center mt-4 z-30">
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-3 py-1 mx-1  bg-sept-gray/20 text-sept-white hover:text-sept-green text-2xl font-bold"
      >
        <FaChevronLeft />
      </button>
      {renderPageNumbers()}
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-3 py-1 mx-1 bg-sept-gray/20 text-sept-white hover:text-sept-green text-2xl font-bold"
      >
        <FaChevronRight />
      </button>
    </div>
  );
};

export default PageNumber;
