import { useCallback, useState } from 'react';

export const useForceUpdate = () => {
  const [, updateState] = useState();
  // @ts-ignore
  return useCallback(() => updateState({}), []);
};
