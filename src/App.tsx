import { BrowserRouter } from 'react-router-dom';
import { useEffect, useReducer } from 'react';
import { UserContext } from '@/context/userContext';
import { userReducer } from '@/context/userReducer';
import { initialState, IUser } from '@/context/state';
import {
  fetchAC,
  loginAC,
  LoginPayloadType,
  logOutAC,
  registerAC,
} from '@/context/actions';
import { usersDB } from '@/constants/users';
import { RoutesNames } from '@/routes';

export const App = () => {
  const [{ currentUser, hasLoginError, users }, dispatch] = useReducer(
    userReducer,
    initialState
  );

  useEffect(() => {
    dispatch(fetchAC(usersDB));
  }, []);

  const login = (payload: LoginPayloadType) => {
    dispatch(loginAC(payload));
  };
  const logout = () => {
    dispatch(logOutAC());
  };

  const register = (payload: IUser) => {
    dispatch(registerAC(payload));
  };

  const userContext = {
    currentUser,
    users,
    hasLoginError,
    login,
    register,
    logout,
  };

  return (
    <div className="flex justify-center items-center h-full w-screen">
      <BrowserRouter>
        <UserContext.Provider value={userContext}>
          <RoutesNames />
        </UserContext.Provider>
      </BrowserRouter>
    </div>
  );
};
