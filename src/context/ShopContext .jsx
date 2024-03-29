import React, { createContext, useState, useEffect } from "react";
import data from "../data";
export const ShopContext = createContext();

export function ShopProvider({ children }) {
  // Assuming your products data is stored in a state variable
  const [products, setProducts] = useState(data);

  // Get unique brands
  const brands = [...new Set(products.map((product) => product.brand))];

  const [selectedBrands, setSelectedBrands] = useState([]);

  // Filter products based on selected brands
  const [displayedProducts, setDisplayedProducts] = useState([]);

  useEffect(() => {
    setDisplayedProducts(
      selectedBrands.length > 0
        ? products.filter((product) => selectedBrands.includes(product.brand))
        : products
    );
  }, [selectedBrands, products]);

  const handleBrandSelect = (brand) => {
    if (selectedBrands.includes(brand)) {
      setSelectedBrands(selectedBrands.filter((b) => b !== brand));
    } else {
      setSelectedBrands([...selectedBrands, brand]);
    }
  };

  return (
    <ShopContext.Provider
      value={{ brands, selectedBrands, handleBrandSelect, displayedProducts }}
    >
      {children}
    </ShopContext.Provider>
  );
}
