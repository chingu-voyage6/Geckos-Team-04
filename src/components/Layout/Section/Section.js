import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledSection = styled.section`
  background-color: ${({ isGray }) => (isGray ? '#FAFAFA' : '#FFF')};
  border-bottom: ${({ hasBorder }) => (hasBorder ? '1px solid #e9eced;' : 'none')};
  max-width: 100%;
  padding-top: ${({ padding }) => (padding ? '60px' : '0')};
  padding-bottom: ${({ padding }) => (padding ? '60px' : '0')};
  overflow-x: hidden;
  overflow-y: hidden;
  padding-left: 16px;
  padding-right: 16px;

  @media only screen and (min-width: 482px) {
    padding-left: 32px;
    padding-right: 32px;
  }
  @media only screen and (min-width: 1026px) {
    padding-left: 0;
    padding-right: 0;
  }
`;
const ChildrenWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 100%;
  @media only screen and (min-width: 482px) {
    ${({ isNarrow }) =>
      isNarrow ? 'max-width: 449px;  padding-left: 0px;  padding-right: 0px;' : ''};
  }

  @media only screen and (min-width: 701px) {
    ${({ isNarrow }) => (isNarrow ? 'max-width: 668px;' : '')};
  }

  @media only screen and (min-width: 1026px) {
    max-width: 946px;
  }
`;
export default class Section extends React.Component {
  render() {
    const { children, isGray, hasBorder, padding, className, isNarrow } = this.props;

    return (
      <StyledSection className={className} isGray={isGray} hasBorder={hasBorder} padding={padding}>
        <ChildrenWrapper isNarrow={isNarrow}>{children}</ChildrenWrapper>
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
  isNarrow: PropTypes.bool,
  className: PropTypes.string,
};
Section.defaultProps = {
  isGray: false,
  hasBorder: false,
  padding: true,
  className: '',
  isNarrow: false,
};
