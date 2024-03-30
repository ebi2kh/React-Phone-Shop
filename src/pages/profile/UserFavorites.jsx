import React from "react";

function UserFavorites() {
  return (
    <div className="rounded-xl">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500">
        <thead className="hidden md:table-header-group text-xs text-gray-700 bg-gray-50">
          <tr>
            <th scope="col" className="px-16 py-3">
              <span className="sr-only">تصویر</span>
            </th>
            <th scope="col" className="md:pr-6 py-3">
              نام محصول
            </th>
            <th scope="col" className="px-6 py-3">
              قیمت
            </th>
            {/* <th scope="col" class="pr-10 py-3">
              افزودن به سبدخرید
            </th> */}
            <th scope="col" className="px-4 py-3">
              دستورات
            </th>
          </tr>
        </thead>
        <tbody className="grid grid-cols-1 sm:grid-cols-2 md:contents gap-5">
          <tr className="bg-white border-b hover:bg-gray-50 grid grid-cols-1 justify-items-center md:table-row">
            <td className="p-4">
              <img
                src="assets/image/productSlider/2.jpg"
                className="w-48 md:w-32 max-w-full max-h-full rounded-lg"
                alt=""
              />
            </td>
            <td className="md:pr-6 py-4 text-sm opacity-90 text-gray-900">
              ساعت اپل مدل a32s پلاس
            </td>
            <td className="px-6 py-4 text-sm opacity-90 text-gray-900">
              4,000,000 تومان
            </td>
            <td className="px-2 py-4">
              <a href="#" className="text-red-600">
                حذف
              </a>
              <a
                href="#"
                className="text-white bg-green-500 hover:bg-green-600 transition px-2 py-1 shadow-lg rounded-md mr-3"
              >
                مشاهده
              </a>
            </td>
          </tr>
          <tr className="bg-white border-b hover:bg-gray-50 grid grid-cols-1 justify-items-center md:table-row">
            <td className="p-4">
              <img
                src="assets/image/productSlider/4.jpg"
                className="w-48 md:w-32 max-w-full max-h-full rounded-lg"
                alt=""
              />
            </td>
            <td className="md:pr-6 py-4 text-sm opacity-90 text-gray-900">
              تلویزیون 40 اینچ سامسونگ
            </td>
            <td className="px-6 py-4 text-sm opacity-90 text-gray-900">
              4,000,000 تومان
            </td>
            <td className="px-2 py-4">
              <a href="#" className=" text-red-600">
                حذف
              </a>
              <a
                href="#"
                className="text-white bg-green-500 hover:bg-green-600 transition px-2 py-1 shadow-lg rounded-md mr-3"
              >
                مشاهده
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default UserFavorites;
