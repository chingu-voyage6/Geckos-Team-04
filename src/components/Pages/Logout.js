import React, { PureComponent } from 'react';
import { Redirect } from 'react-router-dom';
import { logout } from '../auth/auth-helper';

export default class Logout extends PureComponent {
  render() {
    logout(() => console.debug('logged out'));
    return <Redirect to="/" />;
  }
}
