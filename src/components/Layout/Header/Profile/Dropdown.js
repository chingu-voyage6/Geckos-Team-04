import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ChevronIcon } from '../../../Shared/Icon/Icon';

const Menu = styled.ul`
  display: flex;
  height: 100%;
  cursor: pointer;
`;

const Toggle = styled.div`
  display: flex;
  flex-direction: row;
  align-content: space-around;
  align-items: center;
  user-select: none;
  @media (max-width: 700px) {
    display: none;
  }
`;

const Avatar = styled.div`
  display: flex;
  margin-right: 8px;
  width: 32px;
  height: 32px;
  font-size: 12px;
  background: linear-gradient(0deg, #676d73, #d3d4d5);
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  color: #fff;
  @media (max-width: 700px) {
    display: none;
  }
`;

const List = styled.ul`
  margin-right: -10px;
  display: flex;
  position: absolute;
  flex-direction: column;
  top: 60px;
  right: 0;
  background-color: #fff;
  border: 1px solid #e9eced;
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.12);
  border-top: 0;
  border-right: 0;
  min-width: 250px;
  transform: ${({ isOpen }) => (isOpen ? 'translateY(0px)' : 'translateY(-30px)')};
  visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
  opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
  transition: transform 0.2s ease, opacity 0.2s ease, visibility 0.2s ease;
  outline: none;
  z-index: 1;
  @media (max-width: 700px) {
    position: relative;
    visibility: visible;
    opacity: 1;
    box-shadow: none;
    width: 100%;
    top: 0px;
    margin: 30px 0 0 0;
  }
`;

const Item = styled.li`
  list-style-type: none;
  align-items: center;
  color: #676d73;
  padding: 12px;
  :hover {
    color: #2f3033;
    background-color: #fafafa;
  }
`;

const StyledLink = styled(Link)`
  display: block;
  font-size: 14px;
  line-height: 20px;
  text-decoration: none;
  color: #2f3033;
  @media (max-width: 700px) {
    font-size: 16px;
  }
`;

const Title = styled.div`
  font-size: 13px;
  line-height: 20px;
  color: #2f3033;
  margin-right: 8px;
`;

export default class Dropdown extends PureComponent {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      isOpen: false,
    };
  }

  handleClick() {
    this.setState(prevState => ({ isOpen: !prevState.isOpen }));
  }

  render() {
    const { firstName, lastName } = this.props;
    const initials = firstName.slice(0, 1) + lastName.slice(0, 1);
    const { isOpen } = this.state;
    return (
      <Menu>
        <Toggle onClick={this.handleClick}>
          <Avatar>{initials}</Avatar>
          <Title>{firstName}</Title>
          <ChevronIcon />
        </Toggle>
        <List isOpen={isOpen}>
          <Item>
            <StyledLink to="/customer/profile">Profile</StyledLink>
          </Item>
          <Item>
            <StyledLink to="/logout">Logout</StyledLink>
          </Item>
        </List>
      </Menu>
    );
  }
}

Dropdown.defaultProps = {
  firstName: 'John',
  lastName: 'Doe',
};

Dropdown.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
};
