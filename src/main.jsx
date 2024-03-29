// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App'
// import './index.css'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import { BlogContextProvider } from "./context/BlogContext ";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BlogSingle from "./pages/blog/BlogSingle";
import AboutUs from "./pages/about/AboutUs";
import SingleProduct from "./pages/category/SingleProduct";
import { ShopContext, ShopProvider } from "./context/ShopContext ";
import { CartContext, CartProvider } from "./context/CartContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <RouterProvider router={router} /> */}
    <BrowserRouter>
      <CartProvider>
        <BlogContextProvider>
          <ShopProvider>
            <Routes>
              <Route path="/" element={<App />} />
              <Route path="/rent" element={<AboutUs />} />
              <Route path="/post/:id" element={<BlogSingle />} />
              <Route path="/product/:id" element={<SingleProduct />} />
            </Routes>
          </ShopProvider>
        </BlogContextProvider>
      </CartProvider>
    </BrowserRouter>
  </React.StrictMode>
);
