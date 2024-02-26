import React from 'react';
import Nav from "./Components/Nav";
import Main from './Components/Main'
import Specials from './Components/Specials'
import Testimonials from './Components/Testimonials';
import About from './Components/About';
import Footer from "./Components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Nav/>
      <Main/>
      <Specials/>
      <Testimonials/>
      <About/>
      <Footer/>
    </>
  );
}

export default App;
