import React, { createContext, useState } from "react";

export const CartContext = createContext();
export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  // const addToCart = (product) => {
  //   setCart((currentCart) => [...currentCart, product]);
  // };
  // const addToCart = (product) => {
  //   setCart((currentCart) => {
  //     // Check if the product already exists in the cart
  //     const existingProductIndex = currentCart.findIndex(
  //       (item) => item.id === product.id
  //     );
  //     if (existingProductIndex !== -1) {
  //       // If the product exists, update the quantity
  //       const newCart = [...currentCart];
  //       newCart[existingProductIndex] = {
  //         ...newCart[existingProductIndex],
  //         quantity: newCart[existingProductIndex].quantity + 1,
  //       };
  //       return newCart;
  //     } else {
  //       // If the product does not exist, add it with quantity 1
  //       return [...currentCart, { ...product, quantity: 1 }];
  //     }
  //   });
  // };

  const addToCart = (product, quantity) => {
    setCart((currentCart) => {
      const existingProductIndex = currentCart.findIndex(
        (item) => item.id === product.id
      );
      if (existingProductIndex !== -1) {
        const newCart = [...currentCart];
        newCart[existingProductIndex] = {
          ...newCart[existingProductIndex],
          quantity: newCart[existingProductIndex].quantity + quantity,
        };
        return newCart;
      } else {
        return [...currentCart, { ...product, quantity }];
      }
    });
  };
  // const removeFromCart = (productId) => {
  //   setCart((currentCart) =>
  //     currentCart.filter((product) => product.id !== productId)
  //   );
  // };

  // const removeFromCart = (productId) => {
  //   setCart((currentCart) => {
  //     const existingProductIndex = currentCart.findIndex(
  //       (item) => item.id === productId
  //     );
  //     if (existingProductIndex !== -1) {
  //       const newCart = [...currentCart];
  //       const existingProduct = newCart[existingProductIndex];
  //       if (existingProduct.quantity > 1) {
  //         // Decrease the quantity
  //         newCart[existingProductIndex] = {
  //           ...existingProduct,
  //           quantity: existingProduct.quantity - 1,
  //         };
  //       } else {
  //         // Remove the product from the cart if quantity is 1
  //         newCart.splice(existingProductIndex, 1);
  //       }
  //       return newCart;
  //     }
  //     return currentCart; // Return the cart unchanged if product is not found
  //   });
  // };

  const removeFromCart = (productId) => {
    setCart((currentCart) => {
      const existingProductIndex = currentCart.findIndex(
        (item) => item.id === productId
      );
      if (existingProductIndex !== -1) {
        const newCart = [...currentCart];
        const product = newCart[existingProductIndex];
        if (product.quantity > 1) {
          // Decrease the quantity by 1
          newCart[existingProductIndex] = {
            ...product,
            quantity: product.quantity - 1,
          };
        } else {
          // Remove the product entirely if quantity is 1
          newCart.splice(existingProductIndex, 1);
        }
        return newCart;
      }
      return currentCart; // Return the cart unchanged if the product is not found
    });
  };

  //
  const increaseQuantity = (productId) => {
    setCart((currentCart) => {
      return currentCart.map((item) => {
        if (item.id === productId) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
    });
  };

  const decreaseQuantity = (productId) => {
    setCart((currentCart) => {
      return currentCart.map((item) => {
        if (item.id === productId && item.quantity > 1) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      });
    });
  };
  // /

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        decreaseQuantity,
        increaseQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
