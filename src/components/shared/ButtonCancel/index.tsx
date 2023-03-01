import React, { FC } from 'react';
import { ButtonCancelPropsType } from './type';

export const ButtonCancel: FC<ButtonCancelPropsType> = ({
  type,
  children,
  onClick,
  disabled,
}) => {
  return (
    <button
      disabled={disabled}
      type={type}
      onClick={onClick}
      className="px-4 py-2  rounded uppercase text-black p-2 border bg-red-300 mx-2"
    >
      {children}
    </button>
  );
};
