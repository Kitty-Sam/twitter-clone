import { BrowserRouter } from 'react-router-dom';
import { useState } from 'react';
import { RootRoutes } from './Routes/RootRoutes';
import { AuthRoutes } from './Routes/AuthRoutes';

export const App = () => {
  const [isLogged, setIsLogged] = useState(true);
  return (
    <BrowserRouter>{isLogged ? <RootRoutes /> : <AuthRoutes />}</BrowserRouter>
  );
};
