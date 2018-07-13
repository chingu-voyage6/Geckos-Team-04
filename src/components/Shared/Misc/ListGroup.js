import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledListGroup = styled.ul`
  padding-left: 0px;
  list-style: none;
  margin-bottom: 20px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 -1px 1px 0 rgba(0,0,0,.04), 0 1px 2px 0 rgba(0,0,0,.16);
`;

const StyledListGroupItem = styled.li`
  border-bottom: 1px solid #e9eced;
  padding: 12px 12px 12px 20px;
  font-size: 16px;
  font-weight: 700;
  color: #2f3033;
`;

const ListGroup = props => {
  const { children } = props;

  const childrenArray = React.Children.toArray(children);
  return (
    <StyledListGroup>
      {childrenArray.map(child => <StyledListGroupItem>{child}</StyledListGroupItem>)}
    </StyledListGroup>
  );
};

ListGroup.propTypes = {
  children: PropTypes.node,
};

export default ListGroup;
