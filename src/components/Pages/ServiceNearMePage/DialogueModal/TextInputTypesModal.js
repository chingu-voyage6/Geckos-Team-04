import React from 'react';
import styled from 'styled-components';
import Input from '../../../Shared/UI/Input';

const TextAreaInput = styled.textarea``;
const InputWrapper = styled.div`
  text-align: center;
  > input {
    width: 70%;
  }
  > textarea {
    width: 100%;
    padding: 10px;
    line-height: 1.2;
    height: 150px;
  }
`;
const TextInputTypesModal = ({ inputType, updateTextFieldValue, question, value }) => {
  switch (inputType) {
    case 'zipCode':
      return (
        <InputWrapper>
          <Input
            value={value}
            onChange={e => updateTextFieldValue(question, e)}
            type="text"
            placeholder="Zip Code"
          />
        </InputWrapper>
      );
    case 'name':
      return (
        <InputWrapper>
          <Input
            value={value}
            onChange={e => updateTextFieldValue(question, e)}
            type="text"
            placeholder="First and last name"
          />
        </InputWrapper>
      );
    case 'email':
      return (
        <InputWrapper>
          <Input
            id="email-input"
            value={value}
            onChange={e => updateTextFieldValue(question, e)}
            type="email"
            required="required"
            placeholder="Email address"
          />
        </InputWrapper>
      );
    case 'textarea':
      return (
        <InputWrapper>
          <TextAreaInput
            value={value}
            onChange={e => updateTextFieldValue(question, e)}
            type="textarea"
            placeholder="Tell us more"
          />
        </InputWrapper>
      );

    default:
      return null;
  }
};

export default TextInputTypesModal;
