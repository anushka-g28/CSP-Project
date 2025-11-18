import React from 'react';
import { Link } from 'react-router-dom'; 

function DiscussProjectSection() {
  return (
    <section className="discuss-project-section">
      <div className="container">
        <h2>Let's Create Your Dream Space</h2>
        <p>Every project begins with a conversation. Share your vision with us.</p>
        <Link to="/contact" className="btn btn-light-transparent">Discuss Your Project</Link>
      </div>
    </section>
  );
}

export default DiscussProjectSection;