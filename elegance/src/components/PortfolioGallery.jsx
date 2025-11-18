import React from 'react';
import HeroImage from '../assets/hero-image.jpg'; 

const placeholderImg = HeroImage;

function PortfolioGallery() {
  return (
    <section className="portfolio-gallery">
      <div className="container">
        {/* --- Filter Buttons --- */}
        <div className="portfolio-filters">
          <button className="filter-btn active">All</button>
          <button className="filter-btn">Living</button>
          <button className="filter-btn">Bedroom</button>
          <button className="filter-btn">Kitchen</button>
          <button className="filter-btn">Bathroom</button>
          <button className="filter-btn">Office</button>
          <button className="filter-btn">Outdoor</button>
        </div>

        {/* --- Image Grid --- */}
        <div className="portfolio-grid">
          <div className="portfolio-item">
            <img src={placeholderImg} alt="Portfolio Project 1" />
            <div className="portfolio-overlay">
              <h4>Contemporary Kitchen</h4>
            </div>
          </div>
          <div className="portfolio-item">
            <img src={placeholderImg} alt="Portfolio Project 2" />
            <div className="portfolio-overlay">
              <h4>Contemporary Kitchen</h4>
            </div>
          </div>
          <div className="portfolio-item">
            <img src={placeholderImg} alt="Portfolio Project 3" />
            <div className="portfolio-overlay">
              <h4>Contemporary Kitchen</h4>
            </div>
          </div>
          <div className="portfolio-item">
            <img src={placeholderImg} alt="Portfolio Project 4" />
            <div className="portfolio-overlay">
              <h4>Contemporary Kitchen</h4>
            </div>
          </div>
          <div className="portfolio-item">
            <img src={placeholderImg} alt="Portfolio Project 5" />
            <div className="portfolio-overlay">
              <h4>Contemporary Kitchen</h4>
            </div>
          </div>
          <div className="portfolio-item">
            <img src={placeholderImg} alt="Portfolio Project 6" />
            <div className="portfolio-overlay">
              <h4>Contemporary Kitchen</h4>
            </div>
          </div>
          <div className="portfolio-item">
            <img src={placeholderImg} alt="Portfolio Project 7" />
            <div className="portfolio-overlay">
              <h4>Contemporary Kitchen</h4>
            </div>
          </div>
          <div className="portfolio-item">
            <img src={placeholderImg} alt="Portfolio Project 8" />
            <div className="portfolio-overlay">
              <h4>Contemporary Kitchen</h4>
            </div>
          </div>
          <div className="portfolio-item">
            <img src={placeholderImg} alt="Portfolio Project 9" />
            <div className="portfolio-overlay">
              <h4>Contemporary Kitchen</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PortfolioGallery;