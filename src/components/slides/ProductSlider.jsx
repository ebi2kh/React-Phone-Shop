import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import data from "../../data";
import { Link } from "react-router-dom";
// import product3 from "../assets/image/heroSlider/3.gif";
function ProductSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const shuffledProducts = data.sort(() => 0.5 - Math.random());
  const selectedProducts = shuffledProducts.slice(0, 6);
  return (
    <>
      {/* <div className="bg-white rounded-2xl pt-10 shadow-xl my-10">
        {/* TOP SLIDER */}
      <div className="flex justify-between px-5 md:px-10 items-center">
        <div className="border-b-2 border-red-500 pb-1">جدیدترین محصولات</div>
        <a href="search.html">
          <Link
            to={"/category"}
            className="transition px-4 py-2 rounded-xl flex justify-center items-center text-red-500 hover:text-red-600"
          >
            دیدن همه
          </Link>
        </a>
      </div>
      {/* SLIDER */}
      <div className="containerPSlider swiper">
        <div className="slide-container1 ">
          <div
            className=" py-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 px-10 gap-5"
            style={{
              transform: "translate3d(0px, 0px, 0px)",
              transitionDuration: "5ms",
            }}
          >
            {selectedProducts.map((post) => {
              return (
                <Link
                  to={`/product/${post.id}`}
                  className="card swiper-slide my-2 p-2 md:p-3 swiper-slide-active"
                  role="group"
                  aria-label="1 / 6"
                  style={{ width: 214, marginLeft: 16 }}
                >
                  <div className="image-box mb-6 ">
                    <div>
                      <img
                        className="hover:scale-105 transition rounded-3xl w-full mx-auto"
                        src={post.image}
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="space-y-3 text-center">
                    <span className="text-sm opacity-80 mb-2 h-8 md:h-10">
                      <div>{post.name}</div>
                    </span>
                    <div className="flex justify-center text-xs opacity-75">
                      <div className="line-through">
                        {post.price.toLocaleString()}
                      </div>
                      <div className="line-through">تومان</div>
                    </div>
                    <div className="flex justify-center mt-1 mb-2 text-sm">
                      <div>
                        {(post.price - post.price * 0.2).toLocaleString()}
                      </div>
                      <div>تومان</div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductSlider;
