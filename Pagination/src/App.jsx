import { useEffect, useState } from "react";
import "./App.css";
import ProductCard from "./Components/ProductCard";
import Pagination from "./Components/Pagination";
import { fetchProducts } from "./services/productService";

const PAGE_SIZE = 12;

function App() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    const loadData = async () => {
      try {
        setLoading(true);
        setError(null);
        // Fetching data batch
        const data = await fetchProducts(100, 0);
        if (isMounted) {
          setProducts(data.products || []);
        }
      } catch (err) {
        if (isMounted) {
          setError(
            err.message || "Something went wrong while fetching products.",
          );
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    loadData();
    return () => {
      isMounted = false;
    };
  }, []);

  const totalPages = Math.ceil(products.length / PAGE_SIZE);
  const start = currentPage * PAGE_SIZE;
  const currentProducts = products.slice(start, start + PAGE_SIZE);

  if (loading) {
    return <div className="status-message">Loading products...</div>;
  }

  if (error) {
    return <div className="status-message error">{error}</div>;
  }

  if (!products.length) {
    return <div className="status-message">No Products Found</div>;
  }

  return (
    <main className="app-container">
      <div className="product-container">
        {currentProducts.map((p) => (
          <ProductCard key={p.id} image={p.thumbnail} title={p.title} />
        ))}
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </main>
  );
}

export default App;
