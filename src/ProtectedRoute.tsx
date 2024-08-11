import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from './redux-store/store';
import Cookies from 'js-cookie';

const ProtectedRoute: React.FC = () => {
  const isAuthenticated = Cookies.get("accessToken");

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
