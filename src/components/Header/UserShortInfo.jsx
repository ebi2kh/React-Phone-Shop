import React from "react";
import { Link } from "react-router-dom";

function UserShortInfo() {
  return (
    <span className="block relative">
      <Link
        to={""}
        className="flex items-center h-10 leading-10 px-3 mx-1 transition rounded-xl hover:bg-red-50"
      >
        {/* <img className="ml-1 w-6" src="assets/image/user.png" alt="" /> */}
        <span className="text-sm opacity-95">ورود | ثبت نام</span>
        <span>
          {/* <img
            className="w-4 mr-1"
            src="assets/image/chevron-down-login.png"
            alt=""
          /> */}
        </span>
      </Link>
      {/* <div className="hidden bg-white rounded-2xl shadow-md border-gray-50 text-sm absolute top-auto right-0 w-64 z-30 mt-1">
        <div className="bg-white rounded-2xl w-full relative z-10 py-2 px-2">
          <ul className="list-reset">
            <li className="relative border-b-2 border-red-300 pb-2">
              <a
                href="profile.html"
                className="px-2 py-2 flex w-full items-start hover:bg-red-50 rounded-xl"
              >
                <span className="flex justify-center items-center opacity-90">
                  <img
                    className="w-8 ml-2"
                    src="assets/image/userNotImage.png"
                    alt=""
                  />
                  امیررضا کریمی
                </span>
              </a>
            </li>
            <li className="relative pt-2">
              <a
                href="profile-order.html"
                className="px-4 py-2 flex w-full items-start hover:bg-red-50 rounded-xl"
              >
                <span className="flex justify-center items-center text-sm opacity-90">
                  <img
                    className="w-5 ml-1"
                    src="assets/image/package.png"
                    alt=""
                  />
                  سفارش ها
                </span>
              </a>
            </li>
            <li className="relative">
              <a
                href="profile-favorites.html"
                className="px-4 py-2 flex w-full items-start hover:bg-red-50 rounded-xl"
              >
                <span className="flex justify-center items-center text-sm opacity-90">
                  <img
                    className="w-5 ml-1"
                    src="assets/image/heart.png"
                    alt=""
                  />
                  علاقه مندی ها
                </span>
              </a>
            </li>
            <li className="relative">
              <a
                href="#"
                className="px-4 py-2 flex w-full items-start hover:bg-red-50 rounded-xl"
              >
                <span className="flex justify-center items-center text-sm opacity-90">
                  <img
                    className="w-5 ml-1"
                    src="assets/image/exit.png"
                    alt=""
                  />
                  خروج از حساب کاربری
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div> */}
    </span>
  );
}

export default UserShortInfo;
