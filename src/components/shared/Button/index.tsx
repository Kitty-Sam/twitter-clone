import React, { FC } from 'react';
import { ButtonPropsType } from './type';

export const Button: FC<ButtonPropsType> = ({
  type,
  children,
  onClick,
  background,
  disabled,
}) => {
  return (
    <button
      disabled={disabled}
      type={type}
      onClick={onClick}
      className={
        background
          ? disabled
            ? 'px-4 py-2 bg-gray-400 rounded uppercase text-green-50 p-2 mx-2'
            : 'px-4 py-2 bg-lime-500 rounded uppercase text-green-50 p-2 hover:bg-lime-400 mx-2'
          : disabled
          ? 'px-4 py-2  rounded uppercase text-gray-400 p-2 border border-gray-400 mx-2'
          : 'px-4 py-2  rounded uppercase text-lime-500 p-2 border border-lime-500 mx-2'
      }
    >
      {children}
    </button>
  );
};
