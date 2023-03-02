import { nanoid } from 'nanoid';
import { useAppDispatch } from '@/store/hooks';
import { addTweetForLoggedUser } from '@/store/reducers/userSlice';
import { getCurrentDate } from '@/helpers/getCurrentDate';
import { IUser } from '@/context';

export const useTweet = (tweetText: string, loggedUser: IUser) => {
  const dispatch = useAppDispatch();
  const id = nanoid();

  const addTweet = () => {
    if (loggedUser) {
      dispatch(
        addTweetForLoggedUser({
          currentLoggedUser: loggedUser,
          tweet: {
            id,
            text: tweetText,
            likes: [],
            date: getCurrentDate(),
          },
        })
      );
    }
  };

  return { addTweet };
};
