import { createContext } from 'react';
import { ICurrentUser, IUser } from '@/context/state';

interface UserContextType {
  users: IUser[];
  currentUser: ICurrentUser | null;
  hasLoginError: boolean;
  login: any;
  logout: any;
  register: any;
}

export const UserContext = createContext<UserContextType>({
  users: [] as IUser[],
  currentUser: null,
  hasLoginError: false,
  login: (nickName: string, password: string) => null,
  logout: () => null,
  register: () => null,
});
