import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container'; // Import Container from react-bootstrap
import logo from '../Assets/logo.png'; // Import your logo image
import styles from '/Users/arie/maxixe-studios/src/components/Header.css'

function Header() {
    return (
        <header>
            <Container> {/* Wrap the navigation bar within a Container */}
                <nav className="navbar navbar-expand-lg navbar-light custom-navbar">
                    <Link className="navbar-brand" to="/">
                    <div className="logo-container">
                            <img src={logo} className="logo" alt="Maxixe Studios Logo" />
                        </div>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/products">Products</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/horoscope">Horoscope</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </Container>
        </header>
    );
}

export default Header;






