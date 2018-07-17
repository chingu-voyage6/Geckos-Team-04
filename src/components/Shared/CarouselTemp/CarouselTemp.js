import React from 'react';
import styled from 'styled-components';
import { ServiceLocationCard, ServicePricingCard } from '../Cards/ServiceCard/ServiceCard';

const CrouselNeeded = styled.div`
  display: flex;
  margin: 0 -8px;
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

const CarouselTempLocation = () => (
  <CrouselNeeded>
    <ServiceLocationCard {...prop} />
    <ServiceLocationCard {...prop} />
    <ServiceLocationCard {...prop} />
  </CrouselNeeded>
);

const CarouselTempPricing = () => (
  <CrouselNeeded>
    <ServicePricingCard {...prop} />
    <ServicePricingCard {...prop} />
    <ServicePricingCard {...prop} />
  </CrouselNeeded>
);

export { CarouselTempLocation, CarouselTempPricing };
