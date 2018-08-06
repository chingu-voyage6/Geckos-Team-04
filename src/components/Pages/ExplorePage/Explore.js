import React from 'react';
import Layout from '../../Layout/Layout';
// import Section from '../../Layout/Section/Section';

import HowTTWorksSection from './Sections/HowTTWorksSection';
import AllServiceSection from './Sections/AllServicesSection';
import ExploreHeroSection from './Sections/ExploreHeroSection';
import CarouselSection from './Sections/CarouselSection';

const explore = () => (
  <Layout>
    <ExploreHeroSection />
    <CarouselSection />
    <AllServiceSection />
    <HowTTWorksSection hasBorder />
  </Layout>
);

export default explore;
