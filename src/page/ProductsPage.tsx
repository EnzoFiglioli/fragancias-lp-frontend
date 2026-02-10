import { useEffect, useState } from "react";
import type { ComponentType } from "react";
import type { Product } from "../@types";
import { getAllProducts } from "../services";
import { useFilter } from "../hooks/useFilter";
import Filters from "../components/Filters/Filters";
import ProductList from "../components/ProductList";

const ProductsPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [category, setCategory] = useState("all");
  const [sort, setSort] = useState("default");

  useEffect(() => {
    getAllProducts().then(setProducts);
  }, []);

  const { filterByCategory, sortItems } = useFilter();

  const ProductListComponent = ProductList as ComponentType<{ products: Product[] }>;

  const visibleProducts = sortItems(
    filterByCategory(products, category),
    sort
  );

  return (
    <div style={{marginTop:'100px'}}>
      <Filters
        category={category}
        sort={sort}
        onCategoryChange={setCategory}
        onSortChange={setSort}
      />

      <ProductListComponent products={visibleProducts} />
    </div>
  );
};

export default ProductsPage;
