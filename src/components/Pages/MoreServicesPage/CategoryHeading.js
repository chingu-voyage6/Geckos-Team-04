import React from 'react';
import styled from 'styled-components';

const StyledHeading = styled.div`
  font-size: 2rem;
  margin-bottom: 1rem;
  text-align: left;
`;

const categorieHeading = ({ heading }) => <StyledHeading>{heading}</StyledHeading>;

export default categorieHeading;
