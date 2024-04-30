import React from "react";
import { Link } from "react-router-dom";

function ConfirmBuy() {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      {" "}
      {/* Full screen height and center content */}
      <div className="bg-green-500 text-white text-xl md:text-3xl font-bold shadow-xl my-5 lg:my-10 rounded-xl md:rounded-2xl p-5 md:p-10">
        {" "}
        {/* Larger text, green background */}
        <p>خرید با موفقیت انجام شد</p>
        <p>کد پیگیری: ۸۵۸۶۸۵۸۸</p>
      </div>
      <Link className="bg-red-200" to={"/"}>
        بازگشت به صفحه اصلی
      </Link>
    </div>
  );
}

export default ConfirmBuy;
