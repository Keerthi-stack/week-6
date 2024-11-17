import React from 'react';

function MyComponent() {
  const style = {
    color: 'blue',
    fontSize: '20px',
    textAlign: 'center'
  };

  return (
    <div 
      className="my-container"   // Using className for CSS class
      id="unique-id"             // Using id attribute
      style={style}              // Applying inline styles
    >
      <h2>Welcome to My Styled Component!</h2>
      <p>This is a paragraph with custom styles and attributes.</p>
    </div>
  );
}

export default MyComponent;
