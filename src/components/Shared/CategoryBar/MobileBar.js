/* eslint react/prop-types: 0 */
import React from 'react';
import styled from 'styled-components';
// import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';

const GetIcons = ({ tag, size, viewBoxSize }) => {
  const TagName = tag;
  return <TagName size={size} viewBoxSize={viewBoxSize} />;
};

const StyledLink = styled(Link)`
  box-sizing: border-box;
  flex-direction: column;
  display: flex;
  flex-shrink: 0;
  text-decoration: none;
  align-items: center;
  color: #2f3033;
  width: 90px;
  padding: 10px;
  cursor: pointer;
  transition: all 0.2s linear;

  :hover {
    color: #009fd9;
    transition: all 0.2s linear;
  }
`;

const StyledList = styled.div`
  display: flex;
  overflow-x: scroll;
  width: auto;
`;
const TitleWrapper = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 100%;
  text-align: center;
  margin-top: 4px;
  font-weight: 400;
`;
const IconWrapper = styled.div`
  height: ${({ size }) => size}px;
  width: ${({ size }) => size}px;
`;

const MobileBarItem = ({ title, to, icon, size, viewBoxSize }) => (
  <StyledLink to={to}>
    <IconWrapper size={size}>
      <GetIcons tag={icon} size={size} viewBoxSize={viewBoxSize} />
    </IconWrapper>

    <TitleWrapper>{title}</TitleWrapper>
  </StyledLink>
);

const mobileBar = ({ categories, size, viewBoxSize, className }) => (
  <StyledList className={className}>
    {categories.map(({ categoryTitle, to, categoryId, icon }) => (
      <MobileBarItem
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

export default mobileBar;
