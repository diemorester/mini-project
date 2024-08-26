import React, { useState } from 'react';

interface DropdownProps {
  categories: string[];
  defaultCategory?: string;
  onCategoryChange: (selectedCategory: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({
  categories,
  defaultCategory,
  onCategoryChange,
}) => {
  const [selectedCategory, setSelectedCategory] = useState(
    defaultCategory || 'Select Category',
  );
  const [isOpen, setIsOpen] = useState(false);

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
    setIsOpen(false);
    onCategoryChange(category);
  };

  return (
    <div className="relative w-full max-w-[28rem] mx-auto">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={
          'w-full p-2 border-b border-gray-300 bg-sept-black text-left focus:outline-none ' +
          (isOpen
            ? 'border-gray-500 text-gray-500'
            : 'border-gray-300 text-gray-300')
        }
      >
        {selectedCategory}
      </button>

      {isOpen && (
        <div className="absolute z-10 mt-2 w-full bg-sept-black border border-gray-300 rounded-md shadow-lg">
          {categories.map((category, index) => (
            <div
              key={index}
              onClick={() => handleCategoryClick(category)}
              className="p-2  hover:border-b cursor-pointer"
            >
              {category}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
