import React from "react";

function UserInfo() {
  return (
    <div className="border rounded-3xl shadow-lg flex flex-col p-5 gap-y-5">
      <div className="border-b pb-3">اطلاعات شخصی</div>
      <div className="flex border-b pb-2">
        <div className="w-1/2">
          <div className="text-xs opacity-80 mb-1">نام و نام خانوادگی:</div>
          <div className="text-sm opacity-90">امیرررر</div>
        </div>
        <div className="w-1/2">
          <div className="text-xs opacity-80 mb-1">ایمیل:</div>
          <div className="text-sm opacity-90">aaaaaaaa@gmail.com</div>
        </div>
      </div>
      <div className="flex border-b pb-2">
        <div className="w-1/2">
          <div className="text-xs opacity-80 mb-1">شماره تلفن همراه:</div>
          <div className="text-sm opacity-90">0999999999</div>
        </div>
        <div className="w-1/2">
          <div className="text-xs opacity-80 mb-1">تاریخ عضویت:</div>
          <div className="text-sm opacity-90">1402/12/01</div>
        </div>
      </div>
      <div className="flex border-b pb-2">
        <div className="w-1/2">
          <div className="text-xs opacity-80 mb-1">احراز هویت:</div>
          <div className="text-sm opacity-90">خیر</div>
        </div>
        <div className="w-1/2">
          <div className="text-xs opacity-80 mb-1">کدملی:</div>
          <div className="text-sm opacity-90">0888888888</div>
        </div>
      </div>
      <span className="opacity-90">
        <button className="px-7 py-2 text-center text-white bg-red-500 align-middle border-0 rounded-lg shadow-md text-sm">
          ویرایش اطلاعات
        </button>
      </span>
    </div>
  );
}

export default UserInfo;
