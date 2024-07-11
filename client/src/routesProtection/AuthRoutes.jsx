/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { UserContext } from '../Context/UserContext';
import { Navigate, Outlet } from 'react-router-dom';

const AuthRoutes = () => {

    const {user} = useContext(UserContext);
  return (
      user.name ? <Outlet /> : <Navigate to="login"/> 
  );
}

export default AuthRoutes;