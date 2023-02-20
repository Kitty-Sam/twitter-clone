export interface IUser {
  id: string;
  firstName: string;
  secondName: string;
  nickName: string;
  location: string;
  password: string;
}

export interface ICurrentUser {
  nickName: string;
  password: string;
}
export interface IInit {
  users: IUser[];
  currentUser: null | ICurrentUser;
  hasLoginError: boolean;
}

export const initialState: IInit = {
  users: [] as IUser[],
  hasLoginError: false,
  currentUser: null,
};
