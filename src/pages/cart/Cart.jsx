import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
function Cart() {
  const { cart, addToCart, removeFromCart } = useContext(CartContext);
  console.log(cart);
  return (
    <div className="max-w-[1440px] mx-auto px-3">
      <div className="bg-white shadow-xl my-5 lg:my-10 rounded-xl md:rounded-2xl p-3 md:p-5">
        <div className="relative overflow-x-auto rounded-2xl border">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500">
            <thead className="hidden md:table-header-group text-xs text-gray-700 bg-gray-50">
              <tr>
                <th scope="col" className="px-16 py-3">
                  <span className="sr-only">تصویر</span>
                </th>
                <th scope="col" className="md:pr-6 py-3">
                  نام محصول
                </th>
                <th scope="col" className="pr-10 py-3">
                  تعداد
                </th>
                <th scope="col" className="px-6 py-3">
                  قیمت
                </th>
                <th scope="col" className="px-6 py-3">
                  دستورات
                </th>
              </tr>
            </thead>
            <tbody className="grid grid-cols-1 sm:grid-cols-2 md:contents gap-5">
              {cart.map((single) => {
                return (
                  <tr
                    key={single.id}
                    className="bg-white border-b hover:bg-gray-50 grid grid-cols-1 justify-items-center md:table-row"
                  >
                    <td className="p-4">
                      <img
                        src={single.image}
                        className="w-48 md:w-32 max-w-full max-h-full rounded-lg"
                        alt=""
                      />
                    </td>
                    <td className="md:pr-6 py-4 text-sm opacity-90 text-gray-900">
                      گوشی موبایل {single.brand} مدل {single.name} تک سیم کارت
                      ظرفیت {single.ROM} و رم {single.RAM} گیگابایت
                    </td>
                    <td className="px-6 py-4">
                      <div className="quantity flex items-center">
                        <button
                          className="quantity-nav quantity-button quantity-up inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200"
                          type="button"
                        >
                          <span className="sr-only">Quantity button</span>
                          <svg
                            className="w-3 h-3"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 18 18"
                          >
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 1v16M1 9h16"
                            />
                          </svg>
                        </button>
                        <input
                          className="w-12 h-8 mx-2 text-center border focus:outline-none rounded-lg"
                          type="number"
                          min={1}
                          step={1}
                          defaultValue={1}
                          readOnly=""
                        />
                        <button
                          className="quantity-nav quantity-button quantity-down inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 "
                          type="button"
                        >
                          <span className="sr-only">Quantity button</span>
                          <svg
                            className="w-3 h-3"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 18 2"
                          >
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M1 1h16"
                            />
                          </svg>
                        </button>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm opacity-90 text-gray-900">
                      {single.price} تومان
                    </td>
                    <td className="px-6 py-4">
                      <a
                        href="#"
                        className=" text-red-600"
                        onClick={() => {
                          removeFromCart(single.id);
                        }}
                      >
                        حذف
                      </a>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
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
          href="checkout.html"
          className="flex justify-center items-center opacity-90 my-5"
        >
          <Link
            to={`/checkout`}
            className="px-7 py-2 text-center text-white bg-red-500 align-middle border-0 rounded-lg shadow-md text-sm"
          >
            تایید و پرداخت
          </Link>
        </a>
      </div>
    </div>
  );
}

export default Cart;
