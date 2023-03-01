import { ReactNode } from 'react';

export interface ButtonCancelPropsType {
  type?: 'button' | 'submit' | 'reset' | undefined;
  children: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}
