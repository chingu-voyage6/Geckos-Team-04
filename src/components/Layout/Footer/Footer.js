import React from 'react';
import styled from 'styled-components';
import FooterLinks from './FooterLinks';
import FooterLogos from './FooterLogos';
import Section from '../Section/Section';

const StyledSection = styled(Section)`
  > div {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    padding-left: 16px;
    padding-right: 16px;
    @media (min-width: 482px) {
      max-width: 449px;
    }
    @media (min-width: 701px) {
      max-width: 668px;
    }
    @media (min-width: 1026px) {
      flex-direction: row;
      max-width: 946px;
    }
  }
`;
const footer = () => (
  <StyledSection hasBorder padding={false}>
    <FooterLogos />
    <FooterLinks />
  </StyledSection>
);

export default footer;
