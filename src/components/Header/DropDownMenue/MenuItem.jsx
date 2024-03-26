import { Link } from "react-router-dom";
import Submenu from "./Submenu";
function MenuItem({ item, isActive, handleMouseEnter, handleMouseLeave }) {
  return (
    <li
      className="block relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link
        to={item.href}
        className="flex items-center h-10 leading-10 px-3 text-sm mx-1 transition text-gray-700 hover:text-red-500"
      >
        <span className="border-b-2 border-red-600">{item.label}</span>
      </Link>
      {item.submenu && isActive && <Submenu submenu={item.submenu} />}
    </li>
  );
}
export default MenuItem;
