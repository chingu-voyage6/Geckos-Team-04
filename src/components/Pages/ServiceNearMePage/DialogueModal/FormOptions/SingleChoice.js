import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const selected = (
  <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
    <g fill="#ffffff" fillRule="evenodd">
      <circle stroke="#009fd9" strokeWidth="2" cx="10" cy="10" r="9" />
      <circle fill="#009fd9" cx="10" cy="10" r="6" />
    </g>
  </svg>
);
const OptionWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  background-color: #fff;
  border: 1px solid #e9eced;
  margin-bottom: -1px;
  padding: 10px;

  > input {
    display: none;
  }
`;

const Option = styled.label`
  width: 100%;
  cursor: pointer;
  padding-left: 10px;
  display: flex;
  align-items: center;
  span:first-child {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 20px;
    border: ${({ checked }) => (checked ? 'none' : '2px solid rgb(211, 212, 213)')};
    border-radius: 50%;
    margin-right: 10px;
  }
`;

const single = ({ name, option, updateValue, checked, question }) => (
  <OptionWrapper>
    <input
      name={name}
      id={`optionId${option}`}
      defaultChecked={checked}
      type="radio"
      value={option}
    />
    <Option
      checked={checked}
      htmlFor={`optionId${option}`}
      onClick={e => updateValue([question, option], e)}
    >
      <span>{checked ? selected : null}</span>
      <span>{option}</span>
    </Option>
  </OptionWrapper>
);

single.propTypes = {
  option: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  question: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  updateValue: PropTypes.func.isRequired,
};
export default single;
