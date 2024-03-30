import React from "react";

function UserOrders() {
  return (
    <div className="relative overflow-x-auto shadow-md rounded-xl">
      <table className="w-full text-sm text-right text-gray-600">
        <thead className="text-xs text-gray-700 bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3">
              شماره سفارش
            </th>
            <th scope="col" className="px-6 py-3">
              تاریخ ثبت سفارش
            </th>
            <th scope="col" className="px-6 py-3">
              وضعیت
            </th>
            <th scope="col" className="px-6 py-3">
              مجموع
            </th>
            <th scope="col" className="px-6 py-3">
              جزئیات
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="hover:bg-gray-100 transition text-xs border-b">
            <th scope="row" className="px-6 py-4 font-medium">
              G45266TY45H
            </th>
            <td className="px-6 py-4">1402/12/05</td>
            <td className="lg:px-6 py-4 text-red-500">در انتظار پرداخت</td>
            <td className="px-6 py-4">750,000 تومان</td>
            <td className="px-6 py-4">
              <a href="#" className="text-red-500 border-b border-red-400">
                مشاهده
              </a>
            </td>
          </tr>
          <tr className="hover:bg-gray-100 transition text-xs border-b">
            <th scope="row" className="px-6 py-4 font-medium">
              Y422663Y4FR
            </th>
            <td className="px-6 py-4">1402/12/04</td>
            <td className="lg:px-6 py-4 text-green-500">پرداخت شده</td>
            <td className="px-6 py-4">360,000 تومان</td>
            <td className="px-6 py-4">
              <a href="#" className="text-red-500 border-b border-red-400">
                مشاهده
              </a>
            </td>
          </tr>
          <tr className="hover:bg-gray-100 transition text-xs border-b">
            <th scope="row" className="px-6 py-4 font-medium">
              Y422663Y4FR
            </th>
            <td className="px-6 py-4">1402/12/04</td>
            <td className="lg:px-6 py-4 text-green-500">پرداخت شده</td>
            <td className="px-6 py-4">360,000 تومان</td>
            <td className="px-6 py-4">
              <a href="#" className="text-red-500 border-b border-red-400">
                مشاهده
              </a>
            </td>
          </tr>
          <tr className="hover:bg-gray-100 transition text-xs border-b">
            <th scope="row" className="px-6 py-4 font-medium">
              Y422663Y4FR
            </th>
            <td className="px-6 py-4">1402/12/04</td>
            <td className="lg:px-6 py-4 text-green-500">پرداخت شده</td>
            <td className="px-6 py-4">360,000 تومان</td>
            <td className="px-6 py-4">
              <a href="#" className="text-red-500 border-b border-red-400">
                مشاهده
              </a>
            </td>
          </tr>
          <tr className="hover:bg-gray-100 transition text-xs border-b">
            <th scope="row" className="px-6 py-4 font-medium">
              Y422663Y4FR
            </th>
            <td className="px-6 py-4">1402/12/04</td>
            <td className="lg:px-6 py-4 text-green-500">پرداخت شده</td>
            <td className="px-6 py-4">360,000 تومان</td>
            <td className="px-6 py-4">
              <a href="#" className="text-red-500 border-b border-red-400">
                مشاهده
              </a>
            </td>
          </tr>
          <tr className="hover:bg-gray-100 transition text-xs border-b">
            <th scope="row" className="px-6 py-4 font-medium">
              Y422663Y4FR
            </th>
            <td className="px-6 py-4">1402/12/04</td>
            <td className="lg:px-6 py-4 text-green-500">پرداخت شده</td>
            <td className="px-6 py-4">360,000 تومان</td>
            <td className="px-6 py-4">
              <a href="#" className="text-red-500 border-b border-red-400">
                مشاهده
              </a>
            </td>
          </tr>
          <tr className="hover:bg-gray-100 transition text-xs border-b">
            <th scope="row" className="px-6 py-4 font-medium">
              Y422663Y4FR
            </th>
            <td className="px-6 py-4">1402/12/04</td>
            <td className="lg:px-6 py-4 text-green-500">پرداخت شده</td>
            <td className="px-6 py-4">360,000 تومان</td>
            <td className="px-6 py-4">
              <a href="#" className="text-red-500 border-b border-red-400">
                مشاهده
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default UserOrders;
