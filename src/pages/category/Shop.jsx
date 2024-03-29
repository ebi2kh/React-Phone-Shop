import BrandFilter from "./BrandFilter";
import ColorFilter from "./ColorFilter";
import SortOptions from "./SortOptions";
import ProductGrid from "./ProductGrid";

export default function Shop() {
  return (
    // <ShopProvider>
    <>
      <BrandFilter />
      <ColorFilter />
      <SortOptions />
      <ProductGrid />
    </>
    // </ShopProvider>
  );
}
