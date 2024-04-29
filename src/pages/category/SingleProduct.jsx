import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../../context/ShopContext ";
import { CartContext } from "../../context/CartContext";
import { Route, Link } from "react-router-dom";
import d from "../../assets/image/services/cash-on-delivery.svg";
import d1 from "../../assets/image/services/days-return.svg";
import d2 from "../../assets/image/services/express-delivery.svg";
import d3 from "../../assets/image/services/original-products.svg";

import ProductSlider from "../../components/slides/ProductSlider";
function SingleProduct() {
  const { id } = useParams();
  const { products } = useContext(ShopContext);
  const { addToCart, cart } = useContext(CartContext);
  const product = products.find((product) => product.id === Number(id));

  // /////////
  const [quantity, setQuantity] = useState(1);

  const handleIncrease = () => {
    if (quantity < product.number) {
      setQuantity((prevQuantity) => prevQuantity + 1);
    }
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };
  // ////////
  const [isAdded, setIsAdded] = useState(false);

  // //////
  const handleAddToCart = () => {
    addToCart(product, quantity); // Pass the quantity along with the product

    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 5000); // Optional: hide message after 3 seconds
  };
  // /////
  return (
    <div className="max-w-[1440px] mx-auto px-3">
      <div className="flex gap-x-2 px-10 mt-5 md:mt-10">
        <div>
          <Link
            to={"/"}
            className="hover:text-red-500 transition text-sm opacity-70"
          >
            خانه
          </Link>
        </div>
        <div className="opacity-70">/</div>

        <div>
          <Link
            to={"/category"}
            className="hover:text-red-500 transition text-sm opacity-70"
          >
            موبایل
          </Link>
        </div>
        <div className="opacity-70">/</div>
        <div>
          <Link
            to={`/product/${product.id}`}
            className="hover:text-red-500 transition text-sm opacity-70"
          >
            {product.name}
          </Link>
        </div>
      </div>
      <div className="bg-white shadow-xl my-5 md:my-10 rounded-xl md:rounded-2xl p-3 md:p-5">
        <div className="p-3 w-11/12 mx-auto rounded-2xl">
          <div className="lg:flex">
            <div className="w-full lg:w-1/3">
              <div>
                <span className="flex items-center pr-20 pb-2">
                  <svg
                    onclick="showAlertAddToFavorit()"
                    className="h-7 w-7 text-red-500 hover:text-red-600 fill-current transition cursor-pointer inline"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12.76 3.76a6 6 0 0 1 8.48 8.48l-8.53 8.54a1 1 0 0 1-1.42 0l-8.53-8.54a6 6 0 0 1 8.48-8.48l.76.75.76-.75zm7.07 7.07a4 4 0 1 0-5.66-5.66l-1.46 1.47a1 1 0 0 1-1.42 0L9.83 5.17a4 4 0 1 0-5.66 5.66L12 18.66l7.83-7.83z" />
                  </svg>
                </span>
              </div>
              <div>
                <div className="max-w-[300px] mx-auto">
                  <img
                    className="mySlides rounded-xl md:rounded-3xl"
                    src={product.image}
                    style={{ width: "100%" }}
                  />
                </div>
              </div>
            </div>
            <div className="w-full lg:w-2/3 mt-5 md:mt-0">
              <div className="opacity-80 text-lg font-semibold">
                گوشی موبایل {product.brand} مدل {product.name} تک سیم کارت ظرفیت{" "}
                {product.ROM} و رم {product.RAM} گیگابایت
              </div>
              {/* <div className="opacity-50 text-xs mt-2 mb-4">
                Apple iPhone 13 Pro Single SIM 1TB And 6GB RAM Mobile Phone
              </div> */}
              <div className="md:flex sm:pr-7">
                <div className="md:w-2/3">
                  <div className="flex items-center">
                    <div className="opacity-70 text-sm mb-1">رنگ بندی:</div>
                    <div className="flex flex-wrap">
                      <div className="flex items-center gap-x-2">
                        <div className="flex w-max">
                          <div className="inline-flex items-center">
                            <label
                              className="relative flex cursor-pointer items-center rounded-full p-3"
                              htmlFor="pink"
                            >
                              <input
                                id="pink"
                                name="color"
                                type="radio"
                                className="before:content[''] peer relative h-7 w-7 cursor-pointer appearance-none rounded-full border border-blue-gray-200 bg-pink-500 text-pink-500 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity hover:before:opacity-10"
                                defaultChecked=""
                              />
                              <div className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-pink-500 opacity-0 transition-opacity peer-checked:opacity-100">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-3.5 w-3.5"
                                  viewBox="0 0 16 16"
                                  fill="currentColor"
                                >
                                  <circle
                                    data-name="ellipse"
                                    cx={8}
                                    cy={8}
                                    r={8}
                                  />
                                </svg>
                              </div>
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="mt-4 mb-2 opacity-80 text-sm font-semibold">
                      ویژگی های محصول:
                    </div>
                    <div className="flex flex-col gap-y-2 text-xs">
                      <div className=" flex items-center">
                        <h3 className="opacity-60 ml-1">پردازنده:</h3>
                        <div className="opacity-80">
                          <div className="text-right">{product.CPU}</div>
                        </div>
                      </div>
                      <div className=" flex items-center">
                        <h3 className="opacity-70 ml-1">سیستم عامل:</h3>
                        <div className="opacity-80">
                          <div className="text-right">{product.OS}</div>
                        </div>
                      </div>

                      <div className=" flex items-center">
                        <h3 className="opacity-70 ml-1">دوربین عقب:</h3>
                        <div className="opacity-80 ">
                          <div className="text-right">
                            {product.camera_back}
                          </div>
                        </div>
                      </div>
                      <div className=" flex items-center">
                        <h3 className="opacity-70 ml-1">دوربین جلو:</h3>
                        <div className="opacity-80">
                          <div className="text-right">
                            {product.camera_front}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="md:w-2/5 mt-5 md:mt-0">
                  <div className="pb-5 rounded-2xl shadow-xl border">
                    <div className="flex justify-between px-3 py-5">
                      <div className="text-right opacity-80 text-sm flex flex-col gap-y-6">
                        <div>گارانتی:</div>
                        <div>موجود در انبار:</div>
                        <div>قیمت:</div>
                        <div>تعداد:</div>
                      </div>
                      <div className="text-left opacity-70 text-sm flex flex-col gap-y-6">
                        <div>6 ماهه تمام</div>
                        <div>{product.number} عدد</div>
                        <div className="flex text-red-500">
                          <div>{product.price.toLocaleString()}</div>
                          <div>تومان </div>
                        </div>
                        <div className="flex text-sm sm:text-sm items-center justify-center lg:justify-start">
                          <div className="flex items-center justify-center select-none">
                            <div className="quantity flex items-center">
                              <button
                                onClick={handleIncrease}
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
                                className="w-12 h-7 mx-2 text-center border focus:outline-none rounded-lg"
                                type="number"
                                min={1}
                                max={product.number}
                                step={1}
                                value={quantity}
                                defaultValue={1}
                                readOnly=""
                              />
                              <button
                                onClick={handleDecrease}
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
                          </div>
                        </div>
                      </div>
                    </div>
                    <span className="flex justify-center items-center opacity-90">
                      <button
                        // onClick={() => addToCart(product)}
                        onClick={handleAddToCart}
                        className="px-7 py-2 text-center text-white bg-red-500 align-middle border-0 rounded-lg shadow-md text-sm"
                      >
                        افزودن به سبد خرید
                      </button>
                      {isAdded && (
                        <div className="text-green-500 mt-2">
                          محصول به سبد خرید اضافه شد
                        </div>
                      )}
                      {/* <Link
                        to={`/cart`}
                        className="px-7 py-2 text-center text-white bg-red-500 align-middle border-0 rounded-lg shadow-md text-sm"
                      >
                        cart
                      </Link> */}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-around my-5">
            <div className="flex flex-col items-center justify-center">
              <div>
                <img src={d} alt="" />
              </div>
              <div className="opacity-70 text-xs">پرداخت در محل</div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div>
                <img src={d1} alt="" />
              </div>
              <div className="opacity-70 text-xs">قابل برگشت</div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div>
                <img src={d2} alt="" />
              </div>
              <div className="opacity-70 text-xs">ارسال سریع</div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div>
                <img src={d3} alt="" />
              </div>
              <div className="opacity-70 text-xs">ضمانت کالا</div>
            </div>
          </div>
          {/* TABS */}
          <div className="mx-auto">
            <div className="border-b border-gray-200 mb-4">
              <ul
                className="flex justify-center flex-wrap -mb-px text-center"
                id="myTab"
                data-tabs-toggle="#myTabContent"
                role="tablist"
              >
                <li className="mr-2" role="presentation">
                  <button
                    className="inline-block text-gray-500 hover:text-gray-600 hover:border-gray-300 rounded-t-lg py-4 px-4 text-sm font-medium text-center border-transparent border-b-2 active"
                    id="about-tab"
                    data-tabs-target="#about"
                    type="button"
                    role="tab"
                    aria-controls="about"
                    aria-selected="true"
                  >
                    درباره محصول
                  </button>
                </li>
                <li className="mr-2" role="presentation">
                  <button
                    className="inline-block text-gray-500 hover:text-gray-600 hover:border-gray-300 rounded-t-lg py-4 px-4 text-sm font-medium text-center border-transparent border-b-2"
                    id="test-tab"
                    data-tabs-target="#test"
                    type="button"
                    role="tab"
                    aria-controls="test"
                    aria-selected="false"
                  >
                    بررسی تخصصی
                  </button>
                </li>
                <li className="mr-2" role="presentation">
                  <button
                    className="inline-block text-gray-500 hover:text-gray-600 hover:border-gray-300 rounded-t-lg py-4 px-4 text-sm font-medium text-center border-transparent border-b-2"
                    id="details-tab"
                    data-tabs-target="#details"
                    type="button"
                    role="tab"
                    aria-controls="details"
                    aria-selected="false"
                  >
                    مشخصات
                  </button>
                </li>
                <li role="presentation">
                  <button
                    className="inline-block text-gray-500 hover:text-gray-600 hover:border-gray-300 rounded-t-lg py-4 px-4 text-sm font-medium text-center border-transparent border-b-2"
                    id="commentsBuy-tab"
                    data-tabs-target="#commentsBuy"
                    type="button"
                    role="tab"
                    aria-controls="commentsBuy"
                    aria-selected="false"
                  >
                    دیدگاه ها
                  </button>
                </li>
                <li role="presentation">
                  <button
                    className="inline-block text-gray-500 hover:text-gray-600 hover:border-gray-300 rounded-t-lg py-4 px-4 text-sm font-medium text-center border-transparent border-b-2"
                    id="comments-tab"
                    data-tabs-target="#comments"
                    type="button"
                    role="tab"
                    aria-controls="comments"
                    aria-selected="false"
                  >
                    پرسش ها
                  </button>
                </li>
              </ul>
            </div>
            <div id="myTabContent">
              <div
                className="bg-gray-50 p-4 rounded-xl"
                id="about"
                role="tabpanel"
                aria-labelledby="about-tab"
              >
                <span className="border-b-red-500 border-b">
                  معرفی کوتاه محصول
                </span>
                <p className="text-gray-500 text-sm leading-7 mt-3">
                  اپل همواره توانسته است گوشی‌های هوشمند قدرتمند و بسیار
                  باکیفیتی را روانه بازار کند و پرچمداران سری 13 هم توانستند با
                  بهره بردن از مشخصات فنی قدرتمند، نه‌تنها به نسبت نسل قبلی یعنی
                  خانواده iPhone12، بلکه به نسبت پرچمداران مدعی دیگر هم عملکرد
                  بسیار درخشانی داشته باشند. iPhone 13 Pro از لحاظ مشخصات فنی در
                  نظر گرفته شده چیزی کم از گل سرسبد این سری یعنی iPhone 13 Pro
                  Max ندارد. در نمای روبه‌رویی این گوشی به صفحه‌نمایش با ابعاد
                  6.1 اینچ و رزولوشن 2532x1170 از نوع Super Retina XDR OLED مجهز
                  شده است. صفحه‌نمایش بسیار باکیفیت که از جمله قابلیت‌های
                  قدرتمند آن، می‌توانیم به نرخ بروزرسانی 120 هرتز و البته حداکثر
                  روشنایی 1200 نیت (nits) اشاره کنیم. در بخش سنسور‌های دوربین هم
                  قرارگیری سه سنسور با رزولوشن 12 مگاپیکسل به ترتیب از نوع عریض،
                  تله‌فوتو و فوق عریض یا همان ultrawide هستیم که البته سنسور TOF
                  3D LiDAR هم با عملکردی مشابه با سنسورهای سنجش عمق و البته
                  بهتر، این گوشی را همراه می‌کنند. برای دوربین سلفی هم سنسور با
                  رزولوشن 12 مگاپیکسل در نظر گرفته شده است. در بخش فیلمبرداری هم
                  مثل همیشه این بار اما به لطف توانایی ضبط ویدیو با نهایت کیفیت
                  4K و سرعت 60 فریم در ثانیه برای سنسور عریض و سلفی، این گوشی
                  عملکرد بی‌نظیری را به شما ارائه می‌کند که کمتر پرچمداری
                  توانایی رقابت با آن را دارد.
                </p>
              </div>
            </div>
          </div>
          {/* SLIDER */}
          <ProductSlider />
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
