import React from "react";
import image1 from "../../assets/image/goodCategory/mobile.webp";
function BrandSlider() {
  return (
    <div className="bg-white rounded-2xl py-6 shadow-xl my-10">
      <div className="flex justify-between px-5 pb-5 md:px-10 items-center">
        <div className="border-b-2 border-red-500 pb-1">
          دسته بندی های محبوب
        </div>
        <a href="search.html">
          <div className="transition px-4 py-2 rounded-xl flex justify-center items-center text-red-500 hover:text-red-600">
            دیدن همه
            <img className="w-4" src="assets/image/arrow-left.png" alt="" />
          </div>
        </a>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-x-4 gap-y-4 md:gap-x-8 2xl:gap-x-10 px-3 md:px-8 lg:px-28">
        <a
          href="search.html"
          className="flex justify-center items-center flex-col gap-y-3 hover:scale-105 transition"
        >
          <img src={image1} alt="" />
          <div className="text-sm opacity-90">موبایل</div>
        </a>
        <a
          href="search.html"
          className="flex justify-center items-center flex-col gap-y-3 hover:scale-105 transition"
        >
          <img src="assets/image/goodCategory/biutiful.webp" alt="" />
          <div className="text-sm opacity-90">زیبایی</div>
        </a>
        <a
          href="search.html"
          className="flex justify-center items-center flex-col gap-y-3 hover:scale-105 transition"
        >
          <img src="assets/image/goodCategory/book.webp" alt="" />
          <div className="text-sm opacity-90">کتاب و دفتر</div>
        </a>
        <a
          href="search.html"
          className="flex justify-center items-center flex-col gap-y-3 hover:scale-105 transition"
        >
          <img src="assets/image/goodCategory/digital.webp" alt="" />
          <div className="text-sm opacity-90">کالای دیجیتال</div>
        </a>
        <a
          href="search.html"
          className="flex justify-center items-center flex-col gap-y-3 hover:scale-105 transition"
        >
          <img src="assets/image/goodCategory/market.webp" alt="" />
          <div className="text-sm opacity-90">سوپر مارکت</div>
        </a>
        <a
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
        </a>
      </div>
    </div>
  );
}

export default BrandSlider;
