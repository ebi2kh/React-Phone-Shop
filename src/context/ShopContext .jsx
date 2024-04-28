import React, { createContext, useState, useEffect } from "react";
import data from "../data";
export const ShopContext = createContext();

export function ShopProvider({ children }) {
  // Assuming your products data is stored in a state variable
  // const [products, setProducts] = useState(data);
  const [products, setProducts] = useState(
    data.map((product) => ({
      ...product,
      discount:
        product.id % 2 === 0
          ? Math.floor(Math.random() * (50 - 10 + 1) + 10)
          : 0,
      discountedPrice:
        product.id % 2 === 0
          ? product.price *
            (1 - Math.floor(Math.random() * (50 - 10 + 1) + 10) / 100)
          : product.price,
    }))
  );
  // Get unique brands and colors
  const brands = [...new Set(products.map((product) => product.brand))];
  const colors = [...new Set(products.flatMap((product) => product.color))];

  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [sortOption, setSortOption] = useState(null);

  // Filter products based on selected brands and colors
  const [displayedProducts, setDisplayedProducts] = useState([]);

  useEffect(() => {
    let sortedProducts = [...products];
    switch (sortOption) {
      case "محبوب ترین":
        sortedProducts.sort((a, b) => b.favorite - a.favorite);
        break;
      case "پرفروش ترین":
        sortedProducts.sort((a, b) => b.buyNumber - a.buyNumber);
        break;
      case "ارزان ترین":
        sortedProducts.sort((a, b) => a.price - b.price);
        break;
      case "گران ترین":
        sortedProducts.sort((a, b) => b.price - a.price);
        break;
      case "جدیدترین":
        sortedProducts.sort((a, b) => b.date - a.date);
        break;
      case "پربازدیدترین":
        sortedProducts.sort((a, b) => b.view - a.view);
        break;
      default:
        break;
    }

    setDisplayedProducts(
      sortedProducts.filter(
        (product) =>
          (selectedBrands.length > 0
            ? selectedBrands.includes(product.brand)
            : true) &&
          (selectedColors.length > 0
            ? product.color.some((color) => selectedColors.includes(color))
            : true)
      )
    );
  }, [selectedBrands, selectedColors, sortOption, products]);

  const handleBrandSelect = (brand) => {
    if (selectedBrands.includes(brand)) {
      setSelectedBrands(selectedBrands.filter((b) => b !== brand));
    } else {
      setSelectedBrands([...selectedBrands, brand]);
    }
  };

  const handleColorSelect = (color) => {
    if (selectedColors.includes(color)) {
      setSelectedColors(selectedColors.filter((c) => c !== color));
    } else {
      setSelectedColors([...selectedColors, color]);
    }
  };

  return (
    <ShopContext.Provider
      value={{
        products,
        brands,
        colors,
        selectedBrands,
        selectedColors,
        handleBrandSelect,
        handleColorSelect,
        displayedProducts,
        sortOption,
        setSortOption,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
}
