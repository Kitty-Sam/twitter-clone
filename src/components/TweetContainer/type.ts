export interface TweetPropsType {
  tweet: string;
  name: string;
  nickName: string;
  date: string;
  count: { userId: string }[];
  currentUserId: string;
  avatarTweet?: string;
  isAuth: boolean;
  tweetId: string;
}
