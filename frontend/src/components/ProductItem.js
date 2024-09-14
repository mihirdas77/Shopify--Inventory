import React, { useEffect, useState } from 'react';
import { fetchProducts, deleteProduct } from '../api/productService';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch (error) {
        setError('Failed to fetch products');
        console.error('Error fetching products:', error);
      }
    };

    loadProducts();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteProduct(id);
      setProducts(products.filter(product => product._id !== id));
    } catch (error) {
      setError('Failed to delete product');
      console.error('Error deleting product:', error);
    }
  };

  return (
    <div>
      <h2>Product List</h2>
      {error && <p>{error}</p>}
      <ul>
        {products.map(product => (
          <li key={product._id}>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>${product.price.toFixed(2)}</p>
            <button onClick={() => handleDelete(product._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
