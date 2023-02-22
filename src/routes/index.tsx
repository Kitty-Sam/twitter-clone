import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { RootNameRoutes } from './RouteName';
import { Home } from '@/pages/Home';
import { NotFound } from '@/pages/NotFound';

export const RoutesNames = () => {
  return (
    <Routes>
      <Route path={RootNameRoutes.HOME} element={<Home />} />
      <Route path={RootNameRoutes.PAGE_NOT_FOUND} element={<NotFound />} />
      <Route path={RootNameRoutes.TWEETS} element={<div>Tweet</div>} />
    </Routes>
  );
};
