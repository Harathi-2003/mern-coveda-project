import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Products() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      const token = localStorage.getItem('token');

      if (!token) {
        setError('❌ You must be logged in to view products.');
        return;
      }

      try {
        const res = await axios.get('http://localhost:3000/api/products', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setProducts(res.data);
      } catch (err) {
        setError('❌ Failed to fetch products. Token may be invalid.');
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h2>Product List</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <ul>
        {products.map((product) => (
          <li key={product._id}>
            <strong>{product.name}</strong> — ₹{product.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Products;
