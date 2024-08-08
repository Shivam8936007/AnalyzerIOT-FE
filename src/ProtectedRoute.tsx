// src/components/ProtectedRoute.tsx
import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { RootState } from './redux-store/store';

interface ProtectedRouteProps {
  element: React.ReactElement;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ element }) => {
  const { accessToken } = useSelector((state: RootState) => state.userData);

  return accessToken ? element : <Navigate to="/login" />;
};

export default ProtectedRoute;
