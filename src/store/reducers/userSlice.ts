import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ITweet, IUser } from '@/context';
import { users } from '@/constants/db';

export interface UserStateType {
  users: IUser[];
  currentLoggedUser: IUser | null;
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
      state.users = [...state.users, action.payload];
    },
    addTweetForLoggedUser: (
      state,
      action: PayloadAction<{
        currentLoggedUser: IUser;
        tweet: ITweet;
      }>
    ) => {
      state.users = state.users.map((user) => {
        if (user.username === action.payload.currentLoggedUser.username) {
          return {
            ...user,
            tweets: [...user.tweets, action.payload.tweet],
          };
        }
        return user;
      });
    },
    editTweetForLoggedUser: (
      state,
      action: PayloadAction<{
        currentLoggedUser: IUser;
        editedTweet: ITweet;
        tweetId: string;
      }>
    ) => {
      state.users = state.users.map((user) => {
        if (user.username === action.payload.currentLoggedUser.username) {
          return {
            ...user,
            tweets: user.tweets.map((tweet) =>
              tweet.id === action.payload.tweetId
                ? action.payload.editedTweet
                : tweet
            ),
          };
        }
        return user;
      });
    },
    currentLoggedUser: (state, action: PayloadAction<IUser>) => {
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
  editTweetForLoggedUser,
} = userSlice.actions;

export default userSlice.reducer;
