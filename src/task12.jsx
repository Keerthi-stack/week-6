import React from 'react';


function Button({ text, color }) {
  return (
    <button style={{ backgroundColor: color, color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px' }}>
      {text}
    </button>
  );
}


function App() {
  return (
    <div>
      <h1>Reusable Button Component Example</h1>
      
      
      <Button text="Click Me!" color="blue" />
      <Button text="Submit" color="green" />
      <Button text="Cancel" color="red" />
      <Button text="Learn More" color="orange" />
    </div>
  );
}

export default App;
