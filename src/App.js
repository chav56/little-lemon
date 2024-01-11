import React from 'react';
import Nav from "./Components/Nav";
import Hero from "./Components/Hero";
import Highlights from './Components/Highlights';
import About from "./Components/About";
import Footer from "./Components/Footer";
import "./styles.css";

function App() {
  return (
    <>
      <Nav/>
      <Hero/>
      <Highlights/>
      <About/>
      <Footer/>
    </>
  );
}

export default App;
