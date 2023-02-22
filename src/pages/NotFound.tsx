import React from 'react';
import { Button } from '@shared/Button';
import { useNavigate } from 'react-router-dom';
import { RootNameRoutes } from '@/routes/RouteName';
import { notFound } from '@/constants/images';

export const NotFound = () => {
  const navigate = useNavigate();
  const backHome = () => {
    navigate(RootNameRoutes.HOME, { replace: true });
  };

  return (
    <div className="w-9/12 bg-amber-50  h-screen flex justify-center items-center flex-col">
      <div className="bg-amber-50 h-1/4 w-1/4 mt-5">
        <img src={notFound} alt="404" className="h-full w-full rounded-3xl" />
        <Button background={false} onClick={backHome}>
          Back home
        </Button>
      </div>
    </div>
  );
};
