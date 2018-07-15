import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledSection = styled.section`
  background-color: ${({ isGray }) => (isGray ? '#FAFAFA' : '#FFF')};
  border-bottom: ${({ hasBorder }) => (hasBorder ? '1px solid #e9eced;' : 'none')};
  max-width: 100%;
  padding-top: ${({ padding }) => (padding ? '60px' : '0')};
  padding-bottom: ${({ padding }) => (padding ? '60px' : '0')};
  overflow: hidden;
`;
const ChildrenWrapper = styled.div`
  padding-left: 16px;
  padding-right: 16px;
  width: 100%;
  margin: 0 auto;

  @media only screen and (min-width: 482px) {
    padding-left: 32px;
    padding-right: 32px;
  }

  @media only screen and (min-width: 1026px) {
    max-width: 960px;
    padding-left: 0px;
    padding-right: 0px;
  }
`;
export default class Section extends React.Component {
  render() {
    const { children, isGray, hasBorder, padding, className } = this.props;

    return (
      <StyledSection className={className} isGray={isGray} hasBorder={hasBorder} padding={padding}>
        <ChildrenWrapper>{children}</ChildrenWrapper>
      </StyledSection>
    );
  }
}

Section.propTypes = {
  // children: PropTypes.arrayOf(PropTypes.element).isRequired,
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
  isGray: PropTypes.bool,
  hasBorder: PropTypes.bool,
  padding: PropTypes.bool,
  className: PropTypes.string,
};
Section.defaultProps = {
  isGray: false,
  hasBorder: false,
  padding: true,
  className: '',
};
