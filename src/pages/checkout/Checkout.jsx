import React, { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
function Checkout() {
  const { cart } = useContext(CartContext);
  // //////////validation for form////

  const [formData, setFormData] = useState({
    recipientName: "",
    mobileNumber: "",
    postalCode: "",
    address: "",
  });

  const [errors, setErrors] = useState({
    recipientName: "",
    mobileNumber: "",
    postalCode: "",
    address: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear errors on input change
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateInput = () => {
    let isValid = true;
    let newErrors = {
      recipientName: "",
      mobileNumber: "",
      postalCode: "",
      address: "",
    };

    if (!formData.recipientName.trim()) {
      newErrors.recipientName = "نام تحویل گیرنده نباید خالی باشد.";
      isValid = false;
    }
    if (!formData.mobileNumber.trim()) {
      newErrors.mobileNumber = "شماره موبایل نباید خالی باشد.";
      isValid = false;
    } else if (!/^\d+$/.test(formData.mobileNumber)) {
      newErrors.mobileNumber = "شماره موبایل باید فقط شامل اعداد باشد.";
      isValid = false;
    }
    if (!formData.postalCode.trim()) {
      newErrors.postalCode = "کدپستی نباید خالی باشد.";
      isValid = false;
    } else if (!/^\d+$/.test(formData.postalCode)) {
      newErrors.postalCode = "کدپستی باید فقط شامل اعداد باشد.";
      isValid = false;
    }
    if (!formData.address.trim()) {
      newErrors.address = "آدرس نباید خالی باشد.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateInput()) {
      console.log("Form data submitted:", formData);
      // Proceed with submitting the form data
    }
  };

  // ////////////////////////
  return (
    <div className="max-w-[1440px] mx-auto px-3">
      <div className="bg-white shadow-xl my-5 lg:my-10 rounded-xl md:rounded-2xl p-3 md:p-5">
        <form onSubmit={handleSubmit}>
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
                  htmlFor="recipientName"
                  className="inline-block mb-2 ml-1 font-semibold text-xs text-slate-700"
                >
                  نام تحویل گیرنده:
                </label>
                <input
                  type="text"
                  name="recipientName"
                  className="text-sm block w-full rounded-lg border border-gray-400 bg-white px-3 py-2 font-normal text-gray-700 outline-none focus:border-red-300"
                  value={formData.recipientName}
                  onChange={handleChange}
                />
                {errors.recipientName && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.recipientName}
                  </p>
                )}
              </div>
              <div className="mb-4">
                <label
                  htmlFor="mobileNumber"
                  className="inline-block mb-2 ml-1 font-semibold text-xs text-slate-700"
                >
                  شماره موبایل:
                </label>
                <input
                  type="text"
                  name="mobileNumber"
                  className="text-sm block w-full rounded-lg border border-gray-400 bg-white px-3 py-2 font-normal text-gray-700 outline-none focus:border-red-300"
                  value={formData.mobileNumber}
                  onChange={handleChange}
                />
                {errors.mobileNumber && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.mobileNumber}
                  </p>
                )}
              </div>
              <div className="mb-4">
                <label
                  htmlFor="postalCode"
                  className="inline-block mb-2 ml-1 font-semibold text-xs text-slate-700"
                >
                  کدپستی:
                </label>
                <input
                  type="text"
                  name="postalCode"
                  className="text-sm block w-full rounded-lg border border-gray-400 bg-white px-3 py-2 font-normal text-gray-700 outline-none focus:border-red-300"
                  value={formData.postalCode}
                  onChange={handleChange}
                />
                {errors.postalCode && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.postalCode}
                  </p>
                )}
              </div>
              <div className="mb-4">
                <label
                  htmlFor="address"
                  className="inline-block mb-2 ml-1 font-semibold text-xs text-slate-700"
                >
                  آدرس:
                </label>
                <input
                  type="text"
                  name="address"
                  className="text-sm block w-full rounded-lg border border-gray-400 bg-white px-3 py-2 font-normal text-gray-700 outline-none focus:border-red-300"
                  value={formData.address}
                  onChange={handleChange}
                />
                {errors.address && (
                  <p className="text-red-500 text-xs mt-1">{errors.address}</p>
                )}
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
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                ارسال
              </button>
            </div>
          </div>
        </form>
        <div>
          <div className="text-lg md:text-xl opacity-70 mb-3 mt-5">
            جزئیات محصولات
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 lg:px-16">
            {cart.map((single) => {
              return (
                <span className="card swiper-slide my-2 p-2 md:p-3 ">
                  <div className="image-box mb-6 ">
                    <a href="">
                      <img
                        className="hover:scale-105 transition rounded-3xl w-full mx-auto"
                        src={single.image}
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="space-y-3 text-center">
                    <span className="text-sm opacity-80 mb-2 h-8 md:h-10">
                      <a href="">
                        گوشی موبایل {single.brand} مدل {single.name} تک سیم کارت
                        ظرفیت {single.ROM} و رم {single.RAM} گیگابایت
                      </a>
                    </span>
                    <div className="flex justify-center text-xs opacity-75">
                      <div className="line-through">{single.price}</div>
                      <div className="line-through">تومان</div>
                    </div>
                    <div className="flex justify-center mt-1 mb-2 text-sm">
                      <div>1.100.000</div>
                      <div>تومان</div>
                    </div>
                  </div>
                </span>
              );
            })}
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
