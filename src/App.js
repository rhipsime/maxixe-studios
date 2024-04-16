import React from 'react';
import './App.css';
import logo from './Assets/logo.png'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {/* Replace the text with your own content */}
          Welcome to Maxixe Studios - Your source for beautiful jewellery and Horoscope insights!
        </p>
        <a
          className="App-link"
          href="https://maxixestudios.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Explore Now
        </a>
      </header>
    </div>
  );
}

export default App;
