import React from 'react';
import { useNavigate } from 'react-router-dom';
import { RootNameRoutes } from '../routes/RouteName';

export const Home = () => {
  const navigate = useNavigate();
  const onNotFoundNavigate = () => {
    navigate(RootNameRoutes.PAGE_NOT_FOUND);
  };

  return (
    <button className="btn" type="button" onClick={onNotFoundNavigate}>
      Not found
    </button>
  );
};
