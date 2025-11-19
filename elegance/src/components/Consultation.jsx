import React from 'react';
import { Link } from 'react-router-dom';

function ConsultationBanner() {
  return (
    <section className="consultation-banner">
      <div className="container">
        <div className="banner-content">
          <h3>Book a Consultation</h3>
          <p>Schedule a complimentary 30-minute consultation to discuss your project goals and explore how we can help.</p>
        </div>
        <Link to="/contact" className="btn btn-light-outline">Schedule Now</Link>
      </div>
    </section>
  );
}

export default ConsultationBanner;