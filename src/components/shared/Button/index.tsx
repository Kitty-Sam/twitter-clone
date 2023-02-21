import React, { FC } from 'react';
import { ButtonPropsType } from './type';

export const Button: FC<ButtonPropsType> = ({ type, children, onClick }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="w-4/5 bg-lime-500 rounded-3xl uppercase text-green-50 p-2 hover:bg-lime-400"
    >
      {children}
    </button>
  );
};
