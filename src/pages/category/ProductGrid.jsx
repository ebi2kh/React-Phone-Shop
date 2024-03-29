import React, { useContext } from "react";
import { ShopContext } from "../../context/ShopContext ";

export default function ProductGrid() {
  const { displayedProducts } = useContext(ShopContext);

  return (
    <div>
      {displayedProducts.map((product, index) => (
        <div key={index} className="flex flex-col w-full">
          <span className="text-xs sm:text-sm opacity-90 mb-5">
            <div className="leading-7 h-auto">{product.name}</div>
          </span>
          <div className="flex justify-end mb-2 text-sm opacity-80 pl-3 md:pl-0">
            <div>{product.price}</div>
            <div>تومان</div>
          </div>
        </div>
      ))}
    </div>
  );
}
