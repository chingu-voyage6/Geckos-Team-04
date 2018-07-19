import React from 'react';
import styled from 'styled-components';
import Layout from '../../Layout/Layout';
import NearMeHero from './Sections/NearMeHero';
import HowTTWorksSection from '../ExplorePage/Sections/HowTTWorksSection';
import OtherServices from './Sections/OtherServices';
import CategoryBar from '../../Shared/CategoryBar/CategoryBar';
import {
  HouseIconSmall,
  ConfettiIconSmall,
  CakeIconSmall,
  FlowerIconSmall,
  AppleIconSmall,
  ThreeDotsIconSmall,
} from '../../Shared/Icon/Icon';

const iconData = [
  {
    icon: HouseIconSmall,
    to: '/home-improvement',
    categoryTitle: 'Home',
  },
  {
    icon: CakeIconSmall,
    to: '/weddings',
    categoryTitle: 'Weddings',
  },
  {
    icon: ConfettiIconSmall,
    to: '/events',
    categoryTitle: 'Events',
  },

  {
    icon: FlowerIconSmall,
    to: '/wellness',
    categoryTitle: 'Wellness',
  },
  {
    icon: AppleIconSmall,
    to: '/lessons',
    categoryTitle: 'Lessons',
  },
  {
    icon: ThreeDotsIconSmall,
    to: '/more-services',
    categoryTitle: 'More',
  },
];
const BarWrapper = styled.div`
  position: absolute;
  width: 100%;
  top: 60px;
  background: rgba(47, 48, 51, 0.7);
`;

const StyledCategoryBar = styled(CategoryBar)`
  max-width: 946px;
  margin: auto;
  height: 55px;
  align-items: center;
  overflow-x: auto;

  ::-webkit-scrollbar {
    display: none;
  }
  > li {
    padding-left: 15px;
    padding-right: 15px;
  }
  > li > a {
    color: #fff !important;
  }
`;

class ServiceNearMe extends React.Component {
  render() {
    return (
      <Layout>
        <BarWrapper>
          <StyledCategoryBar categories={iconData} />
        </BarWrapper>
        <NearMeHero />
        <HowTTWorksSection />
        <OtherServices />
      </Layout>
    );
  }
}
export default ServiceNearMe;
