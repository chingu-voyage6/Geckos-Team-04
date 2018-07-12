import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ProfileCard = props => {
  const { avatar, name, email, projects, reviews } = props;

  return (
    <div>
      <div>{avatar}</div>
      <div>{name}</div>
      <div>{email}</div>
      <div>{projects}</div>
      <div>{reviews}</div>
    </div>
  );
};

ProfileCard.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  email: PropTypes.string,
};

export default ProfileCard;
