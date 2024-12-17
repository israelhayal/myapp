// src/pages/Products.jsx
import React from 'react';

const Products = () => {
  // Mock product data
  const products = [
    { id: 1, name: 'Product A', price: '$10', image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Product B', price: '$20', image: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Product C', price: '$30', image: 'https://via.placeholder.com/150' },
  ];

  return (
    <div style={{ padding: '20px' }}>
      <h1>Products</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
        {products.map((product) => (
          <div key={product.id} style={{ border: '1px solid #ccc', padding: '10px' }}>
            <img src={product.image} alt={product.name} style={{ width: '100%' }} />
            <h2>{product.name}</h2>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
