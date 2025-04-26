import React from 'react';
import HeroSection from '../components/home/HeroSection';
import FeatureSection from '../components/home/FeatureSection';
import StatsSection from '../components/home/StatsSection';
import TestimonialSection from '../components/home/TestimonialSection';
import CallToAction from '../components/home/CallToAction';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <FeatureSection />
      <StatsSection />
      <TestimonialSection />
      <CallToAction />
    </div>
  );
};

export default HomePage;