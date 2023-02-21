import { ChangeEvent } from 'react';

export interface CustomInputPropsType {
  type: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  id: string;
}
