import React, { FC, PropsWithChildren } from 'react';

export const Title: FC<PropsWithChildren> = ({ children }) => {
  return <p className="font-bold text-3xl">{children}</p>;
};
