import React, { FC, PropsWithChildren } from 'react';

export const Text: FC<PropsWithChildren> = ({ children }) => {
  return <p className="text-5xl font-bold uppercase">{children}</p>;
};
