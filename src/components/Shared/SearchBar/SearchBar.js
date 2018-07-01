import React from 'react';
import styled from 'styled-components';
import Search from '../SVG/Search';

const SearchContainer = styled.div`
  border-left: 1px solid #eee;
  flex-grow: 3;
  display: flex;
  align-items: center;
  position: relative;
`;

const InputStyled = styled.input`
  border: none;
  display: block;
  padding-left: 48px;
  font-size: 20px;

  :focus {
    outline: none;
  }
`;

const SearchStyled = styled(Search)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 16px;
`;
export default class SearchBar extends React.Component {
  state = {
    isFocused: false,
  };

  onFocusHandler = () => {
    this.setState(() => ({
      isFocused: true,
    }));
  };

  onBlurHandler = () => {
    this.setState(() => ({
      isFocused: false,
    }));
  };

  render() {
    const { isFocused } = this.state;
    return (
      <SearchContainer>
        <SearchStyled isFocused={isFocused} />

        <InputStyled
          type="text"
          onFocus={this.onFocusHandler}
          onBlur={this.onBlurHandler}
          placeholder="What's on your to-do list?"
        />
      </SearchContainer>
    );
  }
}
