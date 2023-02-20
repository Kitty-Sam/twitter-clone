import React, { FC } from 'react';
import { CustomInputPropsType } from './type';

export const Input: FC<CustomInputPropsType> = ({
  type,
  value,
  onChange,
  placeholder,
}) => {
  return (
    <input
      className="w-4/5 bg-slate-200 rounded-3xl text-slate-800 uppercase p-2 border-transparent focus:border-transparent focus:ring-0"
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};
