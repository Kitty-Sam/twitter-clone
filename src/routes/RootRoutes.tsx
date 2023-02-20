import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from '../pages/Home';
import { NotFound } from '../pages/NotFound';
import { RootNameRoutes } from './RouteName';

export const RootRoutes = () => {
  return (
    <Routes>
      <Route path={RootNameRoutes.HOME} element={<Home />} />
      <Route path={RootNameRoutes.PAGE_NOT_FOUND} element={<NotFound />} />
    </Routes>
  );
};
