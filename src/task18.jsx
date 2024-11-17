import React, { useState } from 'react';

// Functional Greeting Component using useState hook
function Greeting() {
  // useState hook to manage the message state
  const [message, setMessage] = useState('Hello'); // Initial state is 'Hello'

  // Function to toggle the message
  const toggleMessage = () => {
    setMessage(prevMessage => (prevMessage === 'Hello' ? 'Goodbye' : 'Hello'));
  };

  return (
    <div>
      <h1>{message}</h1>
      {/* Button that toggles between 'Hello' and 'Goodbye' */}
      <button onClick={toggleMessage}>Toggle Message</button>
    </div>
  );
}

// App Component (Main Component)
function App() {
  return (
    <div>
      <Greeting />
    </div>
  );
}

export default App;
