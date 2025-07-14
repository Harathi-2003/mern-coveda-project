import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Signup from './Signup';
import Login from './Login';
import Products from './Products';
import AddProduct from './AddProduct';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/signup">Signup</Link> |{" "}
          <Link to="/login">Login</Link> |{" "}
          <Link to="/products">Products</Link> |{" "}
          <Link to="/add-product">Add Product</Link>
        </nav>

        <hr />

        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/products" element={<Products />} />
          <Route path="/add-product" element={<AddProduct />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
