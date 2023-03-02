import { ITweet } from '@/context';

export interface TweetPropsType {
  tweet: ITweet;
  name: string;
  nickName: string;
  currentUserId: string;
  avatarTweet?: string;
  isAuth: boolean;
}
