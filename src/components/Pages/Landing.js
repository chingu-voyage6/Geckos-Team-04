import React, { Component } from 'react';
import ServiceCard from '../Layout/Cards/ServiceCard/ServiceCard';
import UserCard from '../Layout/Cards/UserCard/UserCard';
import UtilCard from '../Layout/Cards/UtilCard/UtilCard';

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      service: {
        name: 'House Cleaning',
        title: 'General House Cleaning',
      },
      utility: {
        name: 'Events',
        image: '',
      },
    };
  }

  render() {
    const { service, utility } = this.state;
    return (
      <div>
        <UserCard />
        <ServiceCard service={service} />
        <UtilCard utility={utility} />
      </div>
    );
  }
}

export default Landing;
