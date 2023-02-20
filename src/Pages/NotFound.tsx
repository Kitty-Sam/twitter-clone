import React from 'react';
import { useNavigate } from 'react-router-dom';
import { RootNameRoutes } from '../Routes/RouteName';

export const NotFound = () => {
  const navigate = useNavigate();
  const onHomeNavigate = () => {
    navigate(RootNameRoutes.HOME);
  };
  return (
    <button className="btn" type="button" onClick={onHomeNavigate}>
      Home
    </button>
  );
};
