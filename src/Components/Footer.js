import React from 'react';
import footer_logo from "../assets/footer_logo.png";

function Footer() {
    return (
        <footer className="footer-menu">
            <img className="footer-img" src={footer_logo} alt="Little Lemon Footer logo"></img>
            <ul className="footer-menu-ul">
            <h2 className='footer-h2'>Navigation</h2>
            <li>Home</li>
            <li>About</li>
            <li>Menu</li>
            <li>Reservations</li>
            <li>Order online</li>
            </ul>
                <ul className="footer-menu-ul2">
                <h2 className='footer-h2'>Contact</h2>
                <li>Phone number</li>
                <li>Email</li>
                <li>Address</li>
                </ul>
        </footer>
    )
}

export default Footer;