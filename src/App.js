import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Clients from './components/Clients';
import Banner from './components/Banner';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Clients/>
      <Banner/>
      <Testimonials/>
      <FAQ/>
      <Footer/>
    </div>
  );
}

export default App;
