import { useEffect, useState } from "react";
import type { Product } from "../../@types";
import { getAllProducts } from "../../services/index";

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchAllProducts = async () => {
    setLoading(true);
    setError(null);

    try {
      const data = await getAllProducts();
      setProducts(data);
    } catch (err: unknown) {
        if(err instanceof Error) return setError(`Error fetching products: ${err.message}`);
        setError(`Error fetching products`)
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllProducts();
  }, []);

  return {
    products,
    loading,
    error,
    refetch: fetchAllProducts,
  };
};
