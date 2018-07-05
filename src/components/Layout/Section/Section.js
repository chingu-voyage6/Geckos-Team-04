import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledSection = styled.section`
  background-color: ${({ isGray }) => (isGray ? '#FAFAFA' : '#FFF')};
  border-bottom: ${({ hasBorder }) => (hasBorder ? '1px solid #e9eced;' : 'none')};
  width: 100%;
  padding: 60px 20px;
`;

export default class Section extends React.Component {
  render() {
    const { children, isGray, hasBorder } = this.props;

    return (
      <StyledSection isGray={isGray} hasBorder={hasBorder}>
        {children}
      </StyledSection>
    );
  }
}

Section.propTypes = {
  children: PropTypes.element.isRequired,
  isGray: PropTypes.bool.isRequired,
  hasBorder: PropTypes.bool.isRequired,
};
