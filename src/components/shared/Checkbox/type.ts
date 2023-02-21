import { ChangeEvent } from 'react';

export interface CheckboxPropsType {
  label: string;
  value: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}
