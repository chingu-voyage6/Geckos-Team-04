import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const selected = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    width="18"
    height="18"
    viewBox="0 0 18 18"
  >
    <path
      fillRule="evenodd"
      d="M14.5810763,3.19812449 C14.132085,2.85681117 13.5060971,2.96739243 13.1851033,3.44586905 L8.01720309,11.1408364 L4.52827048,8.83245251 C4.05827956,8.52197434 3.44229146,8.67402358 3.1502971,9.17270255 C2.85930272,9.67138151 3.00329993,10.3274261 3.47229088,10.6379043 L8.55419272,14 L14.8130718,4.68246529 C15.1350656,4.20398867 15.0300676,3.53943781 14.5810763,3.19812449"
    />
  </svg>
);
const OptionWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  background-color: #fff;
  border: 1px solid red;
  margin-bottom: -1px;
  border: 1px solid #e9eced;
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
    border: ${({ checkedStyle }) =>
      checkedStyle ? '2px solid rgb(0, 159, 217);' : '2px solid rgb(211, 212, 213)'};
    background: ${({ checkedStyle }) => (checkedStyle ? 'rgb(0, 159, 217);' : '#fff')};
    border-radius: 15%;
    margin-right: 10px;
    color: #fff;
  }
`;

const multi = ({ option, updateValue, answers, question, checked }) => (
  <OptionWrapper>
    <input
      id={`optionId${option}`}
      defaultChecked={answers ? answers.includes(option) : false}
      type="checkbox"
      name={option}
      value={option}
    />
    <Option
      checkedStyle={checked}
      htmlFor={`optionId${option}`}
      onClick={e => updateValue([question, option], e)}
    >
      <span>{checked ? selected : null}</span>
      <span>{option}</span>
    </Option>
  </OptionWrapper>
);

multi.propTypes = {
  option: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  question: PropTypes.string.isRequired,
  updateValue: PropTypes.func.isRequired,
  answers: PropTypes.any.isRequired,
};
export default multi;
