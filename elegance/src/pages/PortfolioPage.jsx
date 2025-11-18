import React from 'react';
import PortfolioHeader from '../components/PortfolioHeader';
import PortfolioGallery from '../components/PortfolioGallery';
import DiscussProjectSection from '../components/DiscussProjectSection';

function PortfolioPage() {
  return (
    <>
      <PortfolioHeader />
      <PortfolioGallery />
      <DiscussProjectSection />
    </>
  );
}

export default PortfolioPage;