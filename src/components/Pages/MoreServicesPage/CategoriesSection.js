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
  width: 50%;
  padding: 5px;
  text-decoration: none;
`;

const categorieSection = ({ categoryId, categoryTitle, cards, categoryServices }) => {
  const serviceCards = cards ? (
    <ServicesSection>
      {cards.map(({ title, imgUrl, to }) => (
        <CardWrapper to={to} key={title}>
          <PureServiceCard
            width="100%"
            service={{ name: title, image: 'http://thecatapi.com/api/images/get' }}
          />
        </CardWrapper>
      ))}
    </ServicesSection>
  ) : null;

  return (
    <StyledCategorie id={categoryId}>
      <CategoryHeading heading={categoryTitle} />
      {serviceCards}
      <ServicesSection>
        {categoryServices.map(service => (
          <ServiceLink key={service} to="/">
            {service}
          </ServiceLink>
        ))}
      </ServicesSection>
    </StyledCategorie>
  );
};

export default categorieSection;
