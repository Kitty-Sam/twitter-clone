import { BrowserRouter } from 'react-router-dom';
import { UserContext } from '@/context/userContext';
import { RoutesNames } from '@/routes';
import { users } from '@/constants/db';

export const App = () => {
  return (
    <div className="flex justify-center items-center h-full w-screen">
      <BrowserRouter>
        <UserContext.Provider value={{ users }}>
          <RoutesNames />
        </UserContext.Provider>
      </BrowserRouter>
    </div>
  );
};
