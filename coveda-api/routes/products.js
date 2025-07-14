const express = require('express');
const router = express.Router();
const Product = require('../models/Product');
const authenticate = require('../middleware/auth');


router.get('/', authenticate, async (req, res) => {
  try {
    const products = await Product.find(); // fetch from DB
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


router.post('/', authenticate, async (req, res) => {
  const { name, price } = req.body;

  try {
    const newProduct = new Product({ name, price });
    await newProduct.save(); 
    res.status(201).json(newProduct);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});


router.put('/:id', authenticate, async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedProduct);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// ✅ DELETE a product
router.delete('/:id', authenticate, async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.status(204).send();
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
