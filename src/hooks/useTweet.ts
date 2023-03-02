import { nanoid } from 'nanoid';
import { useAppDispatch } from '@/store/hooks';
import {
  addTweetForLoggedUser,
  editTweetForLoggedUser,
  deleteTweetForLoggedUser,
} from '@/store/reducers/userSlice';
import { getCurrentDate } from '@/helpers/getCurrentDate';
import { ITweet, IUser } from '@/context';

export const useTweet = (
  tweetText: string,
  loggedUser: IUser,
  tweet?: ITweet
) => {
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

  const editTweet = () => {
    if (loggedUser && tweet) {
      dispatch(
        editTweetForLoggedUser({
          currentLoggedUser: loggedUser,
          editedTweet: {
            ...tweet,
            text: tweetText,
          },
          tweetId: tweet.id,
        })
      );
    }
  };

  const deleteTweet = () => {
    if (loggedUser && tweet) {
      dispatch(
        deleteTweetForLoggedUser({
          currentLoggedUser: loggedUser,
          tweetId: tweet.id,
        })
      );
    }
  };
  return { addTweet, editTweet, deleteTweet };
};
