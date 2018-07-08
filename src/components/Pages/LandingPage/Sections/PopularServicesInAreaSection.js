import React from 'react';
import styled from 'styled-components';
import Section from '../../../Layout/Section/Section';

import { CarouselTempLocation } from '../../../Shared/CarouselTemp/CarouselTemp';

const StyledSection = styled(Section)`
  > div {
    padding-top: 40px;
  }
`;

const PopularServicesInAreaSection = () => (
  <StyledSection isGray hasBorder>
    <h3>Popular services in Your Area.</h3>
    <CarouselTempLocation />
  </StyledSection>
);

export default PopularServicesInAreaSection;
