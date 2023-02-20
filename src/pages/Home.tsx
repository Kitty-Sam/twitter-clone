import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '@/context/userContext';
import { AuthNameRoutes } from '@/routes/RouteName';

export const Home = () => {
  const { logout, currentUser } = useContext(UserContext);
  const navigate = useNavigate();

  if (!currentUser) {
    navigate(AuthNameRoutes.LOGIN, { replace: true });
  }

  return (
    <div className="w-10/12 bg-amber-50 h-screen">
      <h1>Welcome</h1>
      <button onClick={logout}>Logout</button>
    </div>
  );
};
