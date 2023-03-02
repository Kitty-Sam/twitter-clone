import React, { ChangeEvent, FC, useState } from 'react';
import { Modal } from 'react-overlays';
import { Button } from '@shared/Button';
import { ButtonCancel } from '@shared/ButtonCancel';
import { TextBold } from '@shared/Text';
import { EditTweetModalPropsType } from '@/components/EditTweetModal/type';

import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { getAllUsers } from '@/store/selectors';
import { editTweetForLoggedUser } from '@/store/reducers/userSlice';

export const EditTweetModal: FC<EditTweetModalPropsType> = ({
  isOpen,
  renderBackdrop,
  close,
  tweetId,
  currentUser,
  tweetText,
}) => {
  const allUsers = useAppSelector(getAllUsers);

  const dispatch = useAppDispatch();

  const [editedTweetText, setEditedTweetText] = useState(tweetText);

  const currentTweet = allUsers
    .filter((user) => user.username === currentUser.username)[0]
    .tweets.filter((tweet) => tweet.id === tweetId)[0];

  const editTweet = () => {
    if (currentUser) {
      dispatch(
        editTweetForLoggedUser({
          currentLoggedUser: currentUser,
          editedTweet: {
            ...currentTweet,
            text: editedTweetText,
          },
          tweetId,
        })
      );
    }
  };
  const editTweetPress = () => {
    editTweet();
    close();
  };

  const cancelClick = () => {
    close();
  };

  const changeTextClick = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setEditedTweetText(e.target.value);
  };

  return (
    <Modal
      className="fixed z-10 top-0 left-0 bottom-0 right-0"
      show={isOpen}
      renderBackdrop={renderBackdrop}
    >
      <div className="flex items-center justify-center h-full">
        <div className="bg-amber-50 rounded-3xl p-5 w-1/4">
          <div className="flex flex-row justify-between items-center py-2">
            <TextBold>Your tweet</TextBold>
            <ButtonCancel onClick={cancelClick}>x</ButtonCancel>
          </div>

          <TextBold>was created</TextBold>
          <p className="text-sm text-gray-900">{currentTweet.date}</p>

          <TextBold>liked</TextBold>
          <p className="text-sm text-gray-900">{currentTweet.likes.length}</p>

          <label
            htmlFor="message"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
          >
            Your message
          </label>
          <textarea
            id="message"
            rows={4}
            className="block p-2.5 w-full text-sm text-gray-900 bg-lime-200 rounded-lg border border-gray-300 focus:ring-lime-500 focus:border-lime-500 "
            placeholder="Write your thoughts here..."
            value={editedTweetText}
            onChange={changeTextClick}
          />

          <div className="flex flex-row justify-evenly items-center py-5">
            <Button background type="button" onClick={editTweetPress}>
              Edit
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  );
};