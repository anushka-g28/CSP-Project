import React from 'react';
import { Link } from "react-router-dom"; 
import HeroImage from '../assets/hero-image1.jpg'; 

function Hero() {
  return (
    <header className="hero">
      <div className="hero-content">
        <h1>Curated Furniture for Modern Living</h1>
        <p>Transform your space with timeless pieces crafted for beauty, comfort, and lasting quality</p>
        <div className="hero-buttons">
          <Link to="/portfolio" className="btn btn-primary">Explore Collections &rarr;</Link>
          <Link to="/contact" className="btn btn-secondary">Schedule Consultation</Link>
        </div>
      </div>
    </header>
  );
}

export default Hero;