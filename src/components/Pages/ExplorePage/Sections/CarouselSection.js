import React from 'react';
import styled from 'styled-components';
import _ from 'lodash';
import Section from '../../../Layout/Section/Section';
import InfiniteCarousel from '../../../Shared/Carousel/carouselInfinite';
import { cardContent } from '../../../Shared/Cards/card-data';

const SectionTitle = styled.div`
  text-align: left;
  padding-left: 7px;
  margin-bottom: 24px;
`;

const CarouselSubSection = styled.div`
  margin-bottom: 36px;
`;

const carousels = [
  'Popular Services',
  'Awesome Services',
  'Magnificent Services',
  'Ordinary Services',
  'Average Services',
].reduce((acc, curr) => {
  const carousel = {
    heading: curr,
    cards: _.sampleSize(cardContent, 12),
  };
  return acc.concat(carousel);
}, []);

class CarouselSection extends React.Component {
  render() {
    return (
      <Section isNarrow>
        {carousels.map(({ heading, cards }) => (
          <CarouselSubSection key={heading}>
            <SectionTitle>
              <h3>{heading}</h3>
            </SectionTitle>
            <InfiniteCarousel items={cards} />
          </CarouselSubSection>
        ))}
      </Section>
    );
  }
}

export default CarouselSection;
