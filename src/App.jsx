import "./assets/css/output.css";
import "./assets/css/font.css";
import "./assets/css/owl.carousel.min.css";
import "./assets/css/owl.theme.default.min.css";
import "./assets/css/swiper-bundle.min.css";
import "./assets/css/style.product.slider.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Footer from "./components/Footer";
import Blog from "./pages/Blog";
import SearchButton from "./components/Header/SearchButton";

import Navbar from "./components/Header/Navbar";
import React, { useState } from "react";
import Payment from "./pages/payment/Payment";
import AboutUs from "./pages/about/AboutUs";
import BlogSingle from "./pages/blog/BlogSingle";
import BlogAll from "./pages/blog/BlogAll";
import Cart from "./pages/cart/Cart";
import Category from "./pages/category/Category";
import { Route } from "react-router-dom";
import Shop from "./pages/category/Shop";
import DropdownMenu from "./components/Header/DropdownMenu";
import Login from "./pages/user/Login";
import Checkout from "./pages/checkout/Checkout";
import SingleProduct from "./pages/category/SingleProduct";
export default function App() {
  return (
    <>
      {/* <Navbar /> */}
      {/* <SearchButton /> */}
      {/* <RouterProvider router={router} /> */}
      {/* <Cart /> */}
      {/* <Blog /> */}
      <DropdownMenu />
      <SingleProduct />
      {/* <BlogAll /> */}
      {/* <Category /> */}
      {/* <Checkout /> */}
      {/* <Login /> */}
      {/* <Shop /> */}
      <Footer />
    </>
  );
}
