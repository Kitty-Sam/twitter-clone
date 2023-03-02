import { IUser } from '@/context';

export interface AddTweetModalPropsType {
  isOpen: boolean;
  renderBackdrop: (values: any) => JSX.Element;
  close: () => void;
  currentLoggedUser: IUser;
}
