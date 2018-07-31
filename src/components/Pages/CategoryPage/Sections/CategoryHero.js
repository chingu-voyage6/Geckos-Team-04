import React from 'react';
import styled from 'styled-components';
import Section from '../../../Layout/Section/Section';
import { SearchButton } from '../../../Shared/UI/Button/Button';

const HeroContainer = styled(Section)`
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url(${({ imgUrl }) => imgUrl});
  min-height: 380px;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  margin: auto;
  padding: 0;
  > div {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 380px;
    padding: 16px;
  }
`;

const StyledSearchButton = styled(SearchButton)`
  border-radius: 4px;
  flex-grow: 1;
  width: 100%;
  padding: 16px 60px;
  font-size: 15px;
  letter-spacing: 1px;
  @media (min-width: 701px) {
    border-radius: 0 4px 4px 0;
    margin-bottom: 0;
    width: auto;
    flex-grow: 0;
  }
`;

const SearchInput = styled.input`
  padding: 15px;
  border: solid 1px #d3d4d5;
  flex-grow: 1;
  width: 100%;
  border-radius: 4px;
  margin-bottom: 20px;
  font-size: 16px;

  ::placeholder {
    color: #8a8a8a;
    opacity: 1;
  }

  @media (min-width: 701px) {
    border-radius: 4px 0 0 4px;
    margin-bottom: 0;
    width: auto;
  }
`;
const Content = styled.div`
  color: #fff;
  text-align: center;
  max-width: 100%;

  @media (min-width: 1026px) {
    max-width: 66.66%;
  }
`;
const TitleWrapper = styled.div`
  font-size: 40px;
  font-weight: bold;
`;
const SloganWrapper = styled.div`
  font-size: 20px;
  letter-spacing: 2px;
  margin-bottom: 1.5rem;
`;
const SearchWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (min-width: 701px) {
    flex-wrap: nowrap;
  }
`;

const CategoryHero = ({ imgUrl, title, slogan }) => (
  <HeroContainer isNarrow imgUrl={imgUrl}>
    <Content>
      <TitleWrapper>{title}</TitleWrapper>
      <SloganWrapper>{slogan}</SloganWrapper>
      <SearchWrapper>
        <SearchInput placeholder="What service do you need?" />
        <StyledSearchButton click={() => {}}>Get Started</StyledSearchButton>
      </SearchWrapper>
    </Content>
  </HeroContainer>
);

export default CategoryHero;
