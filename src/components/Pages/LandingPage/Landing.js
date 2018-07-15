import React from 'react';
import styled from 'styled-components';
import Layout from '../../Layout/Layout';
import HeroSection from './Sections/HeroSection';
import NavPillBar from '../../Shared/NavPillBar/NavPillBar';
import PopularServicesInAreaSection from './Sections/PopularServicesInAreaSection';
import CategorieTabsSection from './Sections/CategoryTabs/CategoryTabsSection';
import CostEstimateSection from './Sections/CostEstimateSection';
import OpenForBusinessSection from './Sections/OpenForBusinessSection';

import AboutThumbtack from './Sections/AboutThumbtackSection';

const NavPillContainer = styled.div`
  height: 0;
  padding-left: 16px;
  padding-right: 16px;
  width: 100%;
  margin: 0 auto;

  @media only screen and (min-width: 482px) {
    padding-left: 32px;
    padding-right: 32px;
  }

  @media only screen and (min-width: 1026px) {
    max-width: 960px;
    padding-left: 0px;
    padding-right: 0px;
  }
`;

const landing = () => (
  <Layout>
    <HeroSection />
    <NavPillContainer>
      <NavPillBar />
    </NavPillContainer>
    <PopularServicesInAreaSection />
    <AboutThumbtack />
    <CategorieTabsSection />
    <CostEstimateSection />
    <OpenForBusinessSection />
  </Layout>
);

export default landing;
