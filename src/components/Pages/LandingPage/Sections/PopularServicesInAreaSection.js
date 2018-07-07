import React from 'react';
import styled from 'styled-components';
import Section from '../../../Layout/Section/Section';
import { ServiceLocationCard } from '../../../Shared/Cards/ServiceCard/ServiceCard';

const StyledSection = styled(Section)`
  > div {
    padding-top: 100px;
  }
`;

const CrouselNeeded = styled.div`
  display: flex;
`;

const prop = {
  name: 'House cleaning',
  pros: 0,
  image: 'https://source.unsplash.com/collection/1791908/250x350',
  // image: 'http://thecatapi.com/api/images/get?format=src&size=full',
  // image: 'http://thecatapi.com/api/images/get',
  width: '300px',
};
const PopularServicesInAreaSection = () => (
  <StyledSection isGray hasBorder>
    <h3>Popular services in Your Area.</h3>
    <CrouselNeeded>
      <ServiceLocationCard service={prop} />
      <ServiceLocationCard service={prop} />
      <ServiceLocationCard service={prop} />
      <ServiceLocationCard service={prop} />
    </CrouselNeeded>
  </StyledSection>
);

export default PopularServicesInAreaSection;
