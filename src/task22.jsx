import React, { useState } from 'react';

function App() {
  
  function Counter() {

    const [count, setCount] = useState(0);

    
    const increment = () => {
      setCount(count + 1);
    };

    
    const decrement = () => {
      setCount(count - 1);
    };

    return (
      <div style={styles.counterContainer}>
        <h2>Counter: {count}</h2>
        <button onClick={increment} style={styles.button}>Increment</button>
        <button onClick={decrement} style={styles.button}>Decrement</button>
      </div>
    );
  }

  return (
    <div>
      <h1>Counter Example</h1>
      <Counter />
    </div>
  );
}


const styles = {
  counterContainer: {
    textAlign: 'center',
    marginTop: '50px',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '10px',
    width: '200px',
    margin: '0 auto',
  },
  button: {
    margin: '10px',
    padding: '10px',
    fontSize: '16px',
    cursor: 'pointer',
    border: '1px solid #007bff',
    backgroundColor: '#007bff',
    color: 'white',
    borderRadius: '5px',
    transition: 'background-color 0.3s',
  }
};

export default App;
