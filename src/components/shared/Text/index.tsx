import React, { FC, PropsWithChildren } from 'react';

export const Text: FC<PropsWithChildren> = ({ children }) => {
  return <p className="font-bold uppercase">{children}</p>;
};
