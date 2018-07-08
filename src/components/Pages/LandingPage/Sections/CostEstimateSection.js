import React from 'react';
import styled from 'styled-components';
import Section from '../../../Layout/Section/Section';
import { DefaultButton } from '../../../Shared/UI/Button/Button';
import { CarouselTempPricing } from '../../../Shared/CarouselTemp/CarouselTemp';

const SectionText = styled.div`
  color: #676d73;
  font-size: 0.9rem;
`;

const SectionTitle = styled.div`
  margin-bottom: 1rem;
`;

const SectionTextWrapper = styled.div`
  max-width: 50%;
  margin-bottom: 2rem;
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
    <CarouselTempPricing />
    <DefaultButton>See all cost guides</DefaultButton>
  </Section>
);

export default costEstimateSection;
