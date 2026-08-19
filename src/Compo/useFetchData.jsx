import { useEffect, useState, useCallback } from "react";
import { getProducts } from "./productsApi";

export default function useFetchData() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [retryCount, setRetryCount] = useState(0);

  const fetchProducts = useCallback(async () => {
    try {
      setLoading(true);
      setError("");
      const response = await getProducts();
      setProducts(response.data.products);
    } catch {
      setError("Unable to Load Products ❌");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts, retryCount]);

  function retry() {
    setRetryCount((count) => count + 1);
  }
  return {
    products,
    loading,
    error,
    retry,
  };
}
