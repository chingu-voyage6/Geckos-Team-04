import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledHeading = styled.div`
  font-size: 24px;
  margin-bottom: 1rem;
  text-align: left;
  font-weight: bold;

  @media (min-width: 701px) {
    font-size: 32px;
  }
`;

const categorieHeading = ({ heading }) => <StyledHeading>{heading}</StyledHeading>;

categorieHeading.propTypes = {
  heading: PropTypes.string.isRequired,
};

export default categorieHeading;
