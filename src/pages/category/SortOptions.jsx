import React, { useContext } from "react";
import { ShopContext } from "./ShopContext";

export default function SortOptions() {
  const { state, dispatch } = useContext(ShopContext);

  const sortOptions = [
    "محبوب ترین",
    "پرفروش ترین",
    "ارزان ترین",
    "گران ترین",
    "جدیدترین",
    "پربازدیدترین",
  ];

  const handleSortOptionSelect = (option) => {
    dispatch({ type: "SET_SORT_OPTION", payload: option });
  };

  return (
    <div>
      {sortOptions.map((option, index) => (
        <div
          key={index}
          className="opacity-70 text-xs hover:text-red-500 transition cursor-pointer text-red-600"
          onClick={() => handleSortOptionSelect(option)}
        >
          {option}
        </div>
      ))}
    </div>
  );
}
