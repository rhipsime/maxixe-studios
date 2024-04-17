import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.css'; 

const Header = () => {
    return (
        <header className="maxixe-header">
            <nav className="navbar navbar-expand-lg navbar-light custom-navbar">
                <div className="container">
                    <Link className="navbar-brand" to="/">Maxixe Studios</Link>
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
                </div>
            </nav>
        </header>
    );
}

export default Header;

