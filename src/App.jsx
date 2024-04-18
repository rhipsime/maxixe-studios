// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import Header from './components/Header';
import Home from './pages/Home';
import Products from './pages/Products';
import Horoscope from './pages/Horoscope';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/Products" elementt={<Products/>} />
          <Route path="/Horoscope" element={<Horoscope />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


