import React, { useState } from 'react';

function App() {
  
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <h1>Conditional Rendering Example</h1>

      
      {isLoggedIn ? (
        <p>Welcome back, User!</p>
      ) : (
        <p>Please log in to access your account.</p>
      )}

      
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? 'Log out' : 'Log in'}
      </button>
    </div>
  );
}

export default App;
