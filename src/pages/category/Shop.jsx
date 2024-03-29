import BrandFilter from "./BrandFilter";
import ColorFilter from "./ColorFilter";
import SortOptions from "./SortOptions";
import ProductGrid from "./ProductGrid";

export default function Shop() {
  return (
    <div className="max-w-[1440px] mx-auto px-3">
      <div className="bg-white shadow-xl my-5 lg:my-10 rounded-xl md:rounded-2xl p-3 md:p-5">
        <div className="bg-white mx-5 rounded-2xl mb-4">
          <div className="py-3">
            <h3 className="text-xl font-semibold text-gray-800">
              لپ تاپ و کامپیوتر
            </h3>
          </div>
        </div>
        <div className="md:flex">
          <div className="md:w-4/12 lg:w-3/12">
            <div className="bg-white mx-5 mb-4 px-3 py-3 border rounded-xl">
              <div>
                <div className="opacity-80 mb-1">برند:</div>
                <div className="space-y-1"></div>
                <BrandFilter />
              </div>
            </div>
            <div className="bg-white mx-5 mb-4 px-3 py-3 border rounded-xl">
              <div>
                <div className="opacity-80 mb-1">رنگ:</div>
                <div className="space-y-1 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <ColorFilter />
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-8/12 lg:w-9/12">
            <div className="bg-white mx-1 rounded-2xl grid place-items-center">
              <div className="w-full">
                <div className="py-3 border-b">
                  <div className="opacity-80 text-sm mb-2">مرتب سازی:</div>

                  <SortOptions />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl">
              <ProductGrid />
            </div>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
}
