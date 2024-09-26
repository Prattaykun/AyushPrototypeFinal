import React from 'react';
import { Navigate } from 'react-router-dom';
import { getAuth } from 'firebase/auth';

const ProtectedRoute = ({ children }) => {
  const auth = getAuth();
  const user = auth.currentUser; // Check if the user is logged in

  if (user === undefined) {
    // Optional: Show a loading spinner while checking auth state
    return <div>Loading...</div>;
  }

  if (!user) {
    // If no user, redirect to login
    return <Navigate to="/RoleSelect" />;
  }

  return children; // If user is logged in, render the requested component
};

export default ProtectedRoute;
