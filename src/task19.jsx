import React from 'react';

function App() {
  
  function ProductCard(props) {
    return (
      <div className="product-card" style={styles.card}>
        <h2>{props.name}</h2>
        <p><strong>Price:</strong> ${props.price}</p>
        <p><strong>Description:</strong> {props.description}</p>
      </div>
    );
  }

  return (
    <div>
      <h1>Product List</h1>
      
      <ProductCard 
        name="Awesome Product" 
        price="29.99" 
        description="This is an amazing product that solves many problems!" 
      />
      
      <ProductCard 
        name="Cool Gadget" 
        price="99.99" 
        description="A cool gadget that makes your life easier." 
      />
      
      <ProductCard 
        name="Stylish Jacket" 
        price="49.99" 
        description="A trendy jacket that keeps you warm and stylish." 
      />
    </div>
  );
}

const styles = {
  card: {
    border: '1px solid #ccc',
    padding: '16px',
    margin: '10px',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
  }
};

export default App;

  