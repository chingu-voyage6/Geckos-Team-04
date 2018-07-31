import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Section from '../../../Layout/Section/Section';

const SectionTitle = styled.div`
  text-align: center;
  font-size: 40px;
  margin-bottom: 60px;
`;

const ServicesList = styled.ul`
  column-count: 1;
  column-width: 100%;

  width: 100%;
  margin: 0 auto;
  padding: 0 16px;
  @media (min-width: 701px) {
    column-count: 2;
    column-width: 50%;
  }

  @media (min-width: 1026px) {
    column-count: 3;
    column-width: 33.33%;
  }
`;

const SubCategorieWrapper = styled.div`
  break-inside: avoid;
  margin-bottom: 20px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #676d73;
  display: inline;
  line-height: 30px;
`;

const StyledListItem = styled.li`
  list-style: none;
`;
const SubTitle = styled.h3`
  display: block;
  margin-bottom: 10px;
`;
const SubCategorie = ({ subcategorieTitle, subcategorieServices }) => (
  <SubCategorieWrapper>
    <SubTitle>{subcategorieTitle}</SubTitle>
    {subcategorieServices.map(sub => (
      <StyledListItem key={sub}>
        <StyledLink
          to={`${sub
            .trim()
            .replace(' ', '-')
            .toLowerCase()}/near-me`}
        >
          {sub}
        </StyledLink>
      </StyledListItem>
    ))}
  </SubCategorieWrapper>
);

SubCategorie.propTypes = {
  subcategorieTitle: PropTypes.string.isRequired,
  subcategorieServices: PropTypes.array.isRequired,
};

const categoryServices = ({ subcategories, sectionTitle }) => (
  <Section isNarrow hasBorder>
    <SectionTitle>
      {sectionTitle === 'Lessons' ? 'More Services' : `More ${sectionTitle} Services`}
    </SectionTitle>
    <ServicesList>
      {subcategories.map(({ subcategorieTitle, subcategorieServices }) => (
        <SubCategorie
          key={subcategorieTitle}
          subcategorieTitle={subcategorieTitle}
          subcategorieServices={subcategorieServices}
        />
      ))}
    </ServicesList>
  </Section>
);

categoryServices.propTypes = {
  sectionTitle: PropTypes.string.isRequired,
  subcategories: PropTypes.array.isRequired,
};

export default categoryServices;
