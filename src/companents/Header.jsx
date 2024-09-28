import React, { useState } from 'react';
// import '../components/Header.css';
import '../companents/Header.css'
import { MdOutlineShoppingCart } from 'react-icons/md';
import { Link } from 'react-router-dom';
// import Reservation from '../components/Reservation';
import Reservation from '../companents/Reservation';

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const cartItems = 3; // Example cart items count

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className='header'>
            <Link to='/' className="header-logo">
                <div className="header-logo-circle">
                    <p>D</p>
                </div>
                <p>Delizi<span className='header-logo-span'>oso</span></p>
            </Link>

            <div className={`header-links ${menuOpen ? 'show' : ''}`}>
                <Link to='/' onClick={() => setMenuOpen(false)}>Home</Link>
                <Link to='/Menu' onClick={() => setMenuOpen(false)}>Menu</Link>
                <Link to='/About' onClick={() => setMenuOpen(false)}>About us</Link>
                <Link to='/OrderOnline' onClick={() => setMenuOpen(false)}>Order online</Link>
                <Link to='/Reservation' onClick={() => setMenuOpen(false)}>Reservation</Link>
                <Link to='/Contact' onClick={() => setMenuOpen(false)}>Contact us</Link>
            </div>

            <div className="header-counter-button">
                <div className="header-counter">
                    <MdOutlineShoppingCart />
                    <div className="header-counter-num">
                        <sup>{cartItems}</sup>
                    </div>
                </div>

                <Link to='/Login'>
                    <button>Login</button>
                </Link>

                <div className={`header-counter-button-rectangles ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
                    <div className="header-counter-button-rectangle"></div>
                    <div className="header-counter-button-rectangle"></div>
                    <div className="header-counter-button-rectangle"></div>
                    <div className="header-counter-button-circle"></div>
                </div>
            </div>
        </div>
    );
}

export default Header;
