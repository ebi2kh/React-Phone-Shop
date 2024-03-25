import React, { useContext } from "react";
import { ShopContext } from "./ShopContext";

export default function BrandFilter() {
  const { state, dispatch } = useContext(ShopContext);

  // Assuming your products data is stored in a state variable
  const [products, setProducts] = useState(data);

  // Get unique brands
  const brands = [...new Set(products.map((product) => product.brand))];

  const handleBrandSelect = (brand) => {
    if (state.selectedBrands.includes(brand)) {
      dispatch({
        type: "SET_BRAND",
        payload: state.selectedBrands.filter((b) => b !== brand),
      });
    } else {
      dispatch({
        type: "SET_BRAND",
        payload: [...state.selectedBrands, brand],
      });
    }
  };

  return (
    <div className="space-y-1">
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
