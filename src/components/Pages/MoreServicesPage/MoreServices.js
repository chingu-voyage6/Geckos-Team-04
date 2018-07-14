/* eslint react/prop-types: 0 */

import React from 'react';
import styled from 'styled-components';
import Layout from '../../Layout/Layout';
import Section from '../../Layout/Section/Section';
import CategoryBar from '../../Shared/CategoryBar/CategoryBar';
import { categories } from './pageData/categories';
import CategoriesSection from './CategoriesSection';

const StyledCategoryBar = styled(CategoryBar)`
  flex-direction: column;
  align-items: flex-start;
  width: 25%;
  margin: 10px;
  position: sticky;
  top: 0;
  box-sizing: border-box;
  height: auto;
  max-height: 500px;
  > li {
    padding: 5px;
  }
`;
const StyledSection = styled(Section)`
  overflow: unset;

  > div {
    display: flex;
  }
`;
const CategoriesWrapper = styled.div`
  display: flex;
  width: 66.6%;
  flex-direction: column;
`;

const moreServices = () => (
  <Layout search>
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
