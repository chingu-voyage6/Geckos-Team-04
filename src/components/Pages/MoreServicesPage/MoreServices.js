/* eslint react/prop-types: 0 */

import React from 'react';
import styled from 'styled-components';
import Layout from '../../Layout/Layout';
import Section from '../../Layout/Section/Section';
import MobileBar from '../../Shared/CategoryBar/MobileBar';
import CategoryBar from '../../Shared/CategoryBar/CategoryBar';
import { categories } from './pageData/categories';
import CategoriesSection from './CategoriesSection';

const StyledCategoryBar = styled(CategoryBar)`
  display: none;

  @media (min-width: 701px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 33.33%;
    margin: 10px;
    position: sticky;
    top: 0;
    box-sizing: border-box;
    height: auto;
    max-height: 500px;
    > li {
      padding: 5px;
    }
  }
`;
const StyledSection = styled(Section)`
  overflow: unset;

  > div {
    display: flex;
    flex-direction: column;
  }

  @media (min-width: 701px) {
    overflow: unset;

    > div {
      display: flex;
      flex-direction: row;
    }
  }
`;
const CategoriesWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;

  div:last-child {
    border-bottom: none;
  }

  @media (min-width: 701px) {
    width: 66.6%;
  }
`;
const MobileCategoriesWrapper = styled.div`
  width: 100%;
  position: sticky;
  top: 0;
  background: #fff;
  display: block;
  z-index: 500;
  @media (min-width: 701px) {
    display: none;
  }
`;
const moreServices = () => (
  <Layout search>
    <MobileCategoriesWrapper>
      <MobileBar size="24" viewBoxSize="48" categories={categories} />
    </MobileCategoriesWrapper>
    <StyledSection isGray hasBorder>
      <StyledCategoryBar size="24" viewBoxSize="48" categories={categories} />
      <CategoriesWrapper>
        {categories.map(({ categoryId, categoryTitle, cards, categoryServices }) => (
          <CategoriesSection
            categoryId={categoryId}
            categoryTitle={categoryTitle}
            cards={cards}
            categoryServices={categoryServices}
            key={categoryId}
          />
        ))}
      </CategoriesWrapper>
    </StyledSection>
  </Layout>
);

export default moreServices;
