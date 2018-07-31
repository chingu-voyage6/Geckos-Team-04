import React from 'react';
import styled from 'styled-components';
import { ServiceHeader } from '../../../../Shared/Cards/ServiceCard/ServiceCard';
import { CarouselTempLocation } from '../../../../Shared/CarouselTemp/CarouselTemp';
import Section from '../../../../Layout/Section/Section';

const categories = ['Home', 'Weddings', 'Events', 'Wellness', 'Lessons', 'Pets', 'More'];

const Categorie = styled.div`
  font-size: 1rem;
  font-weight: bold;
  margin-right: 2rem;
  padding-bottom: 0.5rem;
  cursor: pointer;
  box-shadow: ${({ isActive }) => (isActive ? 'inset 0 -2px 0 #009fd9;' : 'none')};
  color: ${({ isActive }) => (isActive ? '#009fd9;' : '#2f3033')};

  :hover {
    color: #009fd9;
  }
`;

const CategoryBar = styled.div`
  overflow-x: scroll;
  padding-bottom: 1rem;
  display: flex;
`;

const CategoryBanner = styled.div`
  margin-bottom: 0.5rem;
`;

export default class CategoryTabsSection extends React.Component {
  state = {
    activeTab: 'Home',
  };

  updateActiveTab = tab => {
    this.setState({ activeTab: tab });
  };

  render() {
    const { activeTab } = this.state;
    return (
      <Section isGray hasBorder>
        <CategoryBar>
          {categories.map(cat => (
            <Categorie
              isActive={cat === activeTab}
              onClick={() => this.updateActiveTab(cat)}
              key={cat}
            >
              {cat}
            </Categorie>
          ))}
        </CategoryBar>
        <CategoryBanner>
          <ServiceHeader image="https://source.unsplash.com/collection/1791908/250x350" />
        </CategoryBanner>

        <CarouselTempLocation />
      </Section>
    );
  }
}
