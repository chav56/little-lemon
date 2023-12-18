import React from 'react';
import logo from "../assets/Logo.svg";


function Header() {
    return (
    <a href="/" className="logo">
      <img src={logo} alt=""/>
    </a>
    )
}

export default Header;
