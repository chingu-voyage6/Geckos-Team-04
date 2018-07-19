import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledHeading = styled.div`
  font-size: 2rem;
  margin-bottom: 1rem;
  text-align: left;
`;

const categorieHeading = ({ heading }) => <StyledHeading>{heading}</StyledHeading>;

categorieHeading.propTypes = {
  heading: PropTypes.string.isRequired,
};

export default categorieHeading;
