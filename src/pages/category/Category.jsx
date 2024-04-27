import { useState } from "react";
import data from "../../data";
import { Link } from "react-router-dom";
function Category() {
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [sortOption, setSortOption] = useState(null);
  const [selectedColors, setSelectedColors] = useState([]);
  // Assuming your products data is stored in a state variable
  const [products, setProducts] = useState(data);

  // // Filter products based on selected brands
  // const filteredProducts =
  //   selectedBrands.length > 0
  //     ? products.filter((product) => selectedBrands.includes(product.brand))
  //     : products;

  // Get unique brands
  const brands = [...new Set(products.map((product) => product.brand))];
  const colors = [...new Set(products.flatMap((product) => product.color))];
  // Filter products based on selected brand

  // // Filter products based on selected brands
  // const filteredProducts = products.filter((product) =>
  //   selectedBrands.includes(product.brand)
  // );
  // Filter products based on selected brands and colors
  const filteredProducts = products.filter(
    (product) =>
      (selectedBrands.length > 0
        ? selectedBrands.includes(product.brand)
        : true) &&
      (selectedColors.length > 0
        ? product.color.some((color) => selectedColors.includes(color))
        : true)
  );
  console.log(selectedBrands, selectedColors);
  // Sort products based on selected option
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortOption) {
      case "محبوب ترین":
        return b.favorite - a.favorite;
      case "پرفروش ترین":
        return b.buyNumber - a.buyNumber;
      case "ارزان ترین":
        return a.price - b.price;
      case "گران ترین":
        return b.price - a.price;
      case "جدیدترین":
        return b.date - a.date;
      case "پربازدیدترین":
        return b.view - a.view;
      default:
        return 0;
    }
  });
  console.log(sortOption);
  return (
    <div className="max-w-[1440px] mx-auto px-3">
      <div className="bg-white shadow-xl my-5 lg:my-10 rounded-xl md:rounded-2xl p-3 md:p-5">
        <div className="bg-white mx-5 rounded-2xl mb-4">
          <div className="py-3">
            <h3 className="text-xl font-semibold text-gray-800">
              لپ تاپ و کامپیوتر
            </h3>
          </div>
        </div>
        <div className="md:flex">
          <div className="md:w-4/12 lg:w-3/12">
            <div className="bg-white mx-5 mb-4 px-3 py-3 border rounded-xl">
              <div>
                <div className="opacity-80 mb-1">برند:</div>
                <div className="space-y-1">
                  {/* Render brand filter */}
                  {brands.map((brand, index) => (
                    <div
                      key={index}
                      className="flex items-center rounded-lg hover:bg-gray-100 opacity-80"
                    >
                      <input
                        id={`checkbox-item-${index}`}
                        type="checkbox"
                        defaultValue=""
                        className="w-4 h-4 bg-gray-100 border-gray-300 mr-3"
                        onChange={() => {
                          if (selectedBrands.includes(brand)) {
                            setSelectedBrands(
                              selectedBrands.filter((b) => b !== brand)
                            );
                          } else {
                            setSelectedBrands([...selectedBrands, brand]);
                          }
                        }}
                      />
                      <label
                        htmlFor={`checkbox-item-${index}`}
                        className="w-full text-xs text-gray-900 rounded pr-1 py-2"
                      >
                        {brand}
                      </label>
                    </div>
                  ))}

                  {/* <div className="flex items-center rounded-lg hover:bg-gray-100 opacity-80"> */}

                  {/* <input
                      id="checkbox-item-21"
                      type="checkbox"
                      defaultValue=""
                      className="w-4 h-4 bg-gray-100 border-gray-300 mr-3"
                    /> */}
                  {/* <label
                      htmlFor="checkbox-item-21"
                      className="w-full text-xs text-gray-900 rounded pr-1 py-2"
                    >
                      ایسر
                    </label> */}
                  {/* </div> */}
                </div>
              </div>
            </div>
            <div className="bg-white mx-5 mb-4 px-3 py-3 border rounded-xl">
              <div>
                <div className="opacity-80 mb-1">رنگ:</div>
                <div className="space-y-1 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {colors.map((color, index) => (
                    <div
                      key={index}
                      style={{ backgroundColor: `${color.toLowerCase()}` }}
                      className={`flex items-center rounded-lg opacity-80  text-white`}
                    >
                      <input
                        id={`checkbox-color-${index}`}
                        type="checkbox"
                        defaultValue=""
                        className="w-4 h-4 bg-gray-100 border-gray-300 mr-3"
                        onChange={() => {
                          if (selectedColors.includes(color)) {
                            setSelectedColors(
                              selectedColors.filter((c) => c !== color)
                            );
                          } else {
                            setSelectedColors([...selectedColors, color]);
                          }
                        }}
                      />
                      <label
                        htmlFor={`checkbox-color-${index}`}
                        className="w-full text-xs rounded pr-1 py-2"
                      >
                        {color}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="bg-white mx-5 mb-4 px-3 py-3 border rounded-xl">
              <div className="wrapper">
                <div className="price-input flex flex-col-reverse gap-y-3 text-sm opacity-80">
                  <div className="field">
                    <span>تا</span>
                    <input type="number" defaultValue={1000000} />
                    <span>تومان</span>
                  </div>
                  <div className="field">
                    <span>از</span>
                    <input type="number" defaultValue={0} />
                    <span>تومان</span>
                  </div>
                </div>
                <div className="slider">
                  <div class="progress"></div>
                </div>
                <div className="range-input">
                  <input
                    type="range"
                    className="range-min"
                    min={0}
                    max={1000000}
                    defaultValue={0}
                    step={100}
                  />
                  <input
                    type="range"
                    className="range-max"
                    min={0}
                    max={1000000}
                    defaultValue={1000000}
                    step={100}
                  />
                </div>
                <div className="flex justify-between opacity-70 text-xs my-3">
                  <span>ارزان ترین</span>
                  <span>گران ترین</span>
                </div>
              </div>
            </div>
          </div>
          {/* ////////////////////////////////////////////////////// */}
          <div className="md:w-8/12 lg:w-9/12">
            <div className="bg-white mx-1 rounded-2xl grid place-items-center">
              <div className="w-full">
                <div className="py-3 border-b">
                  <div className="opacity-80 text-sm mb-2">مرتب سازی:</div>
                  <div className="flex flex-wrap gap-5 justify-start items-center">
                    <div className="opacity-70 text-xs hover:text-red-500 transition cursor-pointer text-red-600">
                      محبوب ترین
                    </div>
                    <div
                      className="opacity-70 text-xs hover:text-red-500 transition cursor-pointer"
                      onClick={() => setSortOption("محبوب ترین")}
                    >
                      پرفروش ترین
                    </div>
                    <div
                      className="opacity-70 text-xs hover:text-red-500 transition cursor-pointer"
                      onClick={() => setSortOption("ارزان ترین")}
                    >
                      ارزان ترین
                    </div>
                    <div
                      className="opacity-70 text-xs hover:text-red-500 transition cursor-pointer"
                      onClick={() => setSortOption("گران ترین")}
                    >
                      گران ترین
                    </div>
                    <div
                      className="opacity-70 text-xs hover:text-red-500 transition cursor-pointer"
                      onClick={() => setSortOption("جدیدترین")}
                    >
                      جدیدترین
                    </div>
                    <div
                      className="opacity-70 text-xs hover:text-red-500 transition cursor-pointer"
                      onClick={() => setSortOption("پربازدیدترین")}
                    >
                      پربازدیدترین
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* ////////////////////////////////////////////// */}
            <div className="bg-white rounded-2xl">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-5 px-1 rounded-2xl py-5">
                {/* Render products */}
                {sortedProducts.map((product) => (
                  <Link
                    to={`/product/${product.id}`}
                    className="my-2 py-2 md:p-3 border rounded-xl flex items-center sm:inline hover:shadow-lg transition"
                  >
                    <div className="image-box sm:mb-6">
                      <div>
                        <img
                          className="hover:scale-105 transition rounded-md sm:rounded-3xl w-24 sm:w-full mx-auto"
                          src={product.image}
                          alt={product.name}
                        />
                      </div>
                    </div>
                    <div className="flex flex-col w-full">
                      <span className="text-xs sm:text-sm opacity-90 mb-5">
                        <div className="leading-7 h-auto">{product.name}</div>
                      </span>
                      <div className="flex justify-end mb-2 text-sm opacity-80 pl-3 md:pl-0">
                        <div>{product.price}</div>
                        <div>تومان</div>
                      </div>
                      <div className="flex justify-end text-xs opacity-75 pl-3 md:pl-0">
                        <div className="line-through">1.350.000</div>
                        <div className="line-through">تومان</div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Category;
