import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Login } from '@/pages/Login';
import { Register } from '@/pages/Register';
import { AuthNameRoutes, RootNameRoutes } from './RouteName';
import { Home } from '@/pages/Home';
import { NotFound } from '@/pages/NotFound';

export const RoutesNames = () => {
  return (
    <Routes>
      <Route path={AuthNameRoutes.LOGIN} element={<Login />} />
      <Route path={AuthNameRoutes.REGISTER} element={<Register />} />
      <Route path={RootNameRoutes.HOME} element={<Home />} />
      <Route path={RootNameRoutes.PAGE_NOT_FOUND} element={<NotFound />} />
    </Routes>
  );
};
