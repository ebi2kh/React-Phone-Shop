import { Link } from "react-router-dom";

function Submenu({ submenu }) {
  return (
    <div className="bg-white rounded-2xl shadow-md text-sm  opacity-[0.97] absolute top-auto right-0 min-w-full w-56 z-30 mt-3">
      <div className="bg-white rounded-2xl w-full relative z-10 py-2 px-2">
        <ul className="list-reset">
          {submenu.map((subItem, subIndex) => (
            <li key={subIndex} className="relative">
              <Link
                to={subItem.href}
                className="px-4 py-2 flex w-full items-start hover:bg-red-100 rounded-lg transition no-underline hover:no-underline duration-100 cursor-pointer"
              >
                <span className="flex-1">{subItem.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default Submenu;
