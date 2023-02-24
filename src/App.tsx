import { BrowserRouter } from 'react-router-dom';
import { RoutesNames } from '@/routes';

export const App = () => {
  return (
    <div className="flex justify-center items-center h-full">
      <BrowserRouter>
        <RoutesNames />
      </BrowserRouter>
    </div>
  );
};
