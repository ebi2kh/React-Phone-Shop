import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import product1 from "../../assets/image/suggestedProduct/9.webp";
import product2 from "../../assets/image/suggestedProduct/10.webp";
import product3 from "../../assets/image/productSlider/1.jpg";

// import product3 from "../assets/image/heroSlider/3.gif";
function ProductSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <div className="bg-white rounded-2xl pt-10 shadow-xl my-10">
        {/* TOP SLIDER */}
        <div className="flex justify-between px-5 md:px-10 items-center">
          <div className="border-b-2 border-red-500 pb-1">پرتخفیف ترین ها</div>
          <a href="search.html">
            <div className="transition px-4 py-2 rounded-xl flex justify-center items-center text-red-500 hover:text-red-600">
              دیدن همه
              <img className="w-4" src="assets/image/arrow-left.png" alt="" />
            </div>
          </a>
        </div>
        {/* SLIDER */}
        <div className="containerPSlider swiper">
          <div className="slide-container1 px-2 swiper-initialized swiper-horizontal swiper-pointer-events swiper-rtl swiper-backface-hidden">
            <div
              className="card-wrapper swiper-wrapper py-4"
              id="swiper-wrapper-eb1198caf393b37a"
              aria-live="polite"
              style={{
                transform: "translate3d(0px, 0px, 0px)",
                transitionDuration: "0ms",
              }}
            >
              <a
                href="single-product.html"
                className="card swiper-slide my-2 p-2 md:p-3 swiper-slide-active"
                role="group"
                aria-label="1 / 6"
                style={{ width: 214, marginLeft: 16 }}
              >
                <div className="image-box mb-6 ">
                  <div>
                    <img
                      className="hover:scale-105 transition rounded-3xl w-full mx-auto"
                      src={product3}
                      alt=""
                    />
                  </div>
                </div>
                <div className="space-y-3 text-center">
                  <span className="text-sm opacity-80 mb-2 h-8 md:h-10">
                    <div>گوشی شیائومی m11</div>
                  </span>
                  <div className="flex justify-center text-xs opacity-75">
                    <div className="line-through">1.350.000</div>
                    <div className="line-through">تومان</div>
                  </div>
                  <div className="flex justify-center mt-1 mb-2 text-sm">
                    <div>1.100.000</div>
                    <div>تومان</div>
                  </div>
                </div>
              </a>
              <a
                href="single-product.html"
                className="card swiper-slide my-2 p-2 md:p-3 swiper-slide-next"
                role="group"
                aria-label="2 / 6"
                style={{ width: 214, marginLeft: 16 }}
              >
                <div className="image-box mb-6 ">
                  <div>
                    <img
                      className="hover:scale-105 transition rounded-3xl w-full mx-auto"
                      src="assets/image/productSlider/2.jpg"
                      alt=""
                    />
                  </div>
                </div>
                <div className="space-y-3 text-center">
                  <span className="text-sm opacity-80 mb-2 h-8 md:h-10">
                    <div>اپل واچ مدل m32</div>
                  </span>
                  <div className="flex justify-center text-xs opacity-75">
                    <div className="line-through">1.350.000</div>
                    <div className="line-through">تومان</div>
                  </div>
                  <div className="flex justify-center mt-1 mb-2 text-sm">
                    <div>1.100.000</div>
                    <div>تومان</div>
                  </div>
                </div>
              </a>
              <a
                href="single-product.html"
                className="card swiper-slide my-2 p-2 md:p-3"
                role="group"
                aria-label="3 / 6"
                style={{ width: 214, marginLeft: 16 }}
              >
                <div className="image-box mb-6 ">
                  <div>
                    <img
                      className="hover:scale-105 transition rounded-3xl w-full mx-auto"
                      src="assets/image/productSlider/3.jpg"
                      alt=""
                    />
                  </div>
                </div>
                <div className="space-y-3 text-center">
                  <span className="text-sm opacity-80 mb-2 h-8 md:h-10">
                    <div>ریش تراش دایاک</div>
                  </span>
                  <div className="flex justify-center text-xs opacity-75">
                    <div className="line-through">1.350.000</div>
                    <div className="line-through">تومان</div>
                  </div>
                  <div className="flex justify-center mt-1 mb-2 text-sm">
                    <div>1.100.000</div>
                    <div>تومان</div>
                  </div>
                </div>
              </a>
              <a
                href="single-product.html"
                className="card swiper-slide my-2 p-2 md:p-3"
                role="group"
                aria-label="4 / 6"
                style={{ width: 214, marginLeft: 16 }}
              >
                <div className="image-box mb-6 ">
                  <div>
                    <img
                      className="hover:scale-105 transition rounded-3xl w-full mx-auto"
                      src="assets/image/productSlider/4.jpg"
                      alt=""
                    />
                  </div>
                </div>
                <div className="space-y-3 text-center">
                  <span className="text-sm opacity-80 mb-2 h-8 md:h-10">
                    <div>تلویزیون 40 اینچ</div>
                  </span>
                  <div className="flex justify-center text-xs opacity-75">
                    <div className="line-through">1.350.000</div>
                    <div className="line-through">تومان</div>
                  </div>
                  <div className="flex justify-center mt-1 mb-2 text-sm">
                    <div>1.100.000</div>
                    <div>تومان</div>
                  </div>
                </div>
              </a>
              <a
                href="single-product.html"
                className="card swiper-slide my-2 p-2 md:p-3"
                role="group"
                aria-label="5 / 6"
                style={{ width: 214, marginLeft: 16 }}
              >
                <div className="image-box mb-6 ">
                  <div>
                    <img
                      className="hover:scale-105 transition rounded-3xl w-full mx-auto"
                      src="assets/image/productSlider/5.jpg"
                      alt=""
                    />
                  </div>
                </div>
                <div className="space-y-3 text-center">
                  <span className="text-sm opacity-80 mb-2 h-8 md:h-10">
                    <div>کاپشن زمستانه</div>
                  </span>
                  <div className="flex justify-center text-xs opacity-75">
                    <div className="line-through">1.350.000</div>
                    <div className="line-through">تومان</div>
                  </div>
                  <div className="flex justify-center mt-1 mb-2 text-sm">
                    <div>1.100.000</div>
                    <div>تومان</div>
                  </div>
                </div>
              </a>
              <a
                href="single-product.html"
                className="card swiper-slide my-2 p-2 md:p-3"
                role="group"
                aria-label="6 / 6"
                style={{ width: 214, marginLeft: 16 }}
              >
                <div className="image-box mb-6 ">
                  <div>
                    <img
                      className="hover:scale-105 transition rounded-3xl w-full mx-auto"
                      src="assets/image/productSlider/6.jpg"
                      alt=""
                    />
                  </div>
                </div>
                <div className="space-y-3 text-center">
                  <span className="text-sm opacity-80 mb-2 h-8 md:h-10">
                    <div>هنذفری بلوتوثی شیائومی</div>
                  </span>
                  <div className="flex justify-center text-xs opacity-75">
                    <div className="line-through">1.350.000</div>
                    <div className="line-through">تومان</div>
                  </div>
                  <div className="flex justify-center mt-1 mb-2 text-sm">
                    <div>1.100.000</div>
                    <div>تومان</div>
                  </div>
                </div>
              </a>
            </div>
            <span
              className="swiper-notification"
              aria-live="assertive"
              aria-atomic="true"
            />
          </div>
          <div
            className="swiper-button-next swiper-navBtn swiper-button-disabled swiper-button-lock"
            tabIndex={0}
            role="button"
            aria-label="Next slide"
            aria-controls="swiper-wrapper-106b19d14d5cb13c6"
            aria-disabled="true"
          />
          <div
            className="swiper-button-prev swiper-navBtn swiper-button-disabled swiper-button-lock"
            tabIndex={0}
            role="button"
            aria-label="Previous slide"
            aria-controls="swiper-wrapper-106b19d14d5cb13c6"
            aria-disabled="true"
          />
        </div>
      </div>
    </>
  );
}

export default ProductSlider;
