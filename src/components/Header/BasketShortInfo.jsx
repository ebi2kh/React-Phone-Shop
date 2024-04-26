import React from "react";

function BasketShortInfo() {
  return (
    <span className="block relative">
      <a
        href="cart.html"
        className="flex items-center h-10 leading-10 px-3 cursor-pointer no-underline hover:no-underline duration-100 mx-1 transition rounded-xl hover:bg-red-100"
      >
        <img
          className="inline ml-1 w-5"
          src="assets/image/shopping-cart.png"
          alt=""
        />
        <span className="text-sm text-neutral-800 hover:text-neutral-700 opacity-95">
          سبد خرید
        </span>
        <span>
          <img
            className="w-4 mr-1"
            src="assets/image/chevron-down-login.png"
            alt=""
          />
        </span>
      </a>
      <div className="hidden bg-white rounded-2xl shadow-md first-letter:border-2 border-gray-50 text-sm absolute top-auto left-0 w-72 z-30 mt-1">
        <div className="bg-white rounded-2xl w-full relative z-10 py-2 px-2">
          <ul className="list-reset flex flex-col gap-y-2">
            <li className="relative">
              <a
                href="single-product.html"
                className="px-2 py-2 flex w-full items-start hover:bg-red-50 rounded-xl"
              >
                <span className="flex justify-center items-center opacity-90">
                  <div className="flex">
                    <img
                      className="w-14 ml-2 rounded-lg"
                      src="assets/image/product/bag.png"
                      alt=""
                    />
                    <div className="flex flex-col flex-wrap gap-y-1 justify-center">
                      <div className="opacity-80 w-full text-sm">
                        کوله پشتی مدل ایستاده
                      </div>
                      <div className="flex opacity-75 text-xs">
                        <div>قیمت:</div>
                        <div>700,000</div>
                        <div>تومان</div>
                      </div>
                    </div>
                    <span className="text-red-400 hover:text-red-500 bg-red-100 hover:bg-red-200 px-2 text-xl font-bold h-7 rounded-full cursor-pointer absolute left-2 top-5">
                      ×
                    </span>
                  </div>
                </span>
              </a>
            </li>
            <li className="relative">
              <a
                href="single-product.html"
                className="px-2 py-2 flex w-full items-start hover:bg-red-50 rounded-xl"
              >
                <span className="flex justify-center items-center opacity-90">
                  <div className="flex">
                    <img
                      className="w-14 ml-2 rounded-lg"
                      src="assets/image/product/bag.png"
                      alt=""
                    />
                    <div className="flex flex-col flex-wrap gap-y-1 justify-center">
                      <div className="opacity-80 w-full text-sm">
                        کوله پشتی مدل ایستاده
                      </div>
                      <div className="flex opacity-75 text-xs">
                        <div>قیمت:</div>
                        <div>700,000</div>
                        <div>تومان</div>
                      </div>
                    </div>
                    <span className="text-red-400 hover:text-red-500 bg-red-100 hover:bg-red-200 px-2 text-xl font-bold h-7 rounded-full cursor-pointer absolute left-2 top-5">
                      ×
                    </span>
                  </div>
                </span>
              </a>
            </li>
            <li className="relative">
              <a
                href="checkout.html"
                className="px-2 py-2 flex w-full items-start justify-center"
              >
                <span className="flex justify-center items-center opacity-90">
                  <button className="px-7 py-2 text-center text-white bg-red-500 align-middle border-0 rounded-lg shadow-md text-xs">
                    تسویه حساب
                  </button>
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </span>
  );
}

export default BasketShortInfo;
