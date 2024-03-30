import React from "react";

function UserMenu() {
  return (
    <div className="border rounded-3xl shadow-lg flex flex-col justify-center items-center p-2 gap-y-2">
      <a
        href="profile.html"
        className="text-sm opacity-80 w-full flex justify-end pr-5 flex-row-reverse items-center hover:text-red-600 transition hover:bg-gray-100 py-3 rounded-2xl bg-gray-200 text-red-600"
      >
        پروفایل
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={20}
          height={20}
          fill="#474747"
          viewBox="0 0 256 256"
        >
          <path d="M229.19,213c-15.81-27.32-40.63-46.49-69.47-54.62a70,70,0,1,0-63.44,0C67.44,166.5,42.62,185.67,26.81,213a6,6,0,1,0,10.38,6C56.4,185.81,90.34,166,128,166s71.6,19.81,90.81,53a6,6,0,1,0,10.38-6ZM70,96a58,58,0,1,1,58,58A58.07,58.07,0,0,1,70,96Z" />
        </svg>
      </a>
      <a
        href="profile-order.html"
        className="text-sm opacity-80 w-full flex justify-end pr-5 flex-row-reverse items-center hover:text-red-600 transition hover:bg-gray-100 py-3 rounded-2xl"
      >
        سفارش ها
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={20}
          height={20}
          fill="#474747"
          viewBox="0 0 256 256"
        >
          <path d="M134,120v56a6,6,0,0,1-12,0V120a6,6,0,0,1,12,0ZM237.88,97.85,224,201.85A14,14,0,0,1,210.13,214H45.87A14,14,0,0,1,32,201.85l-13.87-104A14,14,0,0,1,32,82H69.28l54.2-61.95a6,6,0,0,1,9,0l54.2,62H224a14,14,0,0,1,13.87,15.85ZM85.22,82h85.56L128,33.11ZM225.5,94.68A2,2,0,0,0,224,94H32a2,2,0,0,0-1.51.68A2,2,0,0,0,30,96.26l13.86,104a2,2,0,0,0,2,1.73H210.13a2,2,0,0,0,2-1.73L226,96.26A1.93,1.93,0,0,0,225.5,94.68ZM181.4,114a6,6,0,0,0-6.57,5.37l-5.6,56A6,6,0,0,0,174.6,182l.61,0a6,6,0,0,0,6-5.4l5.6-56A6,6,0,0,0,181.4,114ZM81.17,119.4a6,6,0,0,0-11.94,1.2l5.6,56a6,6,0,0,0,6,5.4l.61,0a6,6,0,0,0,5.37-6.57Z" />
        </svg>
      </a>
      <a
        href="profile-favorites.html"
        className="text-sm opacity-80 w-full flex justify-end pr-5 flex-row-reverse items-center hover:text-red-600 transition hover:bg-gray-100 py-3 rounded-2xl"
      >
        علاقه مندی ها
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={20}
          height={20}
          fill="#474747"
          viewBox="0 0 256 256"
        >
          <path d="M178,34c-21,0-39.26,9.47-50,25.34C117.26,43.47,99,34,78,34A60.07,60.07,0,0,0,18,94c0,29.2,18.2,59.59,54.1,90.31a334.68,334.68,0,0,0,53.06,37,6,6,0,0,0,5.68,0,334.68,334.68,0,0,0,53.06-37C219.8,153.59,238,123.2,238,94A60.07,60.07,0,0,0,178,34ZM128,209.11C111.59,199.64,30,149.72,30,94A48.05,48.05,0,0,1,78,46c20.28,0,37.31,10.83,44.45,28.27a6,6,0,0,0,11.1,0C140.69,56.83,157.72,46,178,46a48.05,48.05,0,0,1,48,48C226,149.72,144.41,199.64,128,209.11Z" />
        </svg>
      </a>
      <a
        href="profile-address.html"
        className="text-sm opacity-80 w-full flex justify-end pr-5 flex-row-reverse items-center hover:text-red-600 transition hover:bg-gray-100 py-3 rounded-2xl"
      >
        آدرس های من
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={20}
          height={20}
          fill="#474747"
          viewBox="0 0 256 256"
        >
          <path d="M128,66a38,38,0,1,0,38,38A38,38,0,0,0,128,66Zm0,64a26,26,0,1,1,26-26A26,26,0,0,1,128,130Zm0-112a86.1,86.1,0,0,0-86,86c0,30.91,14.34,63.74,41.47,94.94a252.32,252.32,0,0,0,41.09,38,6,6,0,0,0,6.88,0,252.32,252.32,0,0,0,41.09-38c27.13-31.2,41.47-64,41.47-94.94A86.1,86.1,0,0,0,128,18Zm0,206.51C113,212.93,54,163.62,54,104a74,74,0,0,1,148,0C202,163.62,143,212.93,128,224.51Z" />
        </svg>
      </a>
      <a
        href="profile-comments.html"
        className="text-sm opacity-80 w-full flex justify-end pr-5 flex-row-reverse items-center hover:text-red-600 transition hover:bg-gray-100 py-3 rounded-2xl"
      >
        نظرات من
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={20}
          height={20}
          fill="#474747"
          viewBox="0 0 256 256"
        >
          <path d="M138,128a10,10,0,1,1-10-10A10,10,0,0,1,138,128ZM84,118a10,10,0,1,0,10,10A10,10,0,0,0,84,118Zm88,0a10,10,0,1,0,10,10A10,10,0,0,0,172,118Zm58,10A102,102,0,0,1,79.31,217.65L44.44,229.27a14,14,0,0,1-17.71-17.71l11.62-34.87A102,102,0,1,1,230,128Zm-12,0A90,90,0,1,0,50.08,173.06a6,6,0,0,1,.5,4.91L38.12,215.35a2,2,0,0,0,2.53,2.53L78,205.42a6.2,6.2,0,0,1,1.9-.31,6.09,6.09,0,0,1,3,.81A90,90,0,0,0,218,128Z" />
        </svg>
      </a>
      <a
        href="profile-personal-info.html"
        className="text-sm opacity-80 w-full flex justify-end pr-5 flex-row-reverse items-center hover:text-red-600 transition hover:bg-gray-100 py-3 rounded-2xl"
      >
        اطلاعات حساب
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={20}
          height={20}
          fill="#474747"
          viewBox="0 0 256 256"
        >
          <path d="M142,176a6,6,0,0,1-6,6,14,14,0,0,1-14-14V128a2,2,0,0,0-2-2,6,6,0,0,1,0-12,14,14,0,0,1,14,14v40a2,2,0,0,0,2,2A6,6,0,0,1,142,176ZM124,94a10,10,0,1,0-10-10A10,10,0,0,0,124,94Zm106,34A102,102,0,1,1,128,26,102.12,102.12,0,0,1,230,128Zm-12,0a90,90,0,1,0-90,90A90.1,90.1,0,0,0,218,128Z" />
        </svg>
      </a>
    </div>
  );
}

export default UserMenu;
