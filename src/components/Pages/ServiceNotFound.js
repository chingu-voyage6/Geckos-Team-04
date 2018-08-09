import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Layout from '../Layout/Layout';
import Section from '../Layout/Section/Section';
import HowTTWorks from './ExplorePage/Sections/HowTTWorksSection';

const SectionHeading = styled.div`
  text-align: center;
  margin-bottom: 42px;
`;
const LinkList = styled.ul`
  list-style: none;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  max-width: 500px;
  margin: 0 auto;
  > li:not(:last-child) {
    border-bottom: 1px solid #ccc;
  }
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  font-weight: bold;
  color: #2f3033;
  display: block;
  text-align: center;
  padding: 10px 0;
  :hover {
    color: #009fd9;
  }
`;

const serviceNotFound = () => (
  <Layout>
    <Section isGray hasBorder>
      <SectionHeading>
        <h3>
          Unfortunately this service is not availabe, please choose from these available services:
        </h3>
      </SectionHeading>
      <LinkList>
        <li>
          <StyledLink to="/house-cleaning/near-me">House Cleaning</StyledLink>
        </li>
        <li>
          <StyledLink to="/handyman/near-me">Handyman</StyledLink>
        </li>
        <li>
          <StyledLink to="/personal-training/near-me">Personal Training</StyledLink>
        </li>
        <li>
          <StyledLink to="/local-moving/near-me">Local Moving</StyledLink>
        </li>
        <li>
          <StyledLink to="/dog-training/near-me">Dog Training</StyledLink>
        </li>
      </LinkList>
    </Section>
    <HowTTWorks />
  </Layout>
);

export default serviceNotFound;
