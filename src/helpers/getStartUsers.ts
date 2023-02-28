import { users } from '@/constants/db';

export const getDataFromLS = (key: string) => {
  switch (key) {
    case 'rememberedUsers': {
      // @ts-ignore
      const rememberedUsers = JSON.parse(localStorage.getItem(key));
      return rememberedUsers || [];
    }
    case 'currentUser': {
      // @ts-ignore
      const currentUserLS = JSON.parse(localStorage.getItem(key));
      return currentUserLS || '';
    }
    case 'allUsers': {
      // @ts-ignore
      const usersLS = JSON.parse(localStorage.getItem(key));
      return usersLS || users;
    }
    case 'credentials': {
      // @ts-ignore
      const credentials = JSON.parse(localStorage.getItem(key));
      return credentials || '';
    }
    default:
      return [];
  }
};
