import React, { useReducer, createContext } from "react";

export const ShopContext = createContext();

const initialState = {
  selectedBrands: [],
  selectedColors: [],
  sortOption: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "SET_BRAND":
      return { ...state, selectedBrands: action.payload };
    case "SET_COLOR":
      return { ...state, selectedColors: action.payload };
    case "SET_SORT_OPTION":
      return { ...state, sortOption: action.payload };
    default:
      throw new Error();
  }
}

export function ShopProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ShopContext.Provider value={{ state, dispatch }}>
      {children}
    </ShopContext.Provider>
  );
}
