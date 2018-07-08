import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledSection = styled.section`
  background-color: ${({ isGray }) => (isGray ? '#FAFAFA' : '#FFF')};
  border-bottom: ${({ hasBorder }) => (hasBorder ? '1px solid #e9eced;' : 'none')};
  max-width: 100%;
  padding: ${({ padding }) => (padding ? '60px' : '0')} 20px;
  overflow: hidden;
`;
const ChildrenWrapper = styled.div`
  max-width: 960px;
  margin: 0 auto;
  min-height: 100%;
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
