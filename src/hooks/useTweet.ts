import { useAppDispatch } from '@/store/hooks';
import { addTweetForLoggedUser } from '@/store/reducers/userSlice';
import { getCurrentDate } from '@/helpers/getCurrentDate';

export const useTweet = (value: string, loggedUser: string) => {
  const dispatch = useAppDispatch();
  const addTweet = () => {
    if (loggedUser) {
      dispatch(
        addTweetForLoggedUser({
          currentLoggedUser: loggedUser,
          tweet: {
            text: value,
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
