import React from 'react';
import styled from 'styled-components';
import Section from '../../../Layout/Section/Section';
import { ServiceLocationCard } from '../../../Shared/Cards/ServiceCard/ServiceCard';

const StyledSection = styled(Section)`
  > div {
    padding-top: 40px;
  }
`;

const CrouselNeeded = styled.div`
  display: flex;
`;

const prop = {
  service: {
    name: 'House cleaning',
    pros: Math.round(Math.random() * 1000),
    image: 'https://source.unsplash.com/collection/1791908/250x350',
  },
  // image: 'http://thecatapi.com/api/images/get?format=src&size=full',
  // image: 'http://thecatapi.com/api/images/get',
  width: '33.3%',
};
const PopularServicesInAreaSection = () => (
  <StyledSection isGray hasBorder>
    <h3>Popular services in Your Area.</h3>
    <CrouselNeeded>
      <ServiceLocationCard {...prop} />
      <ServiceLocationCard {...prop} />
      <ServiceLocationCard {...prop} />
    </CrouselNeeded>
  </StyledSection>
);

export default PopularServicesInAreaSection;
