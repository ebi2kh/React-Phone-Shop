import React, { useContext } from "react";
import { ShopContext } from "./ShopContext";

export default function ProductGrid({ products }) {
  const { state } = useContext(ShopContext);

  // Filter and sort products
  const displayedProducts = products
    .filter(
      (product) =>
        (state.selectedBrands.length > 0
          ? state.selectedBrands.includes(product.brand)
          : true) &&
        (state.selectedColors.length > 0
          ? product.color.some((color) => state.selectedColors.includes(color))
          : true)
    )
    .sort((a, b) => {
      switch (sortOption) {
        case "محبوب ترین":
          return b.favorite - a.favorite;
        case "پرفروش ترین":
          return b.buyNumber - a.buyNumber;
        case "ارزان ترین":
          return a.price - b.price;
        case "گران ترین":
          return b.price - a.price;
        case "جدیدترین":
          return b.date - a.date;
        case "پربازدیدترین":
          return b.view - a.view;
        default:
          return 0;
      }
    });

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
