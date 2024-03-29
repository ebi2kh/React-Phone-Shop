import React from "react";

function Checkout() {
  return (
    <div className="max-w-[1440px] mx-auto px-3">
      <div className="bg-white shadow-xl my-5 lg:my-10 rounded-xl md:rounded-2xl p-3 md:p-5">
        <div className="flex flex-col md:flex-row gap-y-3 items-center gap-x-2 mb-7">
          <div className="text-sm opacity-80">کد تخفیف دارید؟ وارد کنید:</div>
          <div>
            <input
              className="border border-gray-400 outline-none focus:border-red-300 rounded-lg p-1"
              type="text"
            />
          </div>
          <div>
            <button className="bg-red-600 text-white px-3 py-1 rounded-lg shadow-md">
              تایید
            </button>
          </div>
        </div>
        <div>
          <div className="text-lg md:text-xl opacity-70 mb-3">
            جزئیات صورت حساب
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 px-5 md:px-20">
            <div className="mb-4">
              <label
                htmlFor="username"
                className="inline-block mb-2 ml-1 font-semibold text-xs text-slate-700"
              >
                نام تحویل گیرنده:
              </label>
              <input
                type="text"
                className="text-sm block w-full rounded-lg border border-gray-400 bg-white px-3 py-2 font-normal text-gray-700 outline-none focus:border-red-300"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="username"
                className="inline-block mb-2 ml-1 font-semibold text-xs text-slate-700"
              >
                شماره موبایل:
              </label>
              <input
                type="text"
                className="text-sm block w-full rounded-lg border border-gray-400 bg-white px-3 py-2 font-normal text-gray-700 outline-none focus:border-red-300"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="username"
                className="inline-block mb-2 ml-1 font-semibold text-xs text-slate-700"
              >
                کدپستی:
              </label>
              <input
                type="text"
                className="text-sm block w-full rounded-lg border border-gray-400 bg-white px-3 py-2 font-normal text-gray-700 outline-none focus:border-red-300"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="username"
                className="inline-block mb-2 ml-1 font-semibold text-xs text-slate-700"
              >
                آدرس:
              </label>
              <input
                type="text"
                className="text-sm block w-full rounded-lg border border-gray-400 bg-white px-3 py-2 font-normal text-gray-700 outline-none focus:border-red-300"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="mailTicket"
                className="inline-block mb-2 ml-1 font-semibold text-xs text-slate-700"
              >
                توضیحات اضافه:
              </label>
              <textarea
                cols={30}
                rows={5}
                className="text-sm block w-full rounded-lg border border-gray-400 bg-white px-3 py-2 font-normal text-gray-700 outline-none focus:border-red-300"
                defaultValue={""}
              />
            </div>
          </div>
        </div>
        <div>
          <div className="text-lg md:text-xl opacity-70 mb-3 mt-5">
            جزئیات محصولات
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 lg:px-16">
            <span className="card swiper-slide my-2 p-2 md:p-3 ">
              <div className="image-box mb-6 ">
                <a href="">
                  <img
                    className="hover:scale-105 transition rounded-3xl w-full mx-auto"
                    src="assets/image/productSlider/1.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="space-y-3 text-center">
                <span className="text-sm opacity-80 mb-2 h-8 md:h-10">
                  <a href="">گوشی شیائومی m11</a>
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
            </span>
            <span className="card swiper-slide my-2 p-2 md:p-3 ">
              <div className="image-box mb-6 ">
                <a href="">
                  <img
                    className="hover:scale-105 transition rounded-3xl w-full mx-auto"
                    src="assets/image/productSlider/2.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="space-y-3 text-center">
                <span className="text-sm opacity-80 mb-2 h-8 md:h-10">
                  <a href="">اپل واچ m32</a>
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
            </span>
            <span className="card swiper-slide my-2 p-2 md:p-3 ">
              <div className="image-box mb-6 ">
                <a href="">
                  <img
                    className="hover:scale-105 transition rounded-3xl w-full mx-auto"
                    src="assets/image/productSlider/3.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="space-y-3 text-center">
                <span className="text-sm opacity-80 mb-2 h-8 md:h-10">
                  <a href="">ریش تراش دیواید</a>
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
            </span>
            <span className="card swiper-slide my-2 p-2 md:p-3 ">
              <div className="image-box mb-6 ">
                <a href="">
                  <img
                    className="hover:scale-105 transition rounded-3xl w-full mx-auto"
                    src="assets/image/productSlider/4.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="space-y-3 text-center">
                <span className="text-sm opacity-80 mb-2 h-8 md:h-10">
                  <a href="">تلویزیون 40 اینچ</a>
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
            </span>
          </div>
        </div>
        <div className="border shadow-xl rounded-2xl mx-auto max-w-xl mt-7 flex flex-col gap-y-5 py-5 px-5 md:px-20">
          <div className="flex justify-between">
            <div>قیمت کل:</div>
            <div className="flex gap-x-1">
              <div>1,240,000</div>
              <div>تومان</div>
            </div>
          </div>
          <div className="flex justify-between">
            <div>حمل و نقل:</div>
            <div className="flex gap-x-1">
              <div>40,000</div>
              <div>تومان</div>
            </div>
          </div>
          <div className="flex justify-between">
            <div>سود شما از این خرید:</div>
            <div className="flex gap-x-1">
              <div>80,000</div>
              <div>تومان</div>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="text-red-600">مجموع نهایی:</div>
            <div className="flex gap-x-1">
              <div>1,200,000</div>
              <div>تومان</div>
            </div>
          </div>
        </div>
        <a
          href="#"
          className="flex justify-center items-center opacity-90 my-5"
        >
          <button className="px-7 py-2 text-center text-white bg-red-500 align-middle border-0 rounded-lg shadow-md text-sm">
            ثبت و پرداخت
          </button>
        </a>
      </div>
    </div>
  );
}

export default Checkout;