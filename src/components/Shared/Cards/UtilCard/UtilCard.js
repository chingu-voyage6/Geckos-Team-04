import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { ServiceCardBody } from '../ServiceCard/ServiceCard';
import CardTitle from '../CardTitle';
import { HomeIcon, PricingIcon, EventIcon } from '../../Icon/Icon';

const UtilsCardBody = ServiceCardBody.extend`
  text-align: center;
  margin: auto;
  padding-top: 35px;
`;

const UtilsCardTitle = CardTitle.extend`
  margin-top: 16px;
  font-size: 16px;
`;

const UtilsAnchor = styled.a`
  background-color: #ffffff;
  color: #2f3033;
  display: block;
  line-height: 1;
  width: 142px;
  text-decoration: none;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 5px 15px 0 rgba(47, 48, 51, 0.25);
    color: #009fd9;
    fill: #009fd9;
  }

  @media only screen and (min-width: 480px) {
    height: 142px;
    -webkit-box-shadow: 0 2px 6px 0 rgba(47, 48, 51, 0.1);
    box-shadow: 0 2px 6px 0 rgba(47, 48, 51, 0.1);
    border-radius: 4px;
    padding-top: 34px;
    -webkit-transition: all 0.1s ease-in-out;
    transition: all 0.1s ease-in-out;
  }
`;

const UtilsCard = props => {
  const {
    utility: { name },
    children,
  } = props;

  return (
    <UtilsAnchor>
      <UtilsCardBody>
        {children}
        <UtilsCardTitle>{name}</UtilsCardTitle>
      </UtilsCardBody>
    </UtilsAnchor>
  );
};

UtilsCard.propTypes = {
  utility: PropTypes.object.isRequired,
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default UtilsCard;
export const HomeCard = props => {
  /* An example of how to go about creating a UtilCard */
  const { utility } = props;
  const size = '28';
  return (
    <UtilsCard utility={utility}>
      <HomeIcon size={size} />
    </UtilsCard>
  );
};
HomeCard.propTypes = {
  utility: PropTypes.object.isRequired,
};
