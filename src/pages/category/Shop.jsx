import { ShopProvider } from "./ShopContext";
import BrandFilter from "./BrandFilter";
import ColorFilter from "./ColorFilter";
import SortOptions from "./SortOptions";
import ProductGrid from "./ProductGrid";
import data from "../../data";
export default function Shop() {
  // Assuming your products data is stored in a state variable
  const [products, setProducts] = useState(data);

  return (
    <ShopProvider>
      <BrandFilter />
      <ColorFilter />
      <SortOptions />
      <ProductGrid products={products} />
    </ShopProvider>
  );
}
