import React from "react";

function UserAvatar() {
  return (
    <div className="border rounded-3xl shadow-lg flex flex-col justify-center items-center py-4 gap-y-5">
      <img
        className="border rounded-full w-24"
        src="assets/image/team-2.jpg"
        alt=""
      />
      <span className="font-semibold opacity-80">امیررضا کریمی</span>
      <span className="text-xs opacity-70">عضویت 2 سال</span>
      <span className="flex text-xs opacity-70">
        <div>شماره تلفن:</div>
        <div>09304444444</div>
      </span>
      <a
        href=""
        className="text-sm opacity-80 border-t w-full pt-2 flex justify-center flex-row-reverse items-center hover:text-red-600 transition"
      >
        خروج از حساب
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={24}
          height={24}
          fill="#474747"
          viewBox="0 0 256 256"
        >
          <path d="M110,216a6,6,0,0,1-6,6H48a14,14,0,0,1-14-14V48A14,14,0,0,1,48,34h56a6,6,0,0,1,0,12H48a2,2,0,0,0-2,2V208a2,2,0,0,0,2,2h56A6,6,0,0,1,110,216Zm110.24-92.24-40-40a6,6,0,0,0-8.48,8.48L201.51,122H104a6,6,0,0,0,0,12h97.51l-29.75,29.76a6,6,0,1,0,8.48,8.48l40-40A6,6,0,0,0,220.24,123.76Z" />
        </svg>
      </a>
    </div>
  );
}

export default UserAvatar;
