import React, { FC } from 'react';
import { FiHeart } from 'react-icons/fi';
import { TweetPropsType } from '@/components/TweetContainer/type';
import { useCount } from '@/hooks/useCount';

export const TweetContainer: FC<TweetPropsType> = ({
  tweet,
  name,
  nickName,
  date,
  count,
  currentUserId,
  avatarTweet,
  isAuth,
}) => {
  const { onToggle, counter, isPressed } = useCount(
    count.length,
    Boolean(count.find((el) => el.userId === currentUserId))
  );

  return (
    <div>
      {!tweet ? (
        <p className="px-4 italic">Add your first tweet ...</p>
      ) : (
        <div className="w-2/3 flex flex-row items-center border border-lime-300 rounded-3xl w-full mb-5 p-4 bg-white">
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
              <p className="px-4 italic">{nickName}</p>
              <p className="px-4 italic">{date}</p>
            </div>
            <p className="italic">{tweet}</p>
            <div className="flex">
              <FiHeart
                className={isPressed ? 'fill-red-500' : ''}
                size={24}
                color="rgb(239 68 68)"
                onClick={() => {
                  if (isAuth) {
                    onToggle();
                  } else {
                    console.log('Register first');
                  }
                }}
              />
              <p className="italic px-2">{counter}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
