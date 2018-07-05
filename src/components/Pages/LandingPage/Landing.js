import React from 'react';
import Layout from '../../Layout/Layout';
import Section from '../../Layout/Section/Section';
import HeroSection from './Sections/HeroSection';

const landing = () => (
  <Layout>
    <HeroSection />
    <Section isGray hasBorder>
      <h1>Popular services in your area</h1>
    </Section>
    <Section hasBorder>
      <h1>Large image carousel</h1>
    </Section>
    <Section isGray hasBorder>
      <h1>Home Weddings Events Wellness Lessons Pets(tabs thing with pictures)</h1>
    </Section>
    <Section hasBorder>
      <h1>Get free cost estimates.</h1>
    </Section>
    <Section isGray hasBorder>
      <h1>Open for business.</h1>
    </Section>
  </Layout>
);

export default landing;
