import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import Header from './components/Header';
import Home from './pages/Home';
import Products from './pages/Products';
import Horoscope from './pages/Horoscope';
import logo from './Assets/logo.png';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Welcome to Maxixe Studios - Your source for Crystal Jewellery, Tarot sessions and Horoscope insights!

            Maxixe Magic
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
        <Routes>
          <Route path="/" exact component={<Home />} />
          <Route path="/Products" component={<Products/>} />
          <Route path="/Horoscope" component={<Horoscope />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

