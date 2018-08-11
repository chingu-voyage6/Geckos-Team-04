import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ServiceHeader } from '../../../../Shared/Cards/ServiceCard/ServiceCard';
import { CarouselTempLocation } from '../../../../Shared/CarouselTemp/CarouselTemp';
import Section from '../../../../Layout/Section/Section';
import { categories } from './tab-data';
import CategoryBanner from './categoryBanner';

const Categorie = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-right: 16px;
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

const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;
  font-size: 18px;
  font-weight: bold;

  padding-bottom: 0.5rem;
  cursor: pointer;
  :hover {
    color: #009fd9;
  }
`;

export default class CategoryTabsSection extends React.Component {
  state = {
    activeTab: 'Home',
    categoryTabs: [],
  };

  componentDidMount() {
    const tabs = categories.map(({ title }) => title);

    this.setState({ categoryTabs: tabs });
  }

  updateActiveTab = tab => {
    this.setState({ activeTab: tab });
  };

  render() {
    const { activeTab, categoryTabs } = this.state;

    const { imageUrl, icon, link, text } = categories.filter(({ title }) => title === activeTab)[0];
    return (
      <Section isGray hasBorder>
        <CategoryBar>
          {categoryTabs.map(cat => (
            <Categorie
              isActive={cat === activeTab}
              onClick={() => this.updateActiveTab(cat)}
              key={cat}
            >
              {cat}
            </Categorie>
          ))}
          <StyledLink to="/more-services">More</StyledLink>
        </CategoryBar>
        <CategoryBanner imageUrl={imageUrl} to={link} icon={icon} title={activeTab} text={text}>
          <ServiceHeader image="https://source.unsplash.com/collection/1791908/250x350" />
        </CategoryBanner>

        <CarouselTempLocation />
      </Section>
    );
  }
}
