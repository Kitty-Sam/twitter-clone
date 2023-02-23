export const getStartUsers = (key: string) => {
  // @ts-ignore
  const usersLS = JSON.parse(localStorage.getItem(key));
  return usersLS || [];
};

export const getCurrentUser = (key: string) => {
  // @ts-ignore
  const currentUserLS = JSON.parse(localStorage.getItem(key));
  return currentUserLS || '';
};
