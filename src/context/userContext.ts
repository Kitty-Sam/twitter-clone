import { createContext } from 'react';

export interface ITweet {
  text: string;
  likes: {
    userId: number;
  }[];
}
export interface IUser {
  id: number;
  avatar?: string;
  bgImage?: string;
  username: string;
  firstName: string;
  location: string;
  joined: string;
  tweets: ITweet[];
}

interface UserContextType {
  users: IUser[];
}

export const UserContext = createContext<UserContextType>({
  users: [] as IUser[],
});
