import React from "react";

function Pagination({ totalPages, changePage }) {
  return (
    <div className="mb-10">
      <ul className="flex items-center justify-center gap-x-2 md:gap-x-3 h-8 text-sm">
        {[...Array(totalPages)].map((_, i) => (
          <li key={i}>
            <button
              onClick={() => changePage(i + 1)}
              className="flex items-center justify-center transition shadow-lg px-3 h-8 text-red-600 bg-red-200 rounded-lg hover:bg-gray-100"
            >
              {i + 1}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Pagination;
