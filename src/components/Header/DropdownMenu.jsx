import React, { useState } from "react";

function DropdownMenu() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <ul className="flex w-full flex-wrap items-center h-10">
      <li className="block relative">
        <a
          href="index.html"
          className="flex items-center h-10 text-sm leading-10 px-4 mx-1 transition text-gray-700 hover:text-red-500"
        >
          <span className=" border-b-2 border-red-600">صفحه اصلی</span>
        </a>
      </li>
      <li className="block relative">
        <a
          onMouseEnter={() => setShowMenu(true)}
          //   onMouseLeave={() => setShowMenu(false)}
          href="category-index.html"
          className="flex items-center h-10 leading-10 px-3 text-sm mx-1 transition text-gray-700 hover:text-red-500"
        >
          <span>
            لباس
            <img
              className="w-4 mr-1"
              src="assets/image/chevron-down-login.png"
              alt=""
            />
          </span>
        </a>

        {showMenu && (
          //   onMouseLeave={() => setShowMenu(false)}

          <div
            className="bg-white rounded-2xl shadow-md text-sm  opacity-[0.97] absolute top-auto right-0 min-w-full w-56 z-30 mt-3"
            onMouseLeave={() => setShowMenu(false)}
          >
            <div className="bg-white rounded-2xl w-full relative z-10 py-2 px-2">
              <ul className="list-reset">
                <li className="relative">
                  <a
                    href="category.html"
                    className="px-4 py-2 flex w-full items-start hover:bg-red-100 rounded-lg transition no-underline hover:no-underline duration-100 cursor-pointer"
                  >
                    <span className="flex-1">مردانه</span>
                  </a>
                </li>
                <li className="relative">
                  <a
                    href="category.html"
                    className="px-4 py-2 flex w-full items-start hover:bg-red-100 rounded-lg transition no-underline hover:no-underline duration-100 cursor-pointer"
                  >
                    <span className="flex-1">زنانه</span>
                  </a>
                </li>
                <li className="relative">
                  <a
                    href="category.html"
                    className="px-4 py-2 flex w-full items-start hover:bg-red-100 rounded-lg transition no-underline hover:no-underline duration-100 cursor-pointer"
                  >
                    <span className="flex-1">بچگانه</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        )}
      </li>
    </ul>
  );
}

export default DropdownMenu;
