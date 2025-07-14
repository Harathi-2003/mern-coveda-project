import React, { useState } from 'react';
import axios from 'axios';

function AddProduct() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [message, setMessage] = useState('');

  const handleAddProduct = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');

    if (!token) {
      setMessage('❌ You must be logged in to add products.');
      return;
    }

    try {
      const res = await axios.post(
        'http://localhost:3000/api/products',
        { name, price },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setMessage(`✅ Product added: ${res.data.name}`);
      setName('');
      setPrice('');
    } catch (err) {
      setMessage('❌ Failed to add product. Make sure token is valid.');
    }
  };

  return (
    <div>
      <h2>Add Product</h2>
      <form onSubmit={handleAddProduct}>
        <input
          type="text"
          placeholder="Product Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        /><br/>
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        /><br/>
        <button type="submit">Add Product</button>
      </form>
      <p>{message}</p>
    </div>
  );
}

export default AddProduct;
