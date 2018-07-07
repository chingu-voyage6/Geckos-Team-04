import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const DefaultButton = styled.button`
  color: #fff;
  font-weight: bold;
  background-color: #009fd9;
  font-size: 0.8rem;
  padding-left: 22px;
  padding-right: 22px;
  border-radius: 0.25rem !important; // required to override normalize from footer!

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
