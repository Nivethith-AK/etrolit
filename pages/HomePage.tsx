import React from 'react';
import { 
  HeroSection, 
  WhatWeServeSection, 
  ServicesSummarySection, 
  PortfolioSection, 
  ContactSection 
} from '../components/HomeSections';

export const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <WhatWeServeSection />
      <ServicesSummarySection />
      <PortfolioSection />
      <ContactSection />
    </div>
  );
};