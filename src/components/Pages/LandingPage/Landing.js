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
