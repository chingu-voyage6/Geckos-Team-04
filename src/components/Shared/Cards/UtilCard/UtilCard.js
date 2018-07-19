/* eslint react/prop-types: 0 */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { CarretIcon } from '../../Icon/Icon';

const CardWrapper = styled.div`
  width: 100%;
  padding: 0;
  margin-bottom: -1px;

  @media only screen and (min-width: 482px) {
    width: 33.33%;
    padding: 8px;
    margin: 0;
  }

  @media only screen and (min-width: 1023px) {
    width: 16.66%;
    margin: 0;
  }
`;

const CardBody = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  width: 100%;
  display: flex;
  height: auto;
  border: 1px solid #e9eced;
  align-items: center;
  padding: 0.5rem;
  background-color: #fff;
  flex-direction: row;
  transition: all 0.1s ease-in-out;
  color: #2f3033;

  :hover {
    color: #009fd9;
    transition: all 0.1s ease-in-out;
  }
  @media only screen and (min-width: 482px) {
    flex-direction: column;
    height: 142px;
    justify-content: center;
    padding-top: 2rem;
    box-shadow: 0 2px 6px 0 rgba(47, 48, 51, 0.1);
    :hover {
      color: #009fd9;
      transform: scale(1.05);
      box-shadow: 0 5px 15px 0 rgba(47, 48, 51, 0.25);
      transition: all 0.1s ease-in-out;
    }
  }
`;

const UtilCard = props => {
  const {
    utility: { name, categoryName },
    children,
  } = props;

  return <CardBody to={categoryName}>{children}</CardBody>;
};

const CardIconWrapper = styled.div`
  transform: scale(0.7);
  margin-left: -5px;

  @media only screen and (min-width: 482px) {
    margin: 0;
    transform: scale(1);
  }
`;
const CarrotWrapper = styled.div`
  /* transform-origin: 50% 50%; */
  transform: rotate(180deg);
  height: initial;
  position: relative;
  margin-right: -10px;
  display: initial;
  > * {
    position: absolute;
    transform: translateY(-50%);
    top: -50%;
  }

  @media only screen and (min-width: 482px) {
    display: none;
  }
`;
const CardTitle = styled.div`
  display: block;
  flex-grow: 1;
  font-size: 1rem;
  margin-left: 0.5rem;

  @media only screen and (min-width: 482px) {
    margin-left: 0;
    margin-top: 0.5rem;
  }
`;

export const CategoryCard = props => {
  /* An example of how to go about creating a UtilCard */
  const { utility, children } = props;
  const size = '28';
  return (
    <CardWrapper>
      <UtilCard utility={utility}>
        <CardIconWrapper>
          {/* <HomeIcon size={size} /> */}
          {children}
        </CardIconWrapper>
        <CardTitle>{utility.name}</CardTitle>
        <CarrotWrapper>
          <CarretIcon size={size} />
        </CarrotWrapper>
      </UtilCard>
    </CardWrapper>
  );
};

CategoryCard.propTypes = {
  utility: PropTypes.object.isRequired,
};
