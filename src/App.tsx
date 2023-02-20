import { BrowserRouter } from 'react-router-dom';
import { useState } from 'react';
import { RootRoutes } from './routes/RootRoutes';
import { AuthRoutes } from './routes/AuthRoutes';

export const App = () => {
  const [isLogged, setIsLogged] = useState(false);
  return (
    <div className="flex justify-center items-center h-screen bg-emerald-100 w-screen">
      <BrowserRouter>
        {isLogged ? <RootRoutes /> : <AuthRoutes />}
      </BrowserRouter>
    </div>
  );
};
