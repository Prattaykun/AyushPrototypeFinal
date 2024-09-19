// ProtectedRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';
import { getAuth } from 'firebase/auth';

const ProtectedRoute = ({ children }) => {
  const auth = getAuth();
  const user = auth.currentUser; // Check if the user is logged in

  if (!user) {
    // If no user, redirect to login
    return <Navigate to="/LoginSignup" />;
  }

  return children; // If user is logged in, render the requested component
};

export default ProtectedRoute;
