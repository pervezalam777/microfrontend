// External dependencies
import React from 'react';
import PropTypes from 'prop-types';
import {
  Route,
  Redirect
} from 'react-router-dom';

function ProtectedRouteComponent({ children, ...rest }) {
  let { isLoggedIn } = rest;
  return (
    <Route
      {...rest}
      render={({ location }) => {
        return isLoggedIn ? (children) : (<Redirect to={{
          pathname: '/login',
          state: { from: location }
        }}/>);
      }}
    />
  );
}

ProtectedRouteComponent.propTypes = {
  children: PropTypes.object
};

export default ProtectedRouteComponent;