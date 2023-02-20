import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Login } from '../pages/Login';
import { Register } from '../pages/Register';
import { AuthNameRoutes } from './RouteName';

export const AuthRoutes = () => {
  return (
    <Routes>
      <Route path={AuthNameRoutes.LOGIN} element={<Login />} />
      <Route path={AuthNameRoutes.REGISTER} element={<Register />} />
    </Routes>
  );
};
