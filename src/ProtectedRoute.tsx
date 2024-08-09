import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from './redux-store/store';

const ProtectedRoute: React.FC = () => {
  const isAuthenticated = useSelector((state: RootState) => !!state.userData.accessToken);

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
