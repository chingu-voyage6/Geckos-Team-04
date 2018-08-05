import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledLabel = styled.label`
  display: block;
  margin-bottom: 4px;
  font-weight: 700;
  padding-top: 16px;
`;

const StyledSelect = styled.select`
  appearance: none;
  border: 1px solid #d3d4d5;
  height: 52px;
  border-radius: 4px;
  font-size: 14px;
  padding-left: 14px;
  padding-right: 54px;
  /* outline: none; */
  cursor: pointer;
  vertical-align: middle;
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg fill='%232f3033' xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 18 18' data-thumbprint-id='navigation-caret-down--small'%3E%3Cpath d='M14.646 6.764L9 13 3.311 6.725a1 1 0 0 1 1.342-1.482L9 10l4.285-4.699c.2-.187.435-.301.715-.301a1 1 0 0 1 1 1c0 .306-.151.537-.354.764z'/%3E%3C/svg%3E");
  background-color: #fff;
  background-position: right 16px center;
  background-repeat: no-repeat;
  background-size: auto 18px;
  max-width: 100%;
  :focus {
    border-color: #009fd9;
    /* select outline fix */
    color: transparent;
    text-shadow: 0 0 0 #2f3033;
  }
`;

const SelectDropdown = ({ label, children, ...props }) => (
  <span>
    <StyledLabel>{label}</StyledLabel>
    <StyledSelect {...props}>{children}</StyledSelect>
  </span>
);

SelectDropdown.propTypes = {
  label: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default SelectDropdown;
