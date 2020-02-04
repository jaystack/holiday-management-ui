import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

const ProtectedRoute = ({
  isAuthenticated,
  component: Component,
  ...rest
}) => (
  <Route
    {...rest} render={props => {
      if (isAuthenticated) {
        return <Component {...props} />;
      }
      return (
        <Redirect to={{
          pathname: '/login',
        }}
        />
      );
    }}
  />
);

export default ProtectedRoute;

ProtectedRoute.propTypes = {
  component: PropTypes.elementType.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
};
