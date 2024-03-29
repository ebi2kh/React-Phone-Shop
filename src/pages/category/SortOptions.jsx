import React, { useContext } from "react";

import { ShopContext } from "../../context/ShopContext ";
export default function SortOptions() {
  const { sortOption, setSortOption } = useContext(ShopContext);

  const sortOptions = [
    "محبوب ترین",
    "پرفروش ترین",
    "ارزان ترین",
    "گران ترین",
    "جدیدترین",
    "پربازدیدترین",
  ];

  return (
    <div>
      {sortOptions.map((option, index) => (
        <div
          key={index}
          className="opacity-70 text-xs hover:text-red-500 transition cursor-pointer text-red-600"
          onClick={() => setSortOption(option)}
        >
          {option}
        </div>
      ))}
    </div>
  );
}
