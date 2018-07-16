import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/* eslint-disable */
const StyledListGroup = styled.ul`
  overflow: hidden;
  list-style: none;
  padding-left: 0px;
  margin-bottom: 20px;
  background-color: #fff;
  border: ${props => (props.hasBorder ? '1px solid #e9eced' : 'none')};
  border-radius: ${props => (props.isRounded ? '4px' : 'none')};
  box-shadow: ${props => props.hasBoxShadow ? '0 -1px 1px 0 rgba(0,0,0,.04),0 1px 2px 0 rgba(0,0,0,.16)' : '0'};
  @media (max-width: 1024px) {
    width: 100%;
    border-radius: 0;
  }
`;
/* eslint-enable */

const StyledListGroupItem = styled.li`
  font-size: 16px;
  font-weight: 700;
  color: #2f3033;
  border-bottom: 1px solid #e9eced;
  :last-child {
    border: none;
  }
`;

const ListGroup = props => {
  const { children, hasBorder, isRounded, hasBoxShadow } = props;

  const childrenArray = React.Children.toArray(children);
  return (
    <StyledListGroup hasBorder={hasBorder} isRounded={isRounded} hasBoxShadow={hasBoxShadow}>
      {childrenArray.map((child, i) => <StyledListGroupItem key={i}>{child}</StyledListGroupItem>)}
    </StyledListGroup>
  );
};
ListGroup.defaultProps = {
  hasBorder: false,
  isRounded: false,
  hasBoxShadow: false,
};

ListGroup.propTypes = {
  children: PropTypes.array, // eslint-disable-line react/require-default-props
  hasBorder: PropTypes.bool,
  isRounded: PropTypes.bool,
  hasBoxShadow: PropTypes.bool,
};

export default ListGroup;
