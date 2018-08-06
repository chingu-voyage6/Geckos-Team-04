import React from 'react';
import styled from 'styled-components';
// import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
import Section from '../../../Layout/Section/Section';
import InfiniteCarousel from '../../../Shared/Carousel/carouselInfinite';

const SectionTitle = styled.div`
  text-align: left;
`;
class CarouselSection extends React.Component {
  render() {
    return (
      <Section isNarrow>
        <SectionTitle>
          <h3>All Services</h3>
        </SectionTitle>
        <InfiniteCarousel />
      </Section>
    );
  }
}

export default CarouselSection;
