// ColorFilter.js
import React, { useContext } from "react";
import { ShopContext } from "../../context/ShopContext ";

export default function ColorFilter() {
  const { colors, selectedColors, handleColorSelect } = useContext(ShopContext);

  return (
    <div>
      {colors.map((color, index) => (
        <div
          key={index}
          className={`flex items-center rounded-lg opacity-80 bg-${color.toLowerCase()} text-white`}
        >
          <input
            id={`checkbox-color-${index}`}
            type="checkbox"
            defaultValue=""
            className="w-4 h-4 bg-gray-100 border-gray-300 mr-3"
            onChange={() => handleColorSelect(color)}
            checked={selectedColors.includes(color)}
          />
          <label
            htmlFor={`checkbox-color-${index}`}
            className="w-full text-xs rounded pr-1 py-2"
          >
            {color}
          </label>
        </div>
      ))}
    </div>
  );
}
