/* eslint react/prop-types: 0 */
import React from 'react';
import styled from 'styled-components';

import { HashLink as Link } from 'react-router-hash-link';

const GetIcon = ({ tag, size, viewBoxSize }) => {
  const TagName = tag;
  return <TagName size={size} viewBoxSize={viewBoxSize} />;
};

const StyledLink = styled(Link)`
  display: flex;
  text-decoration: none;
  align-items: center;
  color: #2f3033;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s linear;
  :hover {
    color: #009fd9;
    transition: all 0.2s linear;
  }
`;
const IconWrapper = styled.div`
  height: ${({ height }) => height}px;
  margin-right: 10px;
  margin-top: 6px;
`;

const TitleWrapper = styled.div`
  font-size: 0.9rem;
`;

const CategoryBarItem = ({ title, to, icon, size, viewBoxSize }) => (
  <li key={title}>
    <StyledLink to={to}>
      <IconWrapper height={size}>
        <GetIcon tag={icon} size={size} viewBoxSize={viewBoxSize} />
      </IconWrapper>
      <TitleWrapper>{title}</TitleWrapper>
    </StyledLink>
  </li>
);

const StyledList = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style: none;
  padding-left: 15px;
  padding-right: 15px;
`;

const CategoryBar = ({ categories, size, viewBoxSize, className }) => (
  <StyledList className={className}>
    {categories.map(({ categoryTitle, to, categoryId, icon }) => (
      <CategoryBarItem
        key={categoryTitle}
        size={size}
        viewBoxSize={viewBoxSize}
        title={categoryTitle}
        to={to || `/more-services#${categoryId}`}
        icon={icon}
      />
    ))}
  </StyledList>
);

export default CategoryBar;
