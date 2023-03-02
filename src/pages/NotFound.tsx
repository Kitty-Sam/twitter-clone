import React from 'react';
import { Button } from '@shared/Button';
import { useNavigate } from 'react-router-dom';
import { RootNameRoutes } from '@/routes/RouteName';
import { notFound } from '@/constants/images';

export const NotFound = () => {
  const navigate = useNavigate();
  const backHome = () => {
    navigate(RootNameRoutes.LAUNCH, { replace: true });
  };

  return (
    <div className="w-9/12 bg-amber-50  h-screen flex justify-center items-center flex-col">
      <div className="bg-amber-50  mt-5 flex flex-col justify-center items-center">
        <img
          src={notFound}
          alt="404"
          className="h-full w-full rounded-3xl mb-10"
        />
        <Button background={false} onClick={backHome}>
          Back
        </Button>
      </div>
    </div>
  );
};
