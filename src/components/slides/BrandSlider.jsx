import React from "react";
import left from "../../assets/image/arrow-left.png";
import honor from "../../assets/image/brands/honor.jpg";
import iphone from "../../assets/image/brands/iphone.png";
import nokia from "../../assets/image/brands/nokia.png";
import samsung from "../../assets/image/brands/samsung.png";
import xiami from "../../assets/image/brands/xiami.png";
import { Link } from "react-router-dom";
function BrandSlider() {
  return (
    <div className="bg-white rounded-2xl py-6 shadow-xl my-10">
      <div className="flex justify-between px-5 pb-5 md:px-10 items-center">
        <div className="border-b-2 border-red-500 pb-1">انواع برندها</div>
        <Link to={"/category"}>
          <div className="transition px-4 py-2 rounded-xl flex justify-center items-center text-red-500 hover:text-red-600">
            دیدن همه
            <img className="w-4" src={left} alt="" />
          </div>
        </Link>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-4 gap-y-4 md:gap-x-8 2xl:gap-x-10 px-3 md:px-8 lg:px-28">
        <Link
          to={"/category"}
          className="flex justify-center items-center flex-col gap-y-3 hover:scale-105 transition"
        >
          <img src={honor} alt="" />
          <div className="text-sm opacity-90">آنر</div>
        </Link>
        <Link
          to={"/category"}
          className="flex justify-center items-center flex-col gap-y-3
          hover:scale-105 transition"
        >
          <img src={iphone} alt="" />
          <div className="text-sm opacity-90">آیفون</div>
        </Link>
        <Link
          to={"/category"}
          className="flex justify-center items-center flex-col gap-y-3 hover:scale-105 transition"
        >
          <img src={nokia} alt="" />
          <div className="text-sm opacity-90">نوکیا</div>
        </Link>
        <Link
          to={"/category"}
          className="flex justify-center items-center flex-col gap-y-3 hover:scale-105 transition"
        >
          <img src={samsung} alt="" />
          <div className="text-sm opacity-90">سامسونگ</div>
        </Link>
        <Link
          to={"/category"}
          className="flex justify-center items-center flex-col gap-y-3 hover:scale-105 transition"
        >
          <img src={xiami} alt="" />
          <div className="text-sm opacity-90">شیايومی</div>
        </Link>
        {/* <a
          href="search.html"
          className="flex justify-center items-center flex-col gap-y-3 hover:scale-105 transition"
        >
          <img src="assets/image/goodCategory/mode.webp" alt="" />
          <div className="text-sm opacity-90">مد و پوشاک</div>
        </a>
        <a
          href="search.html"
          className="flex justify-center items-center flex-col gap-y-3 hover:scale-105 transition"
        >
          <img src="assets/image/goodCategory/tools.webp" alt="" />
          <div className="text-sm opacity-90">ابزارآلات</div>
        </a> */}
      </div>
    </div>
  );
}

export default BrandSlider;
