import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Section from '../../../Layout/Section/Section';
import { PureServiceCard } from '../../../Shared/Cards/ServiceCard/ServiceCard';

const SectionTitle = styled.div`
  text-align: center;
  font-size: 40px;
  margin-bottom: 60px;
`;
const CardWrapper = styled(Link)`
  display: block;
  width: 33.33%;
  padding: 10px;
  text-decoration: none;
`;
const CardSubsection = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const categoryPopular = ({ services, sectionTitle }) => (
  <Section isGray>
    <SectionTitle>
      {sectionTitle === 'Lessons' ? 'Popular Services' : `Popular ${sectionTitle} Services`}
    </SectionTitle>
    <CardSubsection>
      {services.map(({ title, name }) => (
        <CardWrapper key={title} to={`/${name.toLowerCase()}/near-me`}>
          <PureServiceCard
            service={{ name: title, image: 'http://thecatapi.com/api/images/get', catPage: true }}
          />
        </CardWrapper>
      ))}
    </CardSubsection>
  </Section>
);

categoryPopular.propTypes = {
  sectionTitle: PropTypes.string.isRequired,
  services: PropTypes.array.isRequired,
};

export default categoryPopular;
