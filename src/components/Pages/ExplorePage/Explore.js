import React from 'react';
import Layout from '../../Layout/Layout';
import Section from '../../Layout/Section/Section';

import HowTTWorksSection from './Sections/HowTTWorksSection';
import AllServiceSection from './Sections/AllServicesSection';

const explore = () => (
  <Layout>
    <Section isGray hasBorder>
      <div>
        <h1>Hire skilled pros for over 1,000 services.</h1>
      </div>
    </Section>
    <Section hasBorder>
      <div>Lots and Lots of carousels</div>
    </Section>
    <AllServiceSection />
    <HowTTWorksSection />
  </Layout>
);

export default explore;
