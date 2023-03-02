import React, { FC } from 'react';
import { CustomInputPropsType } from './type';

export const Input: FC<CustomInputPropsType> = ({
  type,
  value,
  onChange,
  placeholder,
  id,
}) => {
  return (
    <input
      id={id}
      className="w-full bg-lime-200 rounded text-slate-800 my-2 px-4 border-transparent focus:border-transparent focus:ring-0"
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};
