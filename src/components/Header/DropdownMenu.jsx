import React, { useState } from "react";
import menuData from "../../menuData.js";
import { Link } from "react-router-dom";
import MenuItem from "./DropDownMenue/MenuItem.jsx";

function DropdownMenu() {
  const [activeMenu, setActiveMenu] = useState(null);
  let timer;

  const handleMouseEnter = (index) => {
    clearTimeout(timer);
    setActiveMenu(index);
  };

  const handleMouseLeave = () => {
    timer = setTimeout(() => {
      setActiveMenu(null);
    }, 500); // delay in milliseconds
  };

  return (
    // <ul className="flex w-full flex-wrap items-center h-10">
    //   {menuData.map((item, index) => (
    //     <li
    //       key={index}
    //       className="block relative"
    //       onMouseEnter={() => handleMouseEnter(index)}
    //       onMouseLeave={handleMouseLeave}
    //     >
    //       <a
    //         href={item.href}
    //         className="flex items-center h-10 leading-10 px-3 text-sm mx-1 transition text-gray-700 hover:text-red-500"
    //       >
    //         <span className="border-b-2 border-red-600">{item.label}</span>
    //       </a>
    //       {item.submenu && activeMenu === index && (
    //         <div className="bg-white rounded-2xl shadow-md text-sm  opacity-[0.97] absolute top-auto right-0 min-w-full w-56 z-30 mt-3">
    //           <div className="bg-white rounded-2xl w-full relative z-10 py-2 px-2">
    //             <ul className="list-reset">
    //               {item.submenu.map((subItem, subIndex) => (
    //                 <li key={subIndex} className="relative">
    //                   <a
    //                     href={subItem.href}
    //                     className="px-4 py-2 flex w-full items-start hover:bg-red-100 rounded-lg transition no-underline hover:no-underline duration-100 cursor-pointer"
    //                   >
    //                     <span className="flex-1">{subItem.label}</span>
    //                   </a>
    //                 </li>
    //               ))}
    //             </ul>
    //           </div>
    //         </div>
    //       )}
    //     </li>
    //   ))}
    // </ul>

    // <ul className="flex w-full flex-wrap items-center h-10">
    //   {menuData.map((item, index) => (
    //     <li
    //       key={index}
    //       className="block relative"
    //       onMouseEnter={() => handleMouseEnter(index)}
    //       onMouseLeave={handleMouseLeave}
    //     >
    //       <Link
    //         to={item.href}
    //         className="flex items-center h-10 leading-10 px-3 text-sm mx-1 transition text-gray-700 hover:text-red-500"
    //       >
    //         <span className="border-b-2 border-red-600">{item.label}</span>
    //       </Link>
    //       {item.submenu && activeMenu === index && (
    //         <div className="bg-white rounded-2xl shadow-md text-sm  opacity-[0.97] absolute top-auto right-0 min-w-full w-56 z-30 mt-3">
    //           <div className="bg-white rounded-2xl w-full relative z-10 py-2 px-2">
    //             <ul className="list-reset">
    //               {item.submenu.map((subItem, subIndex) => (
    //                 <li key={subIndex} className="relative">
    //                   <Link
    //                     to={subItem.href}
    //                     className="px-4 py-2 flex w-full items-start hover:bg-red-100 rounded-lg transition no-underline hover:no-underline duration-100 cursor-pointer"
    //                   >
    //                     <span className="flex-1">{subItem.label}</span>
    //                   </Link>
    //                 </li>
    //               ))}
    //             </ul>
    //           </div>
    //         </div>
    //       )}
    //     </li>
    //   ))}
    // </ul>

    <ul className="flex w-full flex-wrap items-center h-10">
      {menuData.map((item, index) => (
        <MenuItem
          key={index}
          item={item}
          isActive={activeMenu === index}
          handleMouseEnter={() => handleMouseEnter(index)}
          handleMouseLeave={handleMouseLeave}
        />
      ))}
    </ul>
  );
}

export default DropdownMenu;
