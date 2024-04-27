import React from "react";
import image1 from "../../assets/image/blog/lavazem.jpg";
function BlogSlider() {
  return (
    <div className="bg-white rounded-2xl py-8 shadow-xl my-10">
      <div className="flex justify-between px-5 md:px-10 items-center">
        <div className="text-red-500">خواندنی ها</div>
        <a href="blog.html">
          <div className="transition px-4 py-2 rounded-xl flex justify-center items-center text-red-500 hover:text-red-600">
            مطالب بیشتر
            <img className="w-4" src="assets/image/arrow-left.png" alt="" />
          </div>
        </a>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 px-10 gap-5">
        <a
          href="blog(single).html"
          className="shadow-lg rounded-3xl p-4 hover:text-red-600 transition"
        >
          <div>
            <img
              className="rounded-xl hover:scale-105 transition"
              src={image1}
              alt=""
            />
          </div>
          <div className="text-sm opacity-90 py-5">
            لوازم آشپزی مورد نیاز من.
          </div>
        </a>
        <a
          href="blog(single).html"
          className="shadow-lg rounded-3xl p-4 hover:text-red-600 transition"
        >
          <div>
            <img
              className="rounded-xl hover:scale-105 transition"
              src="assets/image/blog/bag.jpg"
              alt=""
            />
          </div>
          <div className="text-sm opacity-90 py-5">
            چه چیزهایی با خودم نیازه ببرم کوه؟
          </div>
        </a>
        <a
          href="blog(single).html"
          className="shadow-lg rounded-3xl p-4 hover:text-red-600 transition"
        >
          <div>
            <img
              className="rounded-xl hover:scale-105 transition"
              src="assets/image/blog/car.jpg"
              alt=""
            />
          </div>
          <div className="text-sm opacity-90 py-5">
            چرا نباید در هوای بارانی در فصل زمستان و بهار آفرود بریم؟
          </div>
        </a>
        <a
          href="blog(single).html"
          className="shadow-lg rounded-3xl p-4 hover:text-red-600 transition"
        >
          <div>
            <img
              className="rounded-xl hover:scale-105 transition"
              src="assets/image/blog/chador.jpg"
              alt=""
            />
          </div>
          <div className="text-sm opacity-90 py-5">چادر ضد آب یا پارچه ای؟</div>
        </a>
      </div>
    </div>
  );
}

export default BlogSlider;
