import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Card from '../Card';
import CardHeader from '../CardHeader';
import CardName from '../CardName';
import CardTitle from '../CardTitle';
import CardBody from '../CardBody';

const UserAvatar = styled.div`
  position: absolute;
  display: flex;
  flex: 0 0 auto;
  height: 6rem;
  width: 6rem;
  top: calc(50% - 3rem);
  left: calc(50% - 3rem);
  background-image: url('https://source.unsplash.com/collection/1358089/250x350');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50%;
  border-radius: 100%;
  z-index: 10;
`;

const UserCard = props => {
  const {
    user: { name, title },
  } = props;

  return (
    <Card>
      <CardHeader />
      <UserAvatar />
      <CardBody>
        <CardName>{name}</CardName>
        <CardTitle>{title}</CardTitle>
      </CardBody>
    </Card>
  );
};

UserCard.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserCard;
