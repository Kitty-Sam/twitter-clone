import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ITweet, IUser } from '@/context/userContext';
import { users } from '@/constants/db';

export interface UserStateType {
  users: IUser[];
  currentLoggedUser: string | null;
  credentials: {
    username: string;
    password: string;
  };
}

const initialState: UserStateType = {
  users,
  currentLoggedUser: null,
  credentials: {} as {
    username: string;
    password: string;
  },
};

export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addNewUser: (state, action: PayloadAction<IUser>) => {
      state.users.push(action.payload);
    },
    addTweetForLoggedUser: (
      state,
      action: PayloadAction<{ currentLoggedUser: string; tweet: ITweet }>
    ) => {
      state.users
        .filter((user) => user.username === action.payload.currentLoggedUser)[0]
        .tweets.unshift(action.payload.tweet);
    },
    currentLoggedUser: (state, action: PayloadAction<string>) => {
      state.currentLoggedUser = action.payload;
    },
    removeCurrentLoggedUser: (state) => {
      state.currentLoggedUser = null;
    },
    addCredentials: (
      state,
      action: PayloadAction<{ password: string; username: string }>
    ) => {
      state.credentials = action.payload;
    },
  },
});

export const {
  addNewUser,
  currentLoggedUser,
  addCredentials,
  removeCurrentLoggedUser,
  addTweetForLoggedUser,
} = userSlice.actions;

export default userSlice.reducer;
