import { IUser } from '@/context';

export interface EditTweetModalPropsType {
  isOpen: boolean;
  renderBackdrop: (values: any) => JSX.Element;
  close: () => void;
  tweetId: string;
  currentUser: IUser;
  tweetText: string;
}
