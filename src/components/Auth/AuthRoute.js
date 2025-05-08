import React from 'react';
import { Redirect } from 'react-router-dom';

const AuthRoute = ({ user, requiredRole, children }) => {
  if (!user) {
    return <Redirect to="/login" />;
  }

  if (requiredRole && user.role !== requiredRole) {
    return <Redirect to="/" />;
  }

  return children;
};

export default AuthRoute;