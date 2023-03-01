export interface ITweet {
  id: string;
  text: string;
  likes: {
    userId: string;
  }[];
  date: string;
}
export interface IUser {
  id: string;
  avatar?: string;
  bgImage?: string;
  username: string;
  firstName: string;
  lastName: string;
  location: string;
  joined: string;
  tweets: ITweet[];
}
