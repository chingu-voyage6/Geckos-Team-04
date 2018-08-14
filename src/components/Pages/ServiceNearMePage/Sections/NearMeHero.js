import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Section from '../../../Layout/Section/Section';

import { DefaultButton } from '../../../Shared/UI/Button/Button';

const StyledSection = styled(Section)`
  background-image: linear-gradient(rgba(170, 170, 170, 0.3), rgba(170, 170, 170, 0.3)),
    url(${({ imgUrl }) => imgUrl});
  min-height: 500px;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  margin: auto;
  padding: 0;
  > div {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: calc(100vh - 55px);
    top: 55px;
    margin: auto;
  }
`;

const Content = styled.div`
  text-align: center;
  width: 100%;
`;
const TitleWrapper = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: #fff;
  margin-bottom: 1rem;
  letter-spacing: 1px;
  margin-top: 85px;
  @media (min-width: 701px) {
    font-size: 32px;
    font-weight: bold;
    margin-bottom: 1.5rem;
    margin-top: 0px;
  }
`;

const HeroModal = styled.div`
  background: #fff;
  padding: 28px 24px;
  width: 100%;
  margin: auto;
  @media (min-width: 701px) {
    width: 66.6%;
    background: rgba(255, 255, 255, 0.9);
    padding: 52px 48px;
  }
  @media (min-width: 1026px) {
    width: 50%;
  }
`;
const ModalTitle = styled.div`
  color: #000;
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 2rem;
  @media (min-width: 701px) {
    font-size: 24px;
  }
`;

const SearchInput = styled.input`
  padding: 15px;
  border: solid 1px #d3d4d5;
  flex-grow: 0;
  width: 100%;
  display: block;
  border-radius: 4px 0 0 4px;

  ::placeholder {
    color: #8a8a8a;
    opacity: 1;
  }

  @media (min-width: 701px) {
    flex-grow: 1;
    width: auto;
  }
`;

const SearchWrappper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;

  @media (min-width: 701px) {
    flex-wrap: nowrap;
  }
`;

const GoButton = DefaultButton.extend`
  display: block;
  width: 100%;

  @media (min-width: 701px) {
    width: auto;
  }
`;

const nearMeHero = ({ goHandler, nameSingle, namePlural, imgUrl }) => (
  <StyledSection imgUrl={imgUrl} isNarrow>
    <Content>
      <TitleWrapper>{namePlural} near you</TitleWrapper>
      <HeroModal>
        <ModalTitle>Where do you need the {nameSingle}?</ModalTitle>
        <SearchWrappper>
          <SearchInput type="text" placeholder="Enter your zip code" />
          <GoButton onClick={goHandler}>Go</GoButton>
        </SearchWrappper>
      </HeroModal>
    </Content>
  </StyledSection>
);

nearMeHero.propTypes = {
  goHandler: PropTypes.func.isRequired,
  nameSingle: PropTypes.string.isRequired,
  namePlural: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
};

export default nearMeHero;
