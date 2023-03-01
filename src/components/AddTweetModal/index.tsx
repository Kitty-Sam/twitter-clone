import React, { ChangeEvent, FC, useState } from 'react';
import { Modal } from 'react-overlays';
import { Button } from '@shared/Button';
import { ButtonCancel } from '@shared/ButtonCancel';
import { TextBold } from '@shared/Text';
import { AddTweetModalPropsType } from '@/components/AddTweetModal/type';
import { useAppSelector } from '@/store/hooks';
import { useTweet } from '@/hooks/useTweet';

export const AddTweetModal: FC<AddTweetModalPropsType> = ({
  isOpen,
  renderBackdrop,
  close,
}) => {
  const currentLoggedUser = useAppSelector(
    (state) => state.users.currentLoggedUser!
  );
  const [value, setValue] = useState('');
  const { addTweet, removeTweet } = useTweet(value, currentLoggedUser);

  const addTweetPress = () => {
    addTweet();
    setValue('');
    close();
  };

  const cancelClick = () => {
    setValue('');
    close();
  };

  const changeTextClick = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
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
            <TextBold>Add tweet</TextBold>
            <ButtonCancel onClick={cancelClick}>x</ButtonCancel>
          </div>

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
            value={value}
            onChange={changeTextClick}
          />

          <div className="flex flex-row justify-evenly items-center py-5">
            <Button background type="button" onClick={addTweetPress}>
              Add
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  );
};
