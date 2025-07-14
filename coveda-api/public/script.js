fetch('/api/products')
  .then(res => res.json())
  .then(products => {
    const list = document.getElementById('product-list');
    products.forEach(product => {
      const item = document.createElement('li');
      item.textContent = `${product.name} - ₹${product.price}`;
      list.appendChild(item);
    });
  })
  .catch(err => {
    console.error('Failed to fetch products:', err);
  });
