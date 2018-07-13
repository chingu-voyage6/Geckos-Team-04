import React from 'react';
import styled from 'styled-components';
import Layout from '../../Layout/Layout';
import Section from '../../Layout/Section/Section';
import HeroSection from './Sections/HeroSection';
import NavPillBar from '../../Shared/NavPillBar/NavPillBar';
import PopularServicesInAreaSection from './Sections/PopularServicesInAreaSection';

const NavPillContainer = styled.div`
  height: 0;
`;

const landing = () => (
  <Layout>
    <HeroSection />
    <NavPillContainer>
      <NavPillBar />
    </NavPillContainer>
    <PopularServicesInAreaSection />
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
