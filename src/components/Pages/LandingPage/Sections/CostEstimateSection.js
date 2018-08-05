import React from 'react';
import styled from 'styled-components';
import Section from '../../../Layout/Section/Section';
import { DefaultButton } from '../../../Shared/UI/Button/Button';
import Carousel from '../../../Shared/Carousel/Carousel';

const SectionText = styled.div`
  color: #676d73;
  font-size: 0.9rem;
`;

const SectionTitle = styled.div`
  margin-bottom: 1rem;
`;

const SectionTextWrapper = styled.div`
  width: 100%;
  margin-bottom: 2rem;
  @media (min-width: 482px) {
    width: 50%;
  }
`;
const costEstimateSection = () => (
  <Section hasBorder>
    <SectionTextWrapper>
      <SectionTitle>
        <h2>Get free cost estimates.</h2>
      </SectionTitle>

      <SectionText>
        <p>
          We analyzed millions of bids from Thumbtack professionals to see what things really cost.
          Find out what other people have paid for projects like yours.
        </p>
      </SectionText>
    </SectionTextWrapper>
    <Carousel />
    <DefaultButton>See all cost guides</DefaultButton>
  </Section>
);

export default costEstimateSection;
