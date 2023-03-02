import React, { FC, PropsWithChildren } from 'react';

export const TextBold: FC<PropsWithChildren> = ({ children }) => {
  return <p className="text-l text-gray-400">{children}</p>;
};
