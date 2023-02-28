import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { RootNameRoutes } from './RouteName';
import { Home } from '@/pages/Home';
import { NotFound } from '@/pages/NotFound';
import { Launch } from '@/pages/Launch';

export const RoutesNames = () => {
  return (
    <Routes>
      <Route path={RootNameRoutes.USER} element={<Home />} />
      <Route path={RootNameRoutes.PAGE_NOT_FOUND} element={<NotFound />} />
      <Route path={RootNameRoutes.LAUNCH} element={<Launch />} />
    </Routes>
  );
};
