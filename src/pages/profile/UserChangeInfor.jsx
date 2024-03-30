import React from "react";

function UserChangeInfor() {
  return (
    <div className="border rounded-3xl shadow-lg flex flex-col p-5 gap-y-5">
      <div className="sm:grid grid-cols-2 gap-x-5">
        <div className="mb-4">
          <label
            htmlFor="username"
            className="inline-block mb-2 ml-1 font-semibold text-xs text-slate-700"
          >
            نام
          </label>
          <input
            type="text"
            className="text-sm block w-full rounded-lg border border-gray-300 bg-white px-3 py-2 font-normal text-gray-700 outline-none focus:border-red-300"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="username"
            className="inline-block mb-2 ml-1 font-semibold text-xs text-slate-700"
          >
            نام خانوادگی
          </label>
          <input
            type="text"
            className="text-sm block w-full rounded-lg border border-gray-300 bg-white px-3 py-2 font-normal text-gray-700 outline-none focus:border-red-300"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="username"
            className="inline-block mb-2 ml-1 font-semibold text-xs text-slate-700"
          >
            شماره همراه
          </label>
          <input
            type="number"
            className="text-sm block w-full rounded-lg border border-gray-300 bg-white px-3 py-2 font-normal text-gray-700 outline-none focus:border-red-300"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="username"
            className="inline-block mb-2 ml-1 font-semibold text-xs text-slate-700"
          >
            ایمیل
          </label>
          <input
            type="email"
            className="text-sm block w-full appearance-none rounded-lg border border-gray-300 bg-white px-3 py-2 font-normal text-gray-700 outline-none focus:border-red-300"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="username"
            className="inline-block mb-2 ml-1 font-semibold text-xs text-slate-700"
          >
            رمز عبور قبلی
          </label>
          <input
            type="text"
            className="text-sm block w-full rounded-lg border border-gray-300 bg-white px-3 py-2 font-normal text-gray-700 outline-none focus:border-red-300"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="username"
            className="inline-block mb-2 ml-1 font-semibold text-xs text-slate-700"
          >
            رمز عبور جدید
          </label>
          <input
            type="password"
            className="text-sm block w-full rounded-lg border border-gray-300 bg-white px-3 py-2 font-normal text-gray-700 outline-none focus:border-red-300"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="username"
            className="inline-block mb-2 ml-1 font-semibold text-xs text-slate-700"
          >
            تکرار رمز عبور جدید
          </label>
          <input
            type="password"
            className="text-sm block w-full rounded-lg border border-gray-300 bg-white px-3 py-2 font-normal text-gray-700 outline-none focus:border-red-300"
          />
        </div>
        <div className="flex items-center pt-7 h-16">
          <span className="w-auto ml-2 font-semibold text-xs text-slate-700">
            تغییر عکس پروفایل
          </span>
          <label
            htmlFor="dropzone-file"
            className="w-8/12 sm:w-1/3 flex flex-col items-center justify-center border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
          >
            <div className="flex flex-col items-center justify-center p-1">
              <svg
                className="w-6 h-6 text-gray-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 16"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                />
              </svg>
            </div>
            <input id="dropzone-file" type="file" className="hidden" />
          </label>
        </div>
      </div>
      <span className="opacity-90">
        <button className="px-7 py-2 text-center text-white bg-blue-500 align-middle border-0 rounded-lg shadow-md text-sm">
          ثبت
        </button>
        <button className="px-7 py-2 text-center text-white bg-red-500 align-middle border-0 rounded-lg shadow-md text-sm">
          لغو
        </button>
      </span>
    </div>
  );
}

export default UserChangeInfor;
