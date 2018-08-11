import React, { Component } from 'react';
import {
  Route,
  Redirect,
} from 'C:/Users/marti/AppData/Local/Microsoft/TypeScript/2.9/node_modules/@types/react-router-dom';
import { isAuthenticated } from './auth-helper';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
      )
    }
  />
);

export default PrivateRoute;
