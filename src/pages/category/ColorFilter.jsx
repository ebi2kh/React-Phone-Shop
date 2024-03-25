import React, { useContext } from "react";
import { ShopContext } from "./ShopContext";

export default function ColorFilter() {
  const { state, dispatch } = useContext(ShopContext);

  // Assuming your products data is stored in a state variable
  const [products, setProducts] = useState(data);

  // Get unique colors
  const colors = [...new Set(products.flatMap((product) => product.color))];

  const handleColorSelect = (color) => {
    if (state.selectedColors.includes(color)) {
      dispatch({
        type: "SET_COLOR",
        payload: state.selectedColors.filter((c) => c !== color),
      });
    } else {
      dispatch({
        type: "SET_COLOR",
        payload: [...state.selectedColors, color],
      });
    }
  };

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
