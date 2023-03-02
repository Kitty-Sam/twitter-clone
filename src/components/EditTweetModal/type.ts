import { ITweet, IUser } from '@/context';

export interface EditTweetModalPropsType {
  isOpen: boolean;
  renderBackdrop: (values: any) => JSX.Element;
  close: () => void;
  currentUser: IUser;
  tweet: ITweet;
}
