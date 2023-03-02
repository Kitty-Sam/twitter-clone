import React, { FC } from 'react';
import { FiHeart } from 'react-icons/fi';
import { AiFillEdit } from 'react-icons/all';
import { TweetPropsType } from '@/components/TweetContainer/type';
import { useCount } from '@/hooks/useCount';
import { useOpen } from '@/hooks/useOpen';
import { EditTweetModal } from '@/components/EditTweetModal';
import { useAppSelector } from '@/store/hooks';
import { getCurrentLoggedUser } from '@/store/selectors';

export const TweetContainer: FC<TweetPropsType> = ({
  tweet,
  name,
  nickName,
  currentUserId,
  avatarTweet,
  isAuth,
}) => {
  const { onToggle, counter, isPressed } = useCount(
    tweet.likes.length,
    Boolean(tweet.likes.find((el) => el.userId === currentUserId))
  );

  const editTweet = useOpen(false);

  const currentLoggedUser = useAppSelector(getCurrentLoggedUser);

  const renderBackdrop = (props: any) => (
    <div
      className="fixed top-0 bottom-0 left-0 right-0 bg-black opacity-50"
      {...props}
    />
  );

  return (
    <div>
      {!tweet ? (
        <p className="px-4 italic">Add your first tweet ...</p>
      ) : (
        <div className="w-2/3 flex flex-row items-center  border-b   w-full  p-4 bg-white">
          <div className="w-[60px] h-[60px]">
            <img
              src={avatarTweet}
              alt="avatar"
              className="w-full h-full rounded-full"
            />
          </div>
          <div className="flex flex-col px-4">
            <div className="flex flex-row">
              <p className="pr-4 font-bold">{name}</p>
              <p className="px-2 text-gray-400">@{nickName}</p>
              <p className="px-2 text-gray-400">{tweet.date}</p>
              {currentLoggedUser && (
                <AiFillEdit
                  size={24}
                  color="rgb(156 163 175)"
                  onClick={() => editTweet.onOpen()}
                />
              )}
            </div>
            <p className="italic">{tweet.text}</p>
            <div className="flex">
              <FiHeart
                className={isPressed ? 'fill-red-500' : ''}
                size={24}
                color="rgb(239 68 68)"
                onClick={() => {
                  if (isAuth) {
                    onToggle();
                  } else {
                    alert('Register or Login first');
                  }
                }}
              />
              <p className="italic px-2 text-gray-400">{counter}</p>
            </div>
          </div>
        </div>
      )}
      {currentLoggedUser && (
        <EditTweetModal
          isOpen={editTweet.isOpen}
          renderBackdrop={renderBackdrop}
          close={editTweet.onClose}
          currentUser={currentLoggedUser}
          tweet={tweet}
        />
      )}
    </div>
  );
};
