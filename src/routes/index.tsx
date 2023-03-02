import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { RootNameRoutes } from './RouteName';
import { User } from '@/pages/User';
import { NotFound } from '@/pages/NotFound';
import { Launch } from '@/pages/Launch';

export const RoutesNames = () => {
  return (
    <Routes>
      <Route path={RootNameRoutes.USER} element={<User />} />
      <Route path={RootNameRoutes.PAGE_NOT_FOUND} element={<NotFound />} />
      <Route path={RootNameRoutes.LAUNCH} element={<Launch />} />
    </Routes>
  );
};
