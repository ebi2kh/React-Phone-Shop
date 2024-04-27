import React, { createContext, useState } from "react";

export const CartContext = createContext();
export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  // const addToCart = (product) => {
  //   setCart((currentCart) => [...currentCart, product]);
  // };
  const addToCart = (product) => {
    setCart((currentCart) => {
      // Check if the product already exists in the cart
      const existingProductIndex = currentCart.findIndex(
        (item) => item.id === product.id
      );
      if (existingProductIndex !== -1) {
        // If the product exists, update the quantity
        const newCart = [...currentCart];
        newCart[existingProductIndex] = {
          ...newCart[existingProductIndex],
          quantity: newCart[existingProductIndex].quantity + 1,
        };
        return newCart;
      } else {
        // If the product does not exist, add it with quantity 1
        return [...currentCart, { ...product, quantity: 1 }];
      }
    });
  };
  // const removeFromCart = (productId) => {
  //   setCart((currentCart) =>
  //     currentCart.filter((product) => product.id !== productId)
  //   );
  // };

  const removeFromCart = (productId) => {
    setCart((currentCart) => {
      const existingProductIndex = currentCart.findIndex(
        (item) => item.id === productId
      );
      if (existingProductIndex !== -1) {
        const newCart = [...currentCart];
        const existingProduct = newCart[existingProductIndex];
        if (existingProduct.quantity > 1) {
          // Decrease the quantity
          newCart[existingProductIndex] = {
            ...existingProduct,
            quantity: existingProduct.quantity - 1,
          };
        } else {
          // Remove the product from the cart if quantity is 1
          newCart.splice(existingProductIndex, 1);
        }
        return newCart;
      }
      return currentCart; // Return the cart unchanged if product is not found
    });
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}
