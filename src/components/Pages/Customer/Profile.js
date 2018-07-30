import React from 'react';
import styled from 'styled-components';
import Layout from '../../Layout/Layout';
import ProfileCard from '../../Shared/Cards/ProfileCard';
import { ListGroup, ButtonArrowLink } from '../../Shared/Misc';

const StyledSection = styled.section`
  display: flex;
  padding: 20px 60px 20px 60px;
  align-content: center;
  align-items: flex-start;
  background-color: #fafafa;
  justify-content: center;

  @media (max-width: 1024px) {
    padding: 0px;
    flex-direction: column;
  }
`;

const Footer = styled.div`
  margin: 8px;
  flex-grow: 1;
  flex-direction: column;

  @media (max-width: 1024px) {
    margin: 1rem 0 0 0;
    padding: 0px;
    width: 100%;
  }
`;

const Profile = props => (
  <Layout>
    <StyledSection>
      <ProfileCard {...props} />
      <Footer>
        <ListGroup>
          <ButtonArrowLink to="/profile/information">Account Settings</ButtonArrowLink>
          <ButtonArrowLink to="/profile/notifications">Notification Settings</ButtonArrowLink>
        </ListGroup>
        <ListGroup>
          <ButtonArrowLink to="/logout">Logout</ButtonArrowLink>
        </ListGroup>
      </Footer>
    </StyledSection>
  </Layout>
);

Profile.defaultProps = {
  name: 'John Doe',
  avatar: 'https://via.placeholder.com/124x124',
  email: 'john.doe@example.com',
  projects: 1,
  reviews: 0,
};

export default Profile;
