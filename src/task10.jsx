import React from 'react';


function Header() {
  return (
    <header>
      <h1>Welcome to My React App!</h1>
      <p>This is the header of the app.</p>
    </header>
  );
}


function Sidebar() {
  return (
    <aside>
      <h2>Sidebar</h2>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </aside>
  );
}


function Footer() {
  return (
    <footer>
      <p>&copy; 2024 My React App. All rights reserved.</p>
    </footer>
  );
}

function App() {
  return (
    <div>

      <Header />

     
      <Sidebar />

      <main>
        <h2>Main Content Goes Here</h2>
        <p>Welcome to the main content of the app.</p>
      </main>


      <Footer />
    </div>
  );
}

export default App;
