import React from 'react';
import Layout from '../../Layout/Layout';
import Section from '../../Layout/Section/Section';

import HowTTWorksSection from './Sections/HowTTWorksSection';
import AllServiceSection from './Sections/AllServicesSection';
import ExploreHeroSection from './Sections/ExploreHeroSection';

const explore = () => (
  <Layout>
    <ExploreHeroSection />
    <Section hasBorder>
      <div>Lots and Lots of carousels</div>
    </Section>
    <AllServiceSection />
    <HowTTWorksSection />
  </Layout>
);

export default explore;
