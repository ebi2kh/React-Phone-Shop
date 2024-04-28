import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../../context/ShopContext ";
import { CartContext } from "../../context/CartContext";
import { Route, Link } from "react-router-dom";
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

  // //////
  const handleAddToCart = () => {
    addToCart(product, quantity); // Pass the quantity along with the product
  };
  // /////
  console.log(cart);
  return (
    <div className="max-w-[1440px] mx-auto px-3">
      <div className="flex gap-x-2 px-10 mt-5 md:mt-10">
        <div>
          <a
            href=""
            className="hover:text-red-500 transition text-sm opacity-70"
          >
            خانه
          </a>
        </div>
        <div className="opacity-70">/</div>
        <div>
          <a
            href=""
            className="hover:text-red-500 transition text-sm opacity-70"
          >
            کالای دیجیتال
          </a>
        </div>
        <div className="opacity-70">/</div>
        <div>
          <a
            href=""
            className="hover:text-red-500 transition text-sm opacity-70"
          >
            موبایل
          </a>
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
                    // http://localhost:5173/product/src/assets/image/productSlider/1.jpg
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
                          <div>{product.price}</div>
                          <div>تومان</div>
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
                      <Link
                        to={`/cart`}
                        className="px-7 py-2 text-center text-white bg-red-500 align-middle border-0 rounded-lg shadow-md text-sm"
                      >
                        cart
                      </Link>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-around my-5">
            <div className="flex flex-col items-center justify-center">
              <div>
                <img src="assets/image/services/cash-on-delivery.svg" alt="" />
              </div>
              <div className="opacity-70 text-xs">پرداخت در محل</div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div>
                <img src="assets/image/services/days-return.svg" alt="" />
              </div>
              <div className="opacity-70 text-xs">قابل برگشت</div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div>
                <img src="assets/image/services/express-delivery.svg" alt="" />
              </div>
              <div className="opacity-70 text-xs">ارسال سریع</div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div>
                <img src="assets/image/services/original-products.svg" alt="" />
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
              <div
                className="bg-gray-50 p-4 rounded-xl hidden"
                id="test"
                role="tabpanel"
                aria-labelledby="test-tab"
              >
                <div className="flex flex-col items-start gap-y-4">
                  <span className="border-b-red-500 border-b">
                    بررسی تخصصی محصول
                  </span>
                  <span className="border-b-red-500 border-b text-sm">
                    طراحی کاربر پسند
                  </span>
                </div>
                <div className="md:flex gap-3">
                  <p className="text-gray-500 text-sm leading-7 mt-3">
                    آیفون SE 2020 به عنوان جدید‌ترین گوشی هوشمند مقرون ‌به ‌صرفه
                    این شرکت معرفی شده بود که در قسمت‌های کناری برخلاف پرچمداران
                    خانواده آیفون 11 که فریمی منحنی شکل داشتند، فریم تخت داشت.
                    این طراحی یادآور طراحی‌های قدیمی‌ این شرکت بود و حس نوستالژی
                    را به کاربر منتقل می‌کرد. برای اولین بار، از این طراحی در
                    گوشی‌های هوشمند خانواده آیفون 12 نیز استفاده شد که استقبال
                    بی نظیر کاربران را به همراه داشت. همین امر سبب شد تا
                    پرچمداران خانواده آیفون 13 نیز از این طراحی نوستالژی و جذاب
                    بهره ببرند. در نگاه اولیه شاید طراحی در نظر گرفته شده برای
                    آیفون 13 پرو تفاوت چندانی با آیفون 12 پرو نداشته باشد، اما
                    اپل توانست با تغییرات هرچند اندک و تنوع رنگی جدید، ظاهری به
                    مراتب جذاب‌تر و همه پسندتر به آن بدهد.
                  </p>
                  <img
                    className="max-w-[320px] w-full mx-auto rounded-3xl"
                    src="assets/image/product/good.jpg"
                    alt=""
                  />
                </div>
              </div>
              <div
                className="bg-gray-50 p-4 rounded-xl hidden"
                id="details"
                role="tabpanel"
                aria-labelledby="details-tab"
              >
                <span className="border-b-red-500 border-b">
                  مشخصات فنی محصول
                </span>
                <div className="text-gray-500 text-sm grid grid-cols-1 gap-x-3 md:grid-cols-2">
                  <div className="flex items-center justify-between bg-gray-100 p-3 w-full my-3 mx-auto rounded-xl">
                    <div className="text-xs opacity-80">پردازنده:</div>
                    <div className="text-xs opacity-70">AM32x new product</div>
                  </div>
                  <div className="flex items-center justify-between bg-gray-100 p-3 w-full my-3 mx-auto rounded-xl">
                    <div className="text-xs opacity-80">فرکانس پردازنده:</div>
                    <div className="text-xs opacity-70">32HR</div>
                  </div>
                  <div className="flex items-center justify-between bg-gray-100 p-3 w-full my-3 mx-auto rounded-xl">
                    <div className="text-xs opacity-80">وزن:</div>
                    <div className="text-xs opacity-70">230 گرم</div>
                  </div>
                  <div className="flex items-center justify-between bg-gray-100 p-3 w-full my-3 mx-auto rounded-xl">
                    <div className="text-xs opacity-80">نسخه بلوتوث:</div>
                    <div className="text-xs opacity-70">7r</div>
                  </div>
                  <div className="flex items-center justify-between bg-gray-100 p-3 w-full my-3 mx-auto rounded-xl">
                    <div className="text-xs opacity-80">نسخه وای فای:</div>
                    <div className="text-xs opacity-70">3prm new test</div>
                  </div>
                  <div className="flex items-center justify-between bg-gray-100 p-3 w-full my-3 mx-auto rounded-xl">
                    <div className="text-xs opacity-80">سیستم عامل:</div>
                    <div className="text-xs opacity-70">IOS</div>
                  </div>
                  <div className="flex items-center justify-between bg-gray-100 p-3 w-full my-3 mx-auto rounded-xl">
                    <div className="text-xs opacity-80">پردازنده گرافیکی:</div>
                    <div className="text-xs opacity-70">Hiliston 7200</div>
                  </div>
                  <div className="flex items-center justify-between bg-gray-100 p-3 w-full my-3 mx-auto rounded-xl">
                    <div className="text-xs opacity-80">دوربین جلو:</div>
                    <div className="text-xs opacity-70">12 MP</div>
                  </div>
                  <div className="flex items-center justify-between bg-gray-100 p-3 w-full my-3 mx-auto rounded-xl">
                    <div className="text-xs opacity-80">دوربین عقب:</div>
                    <div className="text-xs opacity-70">24MP</div>
                  </div>
                </div>
              </div>
              <div
                className="bg-gray-50 p-4 rounded-xl hidden"
                id="commentsBuy"
                role="tabpanel"
                aria-labelledby="commentsBuy-tab"
              >
                <span className="border-b-red-500 border-b">
                  دیدگاه های محصول
                </span>
                <p className="text-gray-500 text-sm"></p>
                <div className="flex flex-col py-4 px-4 mx-auto my-6 max-w-7xl rounded-2xl bg-white">
                  {/* UO COMMENTS */}
                  <div>
                    <div>دیدگاه ها</div>
                    <div className="opacity-70 text-xs">1 دیدگاه</div>
                  </div>
                  {/* COMMENT */}
                  <div className="bg-gray-50 rounded-xl px-3 sm:px-5 py-3 my-2">
                    <div className="flex flex-col items-stat gap-y-2">
                      <div className="flex items-center">
                        <div className="text-green-400 bg-green-100 px-1 rounded-md text-sm">
                          4.7
                        </div>
                        <div className="text-xs opacity-60 pr-1">
                          ارسال شده توسط امیررضا کریمی
                        </div>
                        <div className="text-xs opacity-60 pr-1">
                          1402/05/12
                        </div>
                      </div>
                      <span className="text-green-400 bg-green-100 px-1 w-24 rounded-md text-sm text-center">
                        پیشنهاد شده
                      </span>
                    </div>
                    <div>
                      <div className="opacity-60 text-sm py-3">
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                        چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون
                        بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.
                      </div>
                      <div className="flex flex-col gap-y-2">
                        <div className="flex text-green-400 text-xs">
                          <div>+</div>
                          <div>طراحی زیبا</div>
                        </div>
                        <div className="flex text-green-400 text-xs">
                          <div>+</div>
                          <div>خوش دستی</div>
                        </div>
                      </div>
                      <div className="flex flex-col gap-y-2 mt-2">
                        <div className="flex text-red-400 text-xs">
                          <div>-</div>
                          <div>وزن زیاد</div>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-x-4 justify-end">
                      <a href="" className="flex">
                        <span>5</span>
                        <svg
                          className="hover:fill-green-600"
                          xmlns="http://www.w3.org/2000/svg"
                          width={20}
                          height={20}
                          fill="#797979"
                          viewBox="0 0 256 256"
                        >
                          <path d="M232.49,81.44A22,22,0,0,0,216,74H158V56a38,38,0,0,0-38-38,6,6,0,0,0-5.37,3.32L76.29,98H32a14,14,0,0,0-14,14v88a14,14,0,0,0,14,14H204a22,22,0,0,0,21.83-19.27l12-96A22,22,0,0,0,232.49,81.44ZM30,200V112a2,2,0,0,1,2-2H74v92H32A2,2,0,0,1,30,200ZM225.92,97.24l-12,96A10,10,0,0,1,204,202H86V105.42l37.58-75.17A26,26,0,0,1,146,56V80a6,6,0,0,0,6,6h64a10,10,0,0,1,9.92,11.24Z"></path>
                        </svg>
                      </a>
                      <a href="" className="flex">
                        <span>1</span>
                        <svg
                          className="hover:fill-red-600"
                          xmlns="http://www.w3.org/2000/svg"
                          width={20}
                          height={20}
                          fill="#797979"
                          viewBox="0 0 256 256"
                        >
                          <path d="M237.83,157.27l-12-96A22,22,0,0,0,204,42H32A14,14,0,0,0,18,56v88a14,14,0,0,0,14,14H76.29l38.34,76.68A6,6,0,0,0,120,238a38,38,0,0,0,38-38V182h58a22,22,0,0,0,21.83-24.73ZM74,146H32a2,2,0,0,1-2-2V56a2,2,0,0,1,2-2H74Zm149.5,20.62A9.89,9.89,0,0,1,216,170H152a6,6,0,0,0-6,6v24a26,26,0,0,1-22.42,25.75L86,150.58V54H204a10,10,0,0,1,9.92,8.76l12,96A9.89,9.89,0,0,1,223.5,166.62Z"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="bg-gray-50 p-4 rounded-xl hidden"
                id="comments"
                role="tabpanel"
                aria-labelledby="comments-tab"
              >
                <span className="border-b-red-500 border-b">
                  پرسش های محصول
                </span>
                <p className="text-gray-500 text-sm"></p>
                <div className="flex flex-col py-4 px-4 mx-auto my-6 max-w-7xl rounded-2xl bg-white">
                  {/* UO COMMENTS */}
                  <div>
                    <div>نظرات</div>
                    <div className="pr-5 opacity-70 text-xs">2نظر</div>
                  </div>
                  {/* COMMENT */}
                  <div className="bg-gray-50 rounded-xl px-5 py-3 my-2">
                    <div className="flex items-center">
                      <div>
                        <img
                          className="w-10"
                          src="assets/image/userNotImage.png"
                          alt=""
                        />
                      </div>
                      <div className="text-sm opacity-60 pr-1">
                        نوشته شده توسط امیررضا کریمی
                      </div>
                    </div>
                    <div className="opacity-60 text-sm py-3">
                      لورم است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
                      سطرآنچنان که لازم است.
                    </div>
                    <div>
                      <button className="mr-auto px-2 sm:px-4 py-2 opacity-80 md:w-auto text-xs sm:text-sm xl:text-base flex justify-center items-center">
                        پاسخ
                      </button>
                    </div>
                    {/* RESPONSE */}
                    <div className="bg-gray-100 rounded-xl pl-2 pr-5 sm:pr-8 py-3">
                      <div className="flex items-center">
                        <div>
                          <img
                            className="w-10"
                            src="assets/image/userNotImage.png"
                            alt=""
                          />
                        </div>
                        <div className="text-sm opacity-60 pr-1">
                          پاسخ داده شده توسط امیررضا کریمی
                        </div>
                      </div>
                      <div className="opacity-60 text-sm py-3">
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                        چاپ و با استفاده از طراحامه و مجله در ستون و سطرآنچنان
                        که لازم است.
                      </div>
                      <div>
                        <button className="mr-auto px-2 sm:px-4 py-2 opacity-80 md:w-auto text-xs sm:text-sm xl:text-base flex justify-center items-center">
                          پاسخ
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 rounded-xl px-5 py-3 my-2">
                    <div className="flex items-center">
                      <div>
                        <img
                          className="w-10"
                          src="assets/image/userNotImage.png"
                          alt=""
                        />
                      </div>
                      <div className="text-sm opacity-60 pr-1">
                        نوشته شده توسط امیررضا کریمی
                      </div>
                    </div>
                    <div className="opacity-60 text-sm py-3">
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهو است. چاپگرها
                      و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم
                      است.
                    </div>
                    <div>
                      <button className="mr-auto px-2 sm:px-4 py-2 opacity-80 md:w-auto text-xs sm:text-sm xl:text-base flex justify-center items-center">
                        پاسخ
                      </button>
                    </div>
                  </div>
                  {/* BOX SENT COMMENT */}
                  <div>
                    <div className="mb-4">
                      <label
                        htmlFor="username"
                        className="inline-block mb-2 ml-1 font-semibold text-xs text-slate-700"
                      >
                        نام شما:
                      </label>
                      <input
                        type="text"
                        className="text-sm block w-full rounded-lg border border-gray-400 bg-white px-3 py-2 font-normal text-gray-700 outline-none focus:border-red-300"
                      />
                    </div>
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="mailTicket"
                      className="inline-block mb-2 ml-1 font-semibold text-xs text-slate-700"
                    >
                      نظر شما:
                    </label>
                    <textarea
                      cols={30}
                      rows={5}
                      className="text-sm block w-full rounded-lg border border-gray-400 bg-white px-3 py-2 font-normal text-gray-700 outline-none focus:border-red-300"
                      defaultValue={""}
                    />
                  </div>
                  <button className="inline-block px-8 py-2 ml-auto font-semibold text-center text-white bg-red-500 rounded-lg shadow-md text-xs">
                    ارسال نظر
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* SLIDER */}
          <div className="bg-white rounded-2xl pt-10">
            {/* TOP SLIDER */}
            <div className="flex justify-between px-5 md:px-10 items-center">
              <div className="border-b-2 border-red-500 pb-1">
                مرتبط ترین ها
              </div>
              <a href="#">
                <div className="transition px-4 py-2 rounded-xl flex justify-center items-center text-red-500 hover:text-red-600">
                  دیدن همه
                  <img
                    className="w-4"
                    src="assets/image/arrow-left.png"
                    alt=""
                  />
                </div>
              </a>
            </div>
            {/* SLIDER */}
            <div className="containerPSlider swiper">
              <div className="slide-container1 px-2 swiper-initialized swiper-horizontal swiper-pointer-events swiper-rtl swiper-backface-hidden">
                <div
                  className="card-wrapper swiper-wrapper py-4"
                  id="swiper-wrapper-62fe2b9812122344"
                  aria-live="polite"
                  style={{ transform: "translate3d(0px, 0px, 0px)" }}
                >
                  <span
                    className="card swiper-slide my-2 p-2 md:p-3 swiper-slide-active"
                    role="group"
                    aria-label="1 / 6"
                    style={{ width: "145.667px", marginLeft: 16 }}
                  >
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
                  <span
                    className="card swiper-slide my-2 p-2 md:p-3 swiper-slide-next"
                    role="group"
                    aria-label="2 / 6"
                    style={{ width: "145.667px", marginLeft: 16 }}
                  >
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
                  <span
                    className="card swiper-slide my-2 p-2 md:p-3"
                    role="group"
                    aria-label="3 / 6"
                    style={{ width: "145.667px", marginLeft: 16 }}
                  >
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
                        <a href="">ریش تراش دایاک</a>
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
                  <span
                    className="card swiper-slide my-2 p-2 md:p-3"
                    role="group"
                    aria-label="4 / 6"
                    style={{ width: "145.667px", marginLeft: 16 }}
                  >
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
                        <a href="">تلویزیون 40 اینچ سامسونگ</a>
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
                  <span
                    className="card swiper-slide my-2 p-2 md:p-3"
                    role="group"
                    aria-label="5 / 6"
                    style={{ width: "145.667px", marginLeft: 16 }}
                  >
                    <div className="image-box mb-6 ">
                      <a href="">
                        <img
                          className="hover:scale-105 transition rounded-3xl w-full mx-auto"
                          src="assets/image/productSlider/5.jpg"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="space-y-3 text-center">
                      <span className="text-sm opacity-80 mb-2 h-8 md:h-10">
                        <a href="">کاپشن زمستانه</a>
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
                  <span
                    className="card swiper-slide my-2 p-2 md:p-3"
                    role="group"
                    aria-label="6 / 6"
                    style={{ width: "145.667px", marginLeft: 16 }}
                  >
                    <div className="image-box mb-6 ">
                      <a href="">
                        <img
                          className="hover:scale-105 transition rounded-3xl w-full mx-auto"
                          src="assets/image/productSlider/6.jpg"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="space-y-3 text-center">
                      <span className="text-sm opacity-80 mb-2 h-8 md:h-10">
                        <a href="">هنذفری بلوتوثی شیائومی</a>
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
                <span
                  className="swiper-notification"
                  aria-live="assertive"
                  aria-atomic="true"
                />
              </div>
              <div
                className="swiper-button-next swiper-navBtn swiper-button-disabled swiper-button-lock"
                tabIndex={-1}
                role="button"
                aria-label="Previous slide"
                aria-controls="swiper-wrapper-62fe2b9812122344"
                aria-disabled="true"
              />
              <div
                className="swiper-button-prev swiper-navBtn swiper-button-disabled swiper-button-lock"
                tabIndex={-1}
                role="button"
                aria-label="Next slide"
                aria-controls="swiper-wrapper-62fe2b9812122344"
                aria-disabled="true"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
