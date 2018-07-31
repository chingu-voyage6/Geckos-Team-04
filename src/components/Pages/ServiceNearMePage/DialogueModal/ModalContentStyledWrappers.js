import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';

const GroupWrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  color: black;
`;

const GroupTitle = styled.div`
  text-align: center;
  width: 66.7%;
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 32px;
  color: black;
`;

const OptionWrapper = styled.div`
  width: 100%;
  color: black;
`;

class ModalContentStyledWrappers extends React.Component {
  componentWillMount() {
    console.log('will mount');
  }

  componentDidMount() {
    console.log('Mounted');
  }

  render() {
    const { question, children } = this.props;
    return (
      <GroupWrapper>
        <GroupTitle>{question}</GroupTitle>
        <OptionWrapper>{children}</OptionWrapper>
      </GroupWrapper>
    );
  }
}

ModalContentStyledWrappers.propTypes = {
  question: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
};

export default ModalContentStyledWrappers;
