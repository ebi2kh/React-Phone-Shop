import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="max-w-[1440px] mx-auto px-3">
      <div className="bg-white shadow-xl my-5 lg:my-10 rounded-xl md:rounded-2xl  p-3 md:p-5">
        {/* <img
          className="mx-auto rounded-3xl"
          src="assets/image/404/404-error-not-found.png"
          alt=""
        /> */}
        <div className="opacity-90 text-center mt-7 mb-5 text-lg">
          صفحه مورد نظر پیدا نشد!!!
        </div>
        <div className="flex justify-center items-center mb-5">
          <Link
            className="border-b-2 border-red-500 hover:text-red-600 transition"
            to={"/"}
          >
            صفحه اصلی
          </Link>
          <img className="w-5" src="assets/image/arrow-left.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default NotFound;
