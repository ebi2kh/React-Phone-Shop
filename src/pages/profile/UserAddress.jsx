import React from "react";

function UserAddress() {
  return (
    <div className="border rounded-3xl shadow-lg flex flex-col p-5 gap-y-5">
      <div>
        <div className="opacity-80">خراسان رضوی-مشهد-خیابان .....</div>
      </div>
      <div className="md:grid grid-cols-2">
        <div>
          <div className="text-xs opacity-80 mb-1">شماره تلفن همراه:</div>
          <div className="text-sm opacity-90">09999999999</div>
        </div>
        <div>
          <div className="text-xs opacity-80 mb-1">ایمیل:</div>
          <div className="text-sm opacity-90">aaaaaaa@gmail.com</div>
        </div>
      </div>
      <div className="w-1/2">
        <div className="text-xs opacity-80 mb-1">کد پستی:</div>
        <div className="text-sm opacity-90">9889498984</div>
      </div>
      <span className="opacity-90">
        <button className="px-7 py-2 text-center text-white bg-blue-500 align-middle border-0 rounded-lg shadow-md text-sm">
          ویرایش آدرس
        </button>
        <button className="px-7 py-2 text-center text-white bg-red-500 align-middle border-0 rounded-lg shadow-md text-sm">
          حذف
        </button>
      </span>
    </div>
  );
}

export default UserAddress;
