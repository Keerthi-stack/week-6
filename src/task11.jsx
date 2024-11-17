import React from 'react';

function Button({ text }) {
  return (
    <button>{text}</button>
  );
}


function App() {
  return (
    <div>
      <h1>Dynamic Button Example</h1>
      
     
      <Button text="Click Me!" />
      <Button text="Submit" />
      <Button text="Cancel" />
    </div>
  );
}

export default App;
