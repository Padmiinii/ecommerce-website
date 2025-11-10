//Frontend (React) Code


// client/src/components/ProductList.jsx
import React, { useState, useEffect } from 'react';

const API_URL = 'http://localhost:3001/api/products'; 

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Function to handle adding items to a hypothetical cart state
  const handleAddToCart = (product) => {
    console.log(`Added ${product.name} to cart! (State management needed here)`);
    alert(`Added ${product.name} to cart!`);
    // NOTE: In a complete app, this function would update a global cart state (e.g., using Context API or Redux)
  };

  useEffect(() => {
    // 1. Fetch data from the Express backend (running on port 3001)
    fetch(API_URL)
      .then(response => {
        // Check if the network response was successful (status 200-299)
        if (!response.ok) {
          throw new Error(`HTTP status ${response.status}: Failed to fetch products.`);
        }
        return response.json();
      })
      .then(data => {
        // 2. Update the state with the received product list
        setProducts(data);
        setLoading(false);
      })
      .catch(err => {
        // 3. Handle any errors during the fetch
        setError(err.message);
        setLoading(false);
      });
  }, []); // The empty dependency array [] ensures this runs only once on component mount

  if (loading) return <div style={{ textAlign: 'center', padding: '50px' }}>Loading products...</div>;
  if (error) return <div style={{ color: 'red', textAlign: 'center', padding: '50px' }}>Error: {error}. Make sure your backend server is running on port 3001.</div>;

  return (
    <div style={{ padding: '20px' }}>
      <h1>E-Commerce Product Explorer</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
        {/* Map through the products array to display each item */}
        {products.map(product => (
          <div key={product._id} style={{ border: '1px solid #ddd', padding: '15px', borderRadius: '8px', boxShadow: '2px 2px 5px rgba(0,0,0,0.1)' }}>
            <h3>{product.name}</h3>
            <p style={{ fontWeight: 'bold', color: '#007bff' }}>${product.price.toFixed(2)}</p>
            <p style={{ fontSize: '0.9em', color: '#555' }}>{product.description}</p>
            <button 
              onClick={() => handleAddToCart(product)}
              style={{ padding: '10px 15px', backgroundColor: '#28a745', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', marginTop: '10px' }}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
