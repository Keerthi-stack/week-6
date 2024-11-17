import React, { useState } from 'react';


function Greeting() {
  
  const [message, setMessage] = useState('Hello'); // Initial state is 'Hello'

  const toggleMessage = () => {
    setMessage(prevMessage => (prevMessage === 'Hello' ? 'Goodbye' : 'Hello'));
  };

  return (
    <div>
      <h1>{message}</h1>
      
      <button onClick={toggleMessage}>Toggle Message</button>
    </div>
  );
}


function App() {
  return (
    <div>
      <Greeting />
    </div>
  );
}

export default App;
