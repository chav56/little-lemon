import React from 'react';

function About() {
    return (
      <article>
          <section className='about'>
          <h1 className='about-h1'>Little Lemon</h1>
          <h2 className='about-h2'>Chicago</h2>
          <div className='about-txt'>
          <p>The Little Lemon restaurant is owned by two Italian brothers, <br/> Adrian and Mario.
          Their menu items are inspired by Italian, <br/> Greek and Turkish cuisines as well as family recipes.<br/>
          Mario uses his expertise as a chef to create new culinary <br/> experiences and Adrian focuses on the marketing.
          </p>
          </div>
          </section>
            <section className='aboutImgs'>
            <img className='aboutA' src={require('../assets/Mario&AdrianA.jpg')} alt="Little Lemon owners Adrian and Mario talking."></img>
            <img className='aboutB' src={require('../assets/Mario&AdrianB.jpg')} alt="Little Lemon owners Adrian and Mario laughing."></img>
            </section>
      </article>
    )
}

export default About;