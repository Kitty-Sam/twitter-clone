import { users } from '@/constants/db';

export const getStartUsers = (key: string) => {
  // @ts-ignore
  const usersLS = JSON.parse(localStorage.getItem(key));
  return usersLS || [];
};

export const getAllUsers = (key: string) => {
  // @ts-ignore
  const usersLS = JSON.parse(localStorage.getItem(key));
  return usersLS || users;
};

export const getCurrentUser = (key: string) => {
  // @ts-ignore
  const currentUserLS = JSON.parse(localStorage.getItem(key));
  return currentUserLS || '';
};

export const getCredential = (key: string) => {
  // @ts-ignore
  const credentials = JSON.parse(localStorage.getItem(key));
  return credentials;
};

export const getRememberedUsers = (key: string) => {
  // @ts-ignore
  const rememberedUsers = JSON.parse(localStorage.getItem(key));
  return rememberedUsers;
};
