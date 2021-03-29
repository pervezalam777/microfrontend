// External dependencies
import React from 'react';
import PropTypes from 'prop-types';
import {
  Route,
  Redirect
} from 'react-router-dom';

/**
 * Protected route component render component if user is logged in
 * otherwise it redirects user to /login route
 * @param {Object} props component properties 
 * @returns {ReactElement} 
 */
function ProtectedRouteComponent({ children, isLoggedIn, ...rest }) {
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
  isLoggedIn: PropTypes.bool.isRequired,
  children: PropTypes.object,
};

export default ProtectedRouteComponent;