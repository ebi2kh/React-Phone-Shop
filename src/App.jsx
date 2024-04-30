import "./assets/css/output.css";
import "./assets/css/font.css";
import "./assets/css/owl.carousel.min.css";
import "./assets/css/owl.theme.default.min.css";
import "./assets/css/swiper-bundle.min.css";
import "./assets/css/style.product.slider.css";

import Footer from "./components/Footer";

import Navbar from "./components/Header/Navbar";

import AboutUs from "./pages/about/AboutUs";
import BlogSingle from "./pages/blog/BlogSingle";
import BlogAll from "./pages/blog/BlogAll";
import Cart from "./pages/cart/Cart";
import Category from "./pages/category/Category";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import DropdownMenu from "./components/Header/DropdownMenu";

import Checkout from "./pages/checkout/Checkout";
import { ShopContext, ShopProvider } from "./context/ShopContext ";
import { CartContext, CartProvider } from "./context/CartContext";
import { BlogContextProvider } from "./context/BlogContext ";
import SingleProduct from "./pages/category/SingleProduct";

import NotFound from "./pages/404/NotFound";
import HomePage from "./pages/homepage/HomePage";
import Faq from "./pages/faq/Faq";
import ScrollToTop from "./components/ScrollToTop";
import ConfirmBuy from "./components/Static/ConfirmBuy";
export default function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <CartProvider>
          <BlogContextProvider>
            <ShopProvider>
              <Navbar />
              <DropdownMenu />
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/blog" element={<BlogAll />} />
                <Route path="/category" element={<Category />} />
                <Route path="/faq" element={<Faq />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/confirm" element={<ConfirmBuy />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/post/:id" element={<BlogSingle />} />
                <Route path="/product/:id" element={<SingleProduct />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </ShopProvider>
          </BlogContextProvider>
        </CartProvider>
        <Footer />
      </BrowserRouter>
    </>
  );
}
