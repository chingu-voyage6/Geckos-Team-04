import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Spinner from './Spinner';

const StyledCard = styled.div`
  position: relative;
  max-width: 100%;
  width: 250px;
  display: flex;
  flex-flow: column;
  background-color: inherit;
  border-radius: 0.25rem;
  user-select: none;
  transition: 0.25s;

  &.float:hover {
    transform: translateY(-8px);
    box-shadow: 0 10px 10px -10px rgba(#7f8c8d, 1);
  }
`;

class Card extends Component {
  render() {
    const { loading: isLoading, error, children } = this.props;
    const content = <div>{error ? <p>{error} </p> : <StyledCard>{children}</StyledCard>}</div>;
    return isLoading ? <Spinner /> : content;
  }
}

Card.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  loading: PropTypes.bool,
  error: PropTypes.string,
};

Card.defaultProps = {
  error: null,
  loading: false,
};

export default styled(Card)`
  background-color: #ecf0f1;
`;
export { StyledCard };
