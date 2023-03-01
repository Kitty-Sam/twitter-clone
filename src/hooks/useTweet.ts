import { nanoid } from 'nanoid';
import { useAppDispatch } from '@/store/hooks';
import { addTweetForLoggedUser } from '@/store/reducers/userSlice';
import { getCurrentDate } from '@/helpers/getCurrentDate';

export const useTweet = (tweetText: string, loggedUser: string) => {
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

  const removeTweet = () => {
    console.log('remove');
  };
  return { addTweet, removeTweet };
};
