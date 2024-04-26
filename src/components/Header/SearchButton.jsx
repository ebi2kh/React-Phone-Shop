import React from "react";

function SearchButton() {
  return (
    <div className="relative">
      <input
        type="search"
        id="default-search"
        className="sm:block w-full px-4 py-3 sm:pl-12 text-sm sm:text-base pl-8 text-red-900 placeholder:text-red-600 rounded-2xl text-right placeholder:text-sm focus:outline-red-400 border-2 border-red-400"
        placeholder="جستجو محصول"
      
      />
      <div className="absolute inset-y-0 left-0 flex items-center pl-4">
        <img
          className="w-5 h-5 text-gray-500"
          src="assets/image/search.png"
          alt=""
        />
      </div>
      {/* <div
        className="absolute w-full bg-gray-50 shadow-2xl h-auto mt-2 z-50 rounded-2xl hidden"
        id="showModalSearch"
        style={{ display: "block" }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3 p-3">
          <a href="" className="flex items-center bg-white p-2 rounded-xl">
            <img
              src="assets/image/product/bag.png"
              alt=""
              className="w-14 rounded-lg ml-2"
            />
            <div className="text-xs opacity-70">کیف لپ تاپ مدل ضدآب</div>
          </a>
          <a href="" className="flex items-center bg-white p-2 rounded-xl">
            <img
              src="assets/image/product/bag.png"
              alt=""
              className="w-14 rounded-lg ml-2"
            />
            <div className="text-xs opacity-70">کیف لپ تاپ مدل ضدآب</div>
          </a>
          <a href="" className="flex items-center bg-white p-2 rounded-xl">
            <img
              src="assets/image/product/bag.png"
              alt=""
              className="w-14 rounded-lg ml-2"
            />
            <div className="text-xs opacity-70">کیف لپ تاپ مدل ضدآب</div>
          </a>
        </div>
        <div className="flex flex-wrap gap-2 px-3 mb-3">
          <a
            href=""
            className="bg-white rounded-xl px-2 py-1 flex items-center text-sm"
          >
            کیف زنانه
            <div className="opacity-70">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={13}
                height={13}
                fill="#333333"
                viewBox="0 0 256 256"
              >
                <path d="M165.66,202.34a8,8,0,0,1-11.32,11.32l-80-80a8,8,0,0,1,0-11.32l80-80a8,8,0,0,1,11.32,11.32L91.31,128Z"></path>
              </svg>
            </div>
          </a>
          <a
            href=""
            className="bg-white rounded-xl px-2 py-1 flex items-center text-sm"
          >
            کیف سبک
            <div className="opacity-70">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={13}
                height={13}
                fill="#333333"
                viewBox="0 0 256 256"
              >
                <path d="M165.66,202.34a8,8,0,0,1-11.32,11.32l-80-80a8,8,0,0,1,0-11.32l80-80a8,8,0,0,1,11.32,11.32L91.31,128Z"></path>
              </svg>
            </div>
          </a>
          <a
            href=""
            className="bg-white rounded-xl px-2 py-1 flex items-center text-sm"
          >
            کیف زیبا
            <div className="opacity-70">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={13}
                height={13}
                fill="#333333"
                viewBox="0 0 256 256"
              >
                <path d="M165.66,202.34a8,8,0,0,1-11.32,11.32l-80-80a8,8,0,0,1,0-11.32l80-80a8,8,0,0,1,11.32,11.32L91.31,128Z"></path>
              </svg>
            </div>
          </a>
        </div>
        <div className="border-t mx-3 flex justify-between px-1 py-2">
          <div className="opacity-80">جستجو های اخیر</div>
          <a
            href=""
            className="bg-white rounded-full p-1 hover:bg-stone-50 transition opacity-90"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={25}
              height={25}
              fill="#333333"
              viewBox="0 0 256 256"
            >
              <path d="M216,48H176V40a24,24,0,0,0-24-24H104A24,24,0,0,0,80,40v8H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM96,40a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96Zm96,168H64V64H192ZM112,104v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm48,0v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Z"></path>
            </svg>
          </a>
        </div>
        <div className="flex flex-wrap gap-2 px-3 mb-3">
          <a
            href=""
            className="bg-white rounded-xl px-2 py-1 flex items-center text-sm"
          >
            <div className="opacity-70 ml-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={20}
                height={20}
                fill="#333333"
                viewBox="0 0 256 256"
              >
                <path d="M136,80v43.47l36.12,21.67a8,8,0,0,1-8.24,13.72l-40-24A8,8,0,0,1,120,128V80a8,8,0,0,1,16,0Zm-8-48A95.44,95.44,0,0,0,60.08,60.15C52.81,67.51,46.35,74.59,40,82V64a8,8,0,0,0-16,0v40a8,8,0,0,0,8,8H72a8,8,0,0,0,0-16H49c7.15-8.42,14.27-16.35,22.39-24.57a80,80,0,1,1,1.66,114.75,8,8,0,1,0-11,11.64A96,96,0,1,0,128,32Z"></path>
              </svg>
            </div>
            آیفون
          </a>
          <a
            href=""
            className="bg-white rounded-xl px-2 py-1 flex items-center text-sm"
          >
            <div className="opacity-70 ml-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={20}
                height={20}
                fill="#333333"
                viewBox="0 0 256 256"
              >
                <path d="M136,80v43.47l36.12,21.67a8,8,0,0,1-8.24,13.72l-40-24A8,8,0,0,1,120,128V80a8,8,0,0,1,16,0Zm-8-48A95.44,95.44,0,0,0,60.08,60.15C52.81,67.51,46.35,74.59,40,82V64a8,8,0,0,0-16,0v40a8,8,0,0,0,8,8H72a8,8,0,0,0,0-16H49c7.15-8.42,14.27-16.35,22.39-24.57a80,80,0,1,1,1.66,114.75,8,8,0,1,0-11,11.64A96,96,0,1,0,128,32Z"></path>
              </svg>
            </div>
            تلویزیون
          </a>
          <a
            href=""
            className="bg-white rounded-xl px-2 py-1 flex items-center text-sm"
          >
            <div className="opacity-70 ml-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={20}
                height={20}
                fill="#333333"
                viewBox="0 0 256 256"
              >
                <path d="M136,80v43.47l36.12,21.67a8,8,0,0,1-8.24,13.72l-40-24A8,8,0,0,1,120,128V80a8,8,0,0,1,16,0Zm-8-48A95.44,95.44,0,0,0,60.08,60.15C52.81,67.51,46.35,74.59,40,82V64a8,8,0,0,0-16,0v40a8,8,0,0,0,8,8H72a8,8,0,0,0,0-16H49c7.15-8.42,14.27-16.35,22.39-24.57a80,80,0,1,1,1.66,114.75,8,8,0,1,0-11,11.64A96,96,0,1,0,128,32Z"></path>
              </svg>
            </div>
            شیائومی
          </a>
          <a
            href=""
            className="bg-white rounded-xl px-2 py-1 flex items-center text-sm"
          >
            <div className="opacity-70 ml-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={20}
                height={20}
                fill="#333333"
                viewBox="0 0 256 256"
              >
                <path d="M136,80v43.47l36.12,21.67a8,8,0,0,1-8.24,13.72l-40-24A8,8,0,0,1,120,128V80a8,8,0,0,1,16,0Zm-8-48A95.44,95.44,0,0,0,60.08,60.15C52.81,67.51,46.35,74.59,40,82V64a8,8,0,0,0-16,0v40a8,8,0,0,0,8,8H72a8,8,0,0,0,0-16H49c7.15-8.42,14.27-16.35,22.39-24.57a80,80,0,1,1,1.66,114.75,8,8,0,1,0-11,11.64A96,96,0,1,0,128,32Z"></path>
              </svg>
            </div>
            کفش اسپورت
          </a>
        </div>
      </div> */}
    </div>
  );
}

export default SearchButton;
