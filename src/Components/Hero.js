import React from 'react';
import restaurantfood from "../assets/restaurantfood.jpg";

function Hero() {
    return (
        <main className="hero">
        <article>
          <h1 className='h1-txt'>Little Lemon</h1>
          <h2 className='h2-txt'>Chicago</h2>
          <p className="hero-txt">We are a family owned</p>
          <p className="hero-txt">Mediterranean restaurant,</p>
          <p className="hero-txt">focused on traditional</p>
          <p className="hero-txt">recipes served with a modern</p>
          <p className="hero-txt">twist.</p>
        </article>
        <button className="reserve">Reserve A Table</button>
        <img className="hero-img" src={restaurantfood} alt='restaurant food'></img>
       </main>
    )
}

export default Hero;