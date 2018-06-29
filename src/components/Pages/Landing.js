import React, { Component } from 'react';
import ServiceCard from '../Layout/Cards';
import UserCard from '../Layout/Cards/UserCard/UserCard';

class Landing extends Component {
  getDefaultProps() {
    return {
      service: {
        name: 'House Cleaning',
        title: 'General House Cleaning',
      },
    };
  }

  render() {
    return (
      <div>
        <UserCard />
      </div>
    );
  }
}

export default Landing;
