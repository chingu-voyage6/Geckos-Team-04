import React from 'react';
import styled from 'styled-components';
import Layout from '../../Layout/Layout';
import NearMeHero from './Sections/NearMeHero';

const CategoryLinks = styled.div`
  position: absolute;
  width: 100%;
  top: 60px;
  background: rgba(0, 0, 0, 0.5);
  height: 55px;
`;

class ServiceNearMe extends React.Component {
  render() {
    return (
      <Layout>
        <CategoryLinks />
        <NearMeHero />
      </Layout>
    );
  }
}
export default ServiceNearMe;
