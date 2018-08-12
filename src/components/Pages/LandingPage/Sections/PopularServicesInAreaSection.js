import React from 'react';
import styled from 'styled-components';
import Section from '../../../Layout/Section/Section';
import { cardContent } from '../../../Shared/Cards/card-data';
import Carousel from '../../../Shared/Carousel/Carousel';

const popularServices = cardContent.filter((_, idx) => idx < 7);

const StyledSection = styled(Section)`
  > div {
    padding-top: 100px;

    @media (min-width: 701px) {
      > div {
        padding-top: 40px;
      }
    }
  }
`;

const PopularServicesInAreaSection = () => (
  <StyledSection isGray hasBorder>
    <h3>Popular services in Your Area. </h3>
    <Carousel cardContent={popularServices} cardType="location" />
  </StyledSection>
);

export default PopularServicesInAreaSection;
