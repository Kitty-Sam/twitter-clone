import React, { FC } from 'react';
import { Modal } from 'react-overlays';
import { Text } from '@shared/Text';
import { Button } from '@shared/Button';
import { AddTweetModalPropsType } from '@/components/AddTweetModal/type';

export const AddTweetModal: FC<AddTweetModalPropsType> = ({
  isOpen,
  renderBackdrop,
  close,
}) => {
  return (
    <Modal
      className="fixed z-10 top-1/4 left-1/3 w-1/5  bg-amber-50 rounded-3xl p-5"
      show={isOpen}
      renderBackdrop={renderBackdrop}
    >
      <div>
        <div className="flex flex-row justify-between items-center py-2">
          <Text>Add tweet</Text>
          <Button background onClick={() => close()}>
            x
          </Button>
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
        />

        <div className="flex flex-row justify-evenly items-center py-5">
          <Button
            background
            type="button"
            onClick={() => {
              console.log('Add');
            }}
          >
            Add
          </Button>
        </div>
      </div>
    </Modal>
  );
};
