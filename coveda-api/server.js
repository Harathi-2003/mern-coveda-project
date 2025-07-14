const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://puttaharathi:WYes7tVQo0BQsbmF@cluster0.6jz2tis.mongodb.net/coveda?retryWrites=true&w=majority')
.then(() => console.log('✅ MongoDB Connected'))
.catch(err => console.error('❌ Connection Error:', err));

const authRoutes = require('./routes/auth');

app.use(express.json());
app.use('/api/auth', authRoutes);





app.use(express.static(path.join(__dirname, 'public')));

const productRoutes = require('./routes/products');
app.use('/api/products', productRoutes);


app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
