import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const DefaultButton = styled.button`
  color: #fff;
  white-space: nowrap;
  background-color: #009fd9;
  font-size: 14px;
  font-weight: bold;
  padding: 12px 20px;
  border-radius: 0.25rem !important; // required to override normalize from footer!
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  :focus {
    text-decoration: underline;
    background-color: #007fad;
  }
`;

const defaultButton = ({ title, click }) => (
  <DefaultButton onCLick={click} type="button">
    {title}
  </DefaultButton>
);

defaultButton.propTypes = {
  title: PropTypes.string.isRequired,
  click: PropTypes.func.isRequired,
};

const SearchBarButtonStyled = DefaultButton.extend`
  border-radius: 0 0.25rem 0.25rem 0 !important;
`;
const SearchButton = ({ click, children }) => (
  <SearchBarButtonStyled onCLick={click} type="button">
    {children}
  </SearchBarButtonStyled>
);

SearchButton.propTypes = {
  click: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired,
};
// Button.defaultProps = {
//   color: '#009fd9',
// };

export { SearchButton, DefaultButton };
