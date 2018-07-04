import React from 'react';
import PropTypes from 'prop-types';

import { css } from 'styled-components';
import { StyledCard } from '../Card';
import CardHeader from '../CardHeader';
import CardName from '../CardName';
import CardTitle from '../CardTitle';
import CardBody from '../CardBody';
import { LocationIcon, PricingIcon } from '../../Icon/Icon';

const StyledServiceCard = StyledCard.extend`
  width: ${props =>
    css`
      ${props.width};
    ` || 'inherit'};
  box-shadow: ${props =>
    css`
      ${props.boxShadow};
    `};
`;

const ServiceHeader = CardHeader.extend`
  background-image: url('${props => props.image}');
  height: 12rem;
`;

const ServiceCardBody = CardBody.extend`
  padding-top: 0;
  padding-left: 0;
`;

const ServiceCardName = CardName.extend`
  font-weight: bold;
  justify-content: left;
`;

const ServiceCardTitle = CardTitle.extend`
  justify-content: left;
`;

const ServiceCard = props => {
  const {
    service: { name, image },
    width,
    boxShadow,
    children,
  } = props;

  return (
    <StyledServiceCard width={width} boxShadow={boxShadow}>
      <ServiceHeader image={image} role="img" aria-label={name} />
      <ServiceCardBody>
        <ServiceCardName>&nbsp;{name}</ServiceCardName>
        <ServiceCardTitle>{children}</ServiceCardTitle>
      </ServiceCardBody>
    </StyledServiceCard>
  );
};

ServiceCard.propTypes = {
  service: PropTypes.object.isRequired,
  width: PropTypes.string,
  boxShadow: PropTypes.string,
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

ServiceCard.defaultProps = {
  width: 'inherit',
  boxShadow: 'none',
};

const ServiceLocationCard = props => {
  const {
    service,
    service: { pros },
  } = props;
  const title = `${pros} pros in your area`;
  return (
    <ServiceCard service={service}>
      <LocationIcon />
      {title}
    </ServiceCard>
  );
};

ServiceLocationCard.propTypes = {
  service: PropTypes.object.isRequired,
};

const ServicePricingCard = props => {
  const { service } = props;
  return (
    <ServiceCard service={service}>
      <PricingIcon />
      <ServiceCardTitle>&nbsp;See prices</ServiceCardTitle>
    </ServiceCard>
  );
};

ServicePricingCard.propTypes = {
  service: PropTypes.object.isRequired,
};

const CategoryCard = props => {
  const {
    service,
    service: { pros },
  } = props;
  const title = `${pros} pros near you`;
  const boxShadow = '0 -1px 1px 0 rgba(0,0,0,.04), 0 1px 2px 0 rgba(0,0,0,.16)';
  const width = '200px';
  const height = '219px';
  return (
    <ServiceCard service={service} boxShadow={boxShadow} width={width} height={height}>
      <LocationIcon />
      <ServiceCardTitle>&nbsp;{title}</ServiceCardTitle>
    </ServiceCard>
  );
};

CategoryCard.propTypes = {
  service: PropTypes.object.isRequired,
};

export default ServiceCard;
export {
  ServiceLocationCard,
  ServicePricingCard,
  CategoryCard,
  StyledServiceCard,
  ServiceCardBody,
};
