import styled from 'styled-components';

const Input = styled.input`
  padding: 15px;
  border: solid 1px #d3d4d5;

  border-radius: 4px;

  ::placeholder {
    color: #8a8a8a;
    opacity: 1;
  }

  :focus {
    outline: none;
    border: 1px solid #009fd9;
  }
`;

export default Input;
