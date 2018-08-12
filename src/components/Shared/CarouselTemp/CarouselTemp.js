import React from 'react';
import styled from 'styled-components';
import { ServiceLocationCard, ServicePricingCard } from '../Cards/ServiceCard/ServiceCard';

const CrouselNeeded = styled.div`
  display: flex;

  width: 100%;
  > a:first-child {
    display: none;
    padding-left: 0;
  }
  > a:last-child {
    padding-right: 0;
  }
  @media (min-width: 701px) {
    > a:first-child {
      display: initial;
    }
  }
`;

const CardWrapper = styled(Link)`
  width: 50%;
  padding: 8px;
  display: block;
  text-decoration: none;

  @media (min-width: 701px) {
    width: 33.33%;
  }
`;
const prop = {
  service: {
    name: 'House cleaning',
    pros: Math.round(Math.random() * 1000),
    image: 'https://source.unsplash.com/collection/1791908/250x350',
  },
  // image: 'http://thecatapi.com/api/images/get?format=src&size=full',
  // image: 'http://thecatapi.com/api/images/get',
  width: '100%',
};

const CarouselTempLocation = () => (
  <CrouselNeeded>
    <CardWrapper>
      <ServiceLocationCard {...prop} />
    </CardWrapper>
    <CardWrapper>
      <ServiceLocationCard {...prop} />
    </CardWrapper>
    <CardWrapper>
      <ServiceLocationCard {...prop} />
    </CardWrapper>
  </CrouselNeeded>
);

const CarouselTempPricing = () => (
  <CrouselNeeded>
    <CardWrapper>
      <ServicePricingCard {...prop} />
    </CardWrapper>
    <CardWrapper>
      <ServicePricingCard {...prop} />
    </CardWrapper>
    <CardWrapper>
      <ServicePricingCard {...prop} />
    </CardWrapper>
  </CrouselNeeded>
);

export { CarouselTempLocation, CarouselTempPricing };
