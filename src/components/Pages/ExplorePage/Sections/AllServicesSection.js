import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Section from '../../../Layout/Section/Section';
import { HomeCard } from '../../../Shared/Cards/UtilCard/UtilCard';

const SectionTitle = styled.div`
  text-align: left;
`;
const CardSubsection = styled.div`
  margin-left: -8px;
  margin-right: -8px;
  div:first-child a {
    border-radius: 4px 4px 0 0;
  }

  div:last-child a {
    border-radius: 0 0 4px 4px;
  }

  display: block;
  @media only screen and (min-width: 480px) {
    div a {
      border: initial;
      border-radius: 4px;
    }
    div:first-child a {
      border-radius: 4px;
    }

    div:last-child a {
      border-radius: 4px;
    }

    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;

const GetIcon = ({ tag }) => {
  const TagName = tag;
  return <TagName size="28" />;
};

const allServicesSection = () => (
  <Section isGray hasBorder>
    <SectionTitle>
      <h3>All Services</h3>
    </SectionTitle>
    <CardSubsection>
      <HomeCard utility={{ name: 'Home' }} />
      <HomeCard utility={{ name: 'Home' }} />
      <HomeCard utility={{ name: 'Home' }} />
      <HomeCard utility={{ name: 'Home' }} />
      <HomeCard utility={{ name: 'Home' }} />
      <HomeCard utility={{ name: 'Home' }} />
      <HomeCard utility={{ name: 'Home' }} />
    </CardSubsection>
  </Section>
);

export default allServicesSection;
