/* eslint react/prop-types: 0 */

import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import CategoryHeading from './CategoryHeading';
import ServicesSection from './ServicesSection';
import ServiceLink from './ServiceLink';
import { PureServiceCard } from '../../Shared/Cards/ServiceCard/ServiceCard';

const StyledCategorie = styled.div`
  padding-bottom: 2rem;
  border-bottom: 1px solid #eee;
  width: 100%;
`;

const CardWrapper = styled(Link)`
  min-width: 75%;
  padding: 5px;
  text-decoration: none;
  margin-bottom: 5px;

  @media (min-width: 701px) {
    min-width: 50%;
    max-width: 50%;
  }
`;

const CardMobileScroll = styled.div`
  display: flex;
  overflow-x: scroll;
  flex-direction: row;
  flex-wrap: nowrap;
  margin-bottom: 10px;
  @media (min-width: 701px) {
    flex-wrap: wrap;
    overflow: visible;
  }
`;

const categorieSection = ({ categoryId, categoryTitle, cards, categoryServices }) => {
  const serviceCards = cards ? (
    <ServicesSection>
      <CardMobileScroll>
        {cards.map(({ title, imgUrl, to }) => (
          <CardWrapper to={to} key={title}>
            <PureServiceCard
              width="100%"
              service={{ name: title, image: 'http://thecatapi.com/api/images/get' }}
            />
          </CardWrapper>
        ))}
      </CardMobileScroll>
    </ServicesSection>
  ) : null;

  return (
    <StyledCategorie id={categoryId}>
      <CategoryHeading heading={categoryTitle} />
      {serviceCards}
      <ServicesSection>
        {categoryServices.map(service => (
          <ServiceLink
            key={service}
            to={`/${service
              .toLowerCase()
              .trim()
              .replace(/ /g, '-')}/near-me`}
          >
            {service}
          </ServiceLink>
        ))}
      </ServicesSection>
    </StyledCategorie>
  );
};

export default categorieSection;
