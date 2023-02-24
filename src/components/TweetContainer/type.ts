export interface TweetPropsType {
  tweet: string;
  name: string;
  nickName: string;
  date: string;
  count: { userId: number }[];
  currentUserId: number;
  avatarTweet: string;
}
