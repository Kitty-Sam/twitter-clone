import { FC } from 'react';
import { CheckboxPropsType } from './type';

export const Checkbox: FC<CheckboxPropsType> = ({ label, value, onChange }) => {
  return (
    <div className="block">
      <div className="mt-2">
        <label className="inline-flex items-center">
          <input
            type="checkbox"
            className="w-6 h-6 rounded-full text-lime-600 focus:ring-0"
            checked={value}
            onChange={onChange}
          />
          <span className="ml-2">{label}</span>
        </label>
      </div>
    </div>
  );
};
