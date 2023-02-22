import React, { FC } from 'react';
import { ButtonPropsType } from './type';

export const Button: FC<ButtonPropsType> = ({
  type,
  children,
  onClick,
  background,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={
        background
          ? 'px-4 py-2 bg-lime-500 rounded uppercase text-green-50 p-2 hover:bg-lime-400'
          : 'px-4 py-2  rounded uppercase text-lime-500 p-2'
      }
    >
      {children}
    </button>
  );
};
