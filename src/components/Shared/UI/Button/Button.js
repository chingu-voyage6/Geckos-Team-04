import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const DefaultButton = styled.button`
  color: ${({ color }) => color || '#fff'};
  white-space: nowrap;
  background-color: ${({ background }) => background || '#009fd9'};
  font-size: 14px;
  font-weight: bold;
  padding: 12px 20px;
  border-radius: 0.25rem;
  border: ${({ border }) => border || '2px solid transparent'};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  :focus {
    text-decoration: underline;
    background-color: #007fad;
  }
`;

const defaultButton = ({ title, className, click }) => (
  <DefaultButton className={className} onCLick={click} type="button">
    {title}
  </DefaultButton>
);

defaultButton.propTypes = {
  title: PropTypes.string.isRequired,
};

const SearchBarButtonStyled = DefaultButton.extend`
  border-radius: 0 0.25rem 0.25rem 0;
`;

const SearchButton = ({ click, children, className }) => (
  <SearchBarButtonStyled className={className} onCLick={click} type="button">
    {children}
  </SearchBarButtonStyled>
);

SearchButton.propTypes = {
  click: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.string]).isRequired,
};

// DefaultButton.defaultProps = {
//   color: '#009fd9',
// };

export { SearchButton, DefaultButton };
