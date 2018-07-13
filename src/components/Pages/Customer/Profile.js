import React from 'react';
import styled from 'styled-components';
import Layout from '../../Layout/Layout';
import ProfileCard from '../../Shared/Cards/ProfileCard';
import { ListGroup } from '../../Shared/Misc';

const StyledSection = styled.section`
  display: flex;
  padding: 60px;
  align-content: center;
  align-items: flex-start;
  background-color: #fafafa;
  justify-content: center;
`;

const Footer = styled.div`
  margin: 1rem;
  flex-grow: 1;
  flex-direction: column;
`;

const Profile = props => (
  <Layout>
    <StyledSection>
      <ProfileCard {...props} />
      <Footer>
        <ListGroup>
          <div>Account Settings</div>
          <div>Notification Settings</div>
        </ListGroup>
        <ListGroup>
          <div>Logout</div>
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
