import { BrowserRouter } from 'react-router-dom';
import { RoutesNames } from '@/routes';

export const App = () => {
  return (
    <div className="flex justify-center items-center bg-lime-50 w-screen">
      <BrowserRouter>
        <RoutesNames />
      </BrowserRouter>
    </div>
  );
};
