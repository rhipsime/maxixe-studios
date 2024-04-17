import React from 'react';
import { Link } from 'react-router-dom';
import logo from '/Users/arie/maxixe-studios/src/Assets/logo.png';


function Header() {
  return (
    <header style={{ background: '#FFC95F', padding: '10px 0', borderBottom: '1px solid #dee2e6' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link to="/" style={{ textDecoration: 'none', color: '#343a40', fontSize: '1.5rem' }}>
          <img src= {logo} alt="Logo" style={{ width: '30px', marginRight: '10px' }} />
          Maxixe Studios
        </Link>
        <nav>
          <ul style={{ listStyle: 'none', display: 'flex', gap: '10px' }}>
            <li><Link to="/" style={{ textDecoration: 'none', color: '#343a40' }}>Home</Link></li>
            <li><Link to="/products" style={{ textDecoration: 'none', color: '#343a40' }}>Products</Link></li>
            <li><Link to="/horoscope" style={{ textDecoration: 'none', color: '#343a40' }}>Horoscope</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;

