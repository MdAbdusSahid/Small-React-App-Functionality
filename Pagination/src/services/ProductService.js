export const fetchProducts = async (limit = 100, skip = 0) => {
  const response = await fetch(
    `https://dummyjson.com/products?limit=${limit}&skip=${skip}`,
  );
  if (!response.ok) {
    throw new Error(`Failed to fetch products: ${response.statusText}`);
  }
  return response.json();
};
