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
  column-count: 3;
  column-width: 33.33%;
  padding: 0;
  width: 100%;
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
  <Section hasBorder>
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
