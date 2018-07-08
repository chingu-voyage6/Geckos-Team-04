import React from 'react';
import styled from 'styled-components';
import Layout from '../../Layout/Layout';
import Section from '../../Layout/Section/Section';
import HeroSection from './Sections/HeroSection';
import NavPillBar from '../../Shared/NavPillBar/NavPillBar';
import PopularServicesInAreaSection from './Sections/PopularServicesInAreaSection';
import CategorieTabsSection from './Sections/CategoryTabs/CategoryTabsSection';
import CostEstimateSection from './Sections/CostEstimateSection';
import OpenForBusinessSection from './Sections/OpenForBusinessSection';

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
    <CategorieTabsSection />
    <CostEstimateSection />
    <OpenForBusinessSection />
  </Layout>
);

export default landing;
