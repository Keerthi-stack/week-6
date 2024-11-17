import React from 'react';

function MyComponent() {
  return (
    <div>
      <h2>Here is an image in JSX:</h2>
      <img 
        src="https://via.placeholder.com/400"  // Inline image source URL
        alt="Placeholder Image"                // Alt text for the image (important for accessibility)
        style={{ width: '100%', height: 'auto' }}  // Optional inline styles for resizing
      />
    </div>
  );
}

export default MyComponent;
