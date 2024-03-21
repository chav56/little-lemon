import React from 'react';
//import { Link } from "react-router-dom";
import restaurantfood from "../assets/restaurantfood.jpg";

const Header = () => {
    return (
        <header className="header">
        <section>
          <div className='hero'>
          <h1 className='h1-txt'>Little Lemon</h1>
          <h2 className='h2-txt'>Chicago</h2>
          <p className="header-txt">We are a family owned Mediterranean restaurant, focused
           on traditional recipes served with a modern twist.</p>
           {/* <Link to="/bookings"> */}
           <button className="reserve">Reserve A Table</button>
          {/* </Link> */}
          <img className="header-img" src={restaurantfood} alt='restaurant food'></img>
          </div>
        </section>
       </header>
    );
};

export default Header;