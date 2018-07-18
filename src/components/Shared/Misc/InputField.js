import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledInput = styled.input`
  display: inline-block;
  width: 100%;
  border: 1px solid #d3d4d5;
  border-radius: 4px;
  font-size: 1em;
  font-weight: 400;
  padding: 1em;

  :focus {
    border: 1px solid #009fd9;
  }
`;

const StyledLabel = styled.label`
  display: inline-block;
  margin-bottom: 4px;
  font-weight: 700;
  padding-top: 16px;
`;

const InputField = ({ type, label, placeholder }) => {
  return (
    <span>
      <StyledLabel>{label}</StyledLabel>
      <StyledInput type={type} name={label} placeholder={placeholder} />
    </span>
  );
};

InputField.defaultProps = {
  type: 'text',
  label: '',
  placeholder: '',
};

InputField.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
};

export default InputField;
