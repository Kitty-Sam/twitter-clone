import { ReactNode } from 'react';

export interface ButtonPropsType {
  type: 'button' | 'submit' | 'reset' | undefined;
  children: ReactNode;
  onClick?: () => void;
}
