import React from 'react';


function Header() {
  return (
    <header>
      <h1>Welcome to My React App!</h1>
      <p>This is the header of the app.</p>
    </header>
  );
}


function App() {
  return (
    <div>
      
      <Header />  

      <main>
        <h2>Main Content Goes Here</h2>
        <p>Welcome to the main content of the app.</p>
      </main>
    </div>
  );
}

export default App;
