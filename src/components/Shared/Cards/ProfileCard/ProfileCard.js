import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { StyledServiceCard } from '../ServiceCard/ServiceCard';

const Card = styled(StyledServiceCard)`
  padding: 24px;
  text-align: center;
  align-items: center;
  background-color: #fff;
  float: left;
`;

const Title = styled.div`
  font-size: 18px;
  line-height: 24px;
  font-weight: 700;
  color: #2f3033;
  margin-top: 10px;
`;

const MutedText = styled.div`
  font-size: 14px;
  line-height: 20px;
  color: #676d73;
`;

const Avatar = styled.img`
  width: 124px;
  height: 124px;
  border-radius: 50%;
  position: relative;
  overflow: hidden;
  margin-bottom: 10px;
`;

const Button = styled.button`
  width: 140px;
  display: inline-block;
  background-color: #009fd9;
  color: #fff;
  font-size: 14px;
  line-height: 20px;
  padding-top: 8px;
  padding-bottom: 8px;
  border-radius: 4px;
  padding: 12px 22px;
  border: 2px solid transparent;
`;

const InfoBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 250px;
  height: 68px;
`;

const InfoBoxItem = styled.div`
  padding: 12px;
  font-size: 16px;
`;

const VerticalLine = styled.div`
  background: #e9eced;
  height: 35px;
  width: 1px;
`;

const ProfileCard = props => {
  const { avatar, name, email, projects, reviews } = props;
  const boxShadow = `0 -1px 1px 0 rgba(0,0,0,.04), 0 1px 2px 0 rgba(0,0,0,.16)`;

  return (
    <Card width="290px" boxShadow={boxShadow}>
      <Avatar src={avatar} />
      <Button>Upload Photo</Button>
      <Title>{name}</Title>
      <MutedText>{email}</MutedText>
      <InfoBox>
        <InfoBoxItem>
          <div>{projects}</div>
          <MutedText>Projects</MutedText>
        </InfoBoxItem>
        <VerticalLine />
        <InfoBoxItem>
          <div>{reviews}</div>
          <MutedText>Reviews</MutedText>
        </InfoBoxItem>
      </InfoBox>
    </Card>
  );
};

ProfileCard.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  email: PropTypes.string,
  projects: PropTypes.number,
  reviews: PropTypes.number,
};

export default ProfileCard;
