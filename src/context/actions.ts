import { IUser } from '@/context/state';

export interface LoginPayloadType {
  nickName: string;
  password: string;
}

export enum AuthName {
  LOGIN = 'LOGIN',
  LOGOUT = 'LOGOUT',
  REGISTER = 'REGISTER',
  FETCH_USERS = 'FETCH_USERS',
}

export const loginAC = (payload: LoginPayloadType) => {
  return { type: AuthName.LOGIN, payload } as const;
};

export type LoginType = {
  type: typeof AuthName.LOGIN;
  payload: LoginPayloadType;
};

export const registerAC = (payload: IUser) => {
  return { type: AuthName.REGISTER, payload } as const;
};

export type RegisterType = {
  type: typeof AuthName.REGISTER;
  payload: IUser;
};

export const fetchAC = (payload: IUser[]) => {
  return { type: AuthName.FETCH_USERS, payload } as const;
};

export type FetchType = {
  type: typeof AuthName.FETCH_USERS;
  payload: IUser[];
};

export const logOutAC = () => {
  return { type: AuthName.LOGOUT } as const;
};

export type LogOutType = {
  type: typeof AuthName.LOGOUT;
};

export type ActionsType = LoginType | RegisterType | LogOutType | FetchType;
