import React, { useContext } from "react";
import { ShopContext } from "../../context/ShopContext ";

export default function BrandFilter() {
  const { brands, selectedBrands, handleBrandSelect } = useContext(ShopContext);

  return (
    <div>
      {brands.map((brand, index) => (
        <div
          key={index}
          className="flex items-center rounded-lg hover:bg-gray-100 opacity-80"
        >
          <input
            id={`checkbox-brand-${index}`}
            type="checkbox"
            defaultValue=""
            className="w-4 h-4 bg-gray-100 border-gray-300 mr-3"
            onChange={() => handleBrandSelect(brand)}
            checked={selectedBrands.includes(brand)}
          />
          <label
            htmlFor={`checkbox-brand-${index}`}
            className="w-full text-xs text-gray-900 rounded pr-1 py-2"
          >
            {brand}
          </label>
        </div>
      ))}
    </div>
  );
}
