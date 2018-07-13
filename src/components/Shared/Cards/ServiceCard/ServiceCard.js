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
  width: ${props => {
    const { width } = props;
    return (
      css`
        ${width};
      ` || 'inherit'
    );
  }};
  box-shadow: ${props => {
    const { boxShadow } = props;
    return css`
      ${boxShadow};
    `;
  }};
`;

const ServiceHeader = CardHeader.extend`
background-image: url('${({ image }) => image}}');
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
    width,
  } = props;
  const title = `${pros} pros in your area`;
  return (
    <ServiceCard service={service} width={width}>
      <LocationIcon />
      <span>{title}</span>
    </ServiceCard>
  );
};

ServiceLocationCard.propTypes = {
  service: PropTypes.object.isRequired,
  width: PropTypes.string,
};

ServiceLocationCard.defaultProps = {
  width: 'inherit',
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
    width,
    height,
  } = props;
  const title = `${pros} pros near you`;
  const boxShadow = '0 -1px 1px 0 rgba(0,0,0,.04), 0 1px 2px 0 rgba(0,0,0,.16)';
  return (
    <ServiceCard service={service} boxShadow={boxShadow} width={width} height={height}>
      <LocationIcon />
      <ServiceCardTitle>&nbsp;{title}</ServiceCardTitle>
    </ServiceCard>
  );
};

CategoryCard.propTypes = {
  service: PropTypes.object.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
};

CategoryCard.defaultProps = {
  width: '200px',
  height: '219px',
};

export default ServiceCard;
export {
  ServiceLocationCard,
  ServicePricingCard,
  CategoryCard,
  StyledServiceCard,
  ServiceCardBody,
};
