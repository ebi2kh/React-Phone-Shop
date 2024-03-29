import React, { useContext } from "react";
import { ShopContext } from "../../context/ShopContext ";
import { Route, Link } from "react-router-dom";

export default function ProductGrid() {
  const { displayedProducts } = useContext(ShopContext);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-5 px-1 rounded-2xl py-5">
      {displayedProducts.map((product, index) => (
        // <div key={index} className="flex flex-col w-full">
        //   <span className="text-xs sm:text-sm opacity-90 mb-5">
        //     <div className="leading-7 h-auto">{product.name}</div>
        //   </span>
        //   <div className="flex justify-end mb-2 text-sm opacity-80 pl-3 md:pl-0">
        //     <div>{product.price}</div>
        //     <div>تومان</div>
        //   </div>
        // </div>

        // /////////////
        <Link
          key={index}
          to={`/product/${product.id}`}
          className="my-2 py-2 md:p-3 border rounded-xl flex items-center sm:inline hover:shadow-lg transition"
        >
          <div className="image-box sm:mb-6">
            <div>
              <img
                className="hover:scale-105 transition rounded-md sm:rounded-3xl w-24 sm:w-full mx-auto"
                src={product.image}
                alt={product.name}
              />
            </div>
          </div>
          <div className="flex flex-col w-full">
            <span className="text-xs sm:text-sm opacity-90 mb-5">
              <div className="leading-7 h-auto">{product.name}</div>
            </span>
            <div className="flex justify-end mb-2 text-sm opacity-80 pl-3 md:pl-0">
              <div>{product.price}</div>
              <div>تومان</div>
            </div>
            <div className="flex justify-end text-xs opacity-75 pl-3 md:pl-0">
              <div className="line-through">1.350.000</div>
              <div className="line-through">تومان</div>
            </div>
          </div>
        </Link>

        // /////////////
      ))}
    </div>
  );
}
