import { RootState } from '@/store/store';

export const getAllUsers = (state: RootState) => state.users.users;
export const getCurrentLoggedUser = (state: RootState) =>
  state.users.currentLoggedUser;

export const getCredentials = (state: RootState) => state.users.credentials;
