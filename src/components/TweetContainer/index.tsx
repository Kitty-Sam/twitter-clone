import React, { FC } from 'react';
import { FiHeart } from 'react-icons/fi';
import { avatar } from '@/constants/images';
import { TweetPropsType } from '@/components/TweetContainer/type';

export const TweetContainer: FC<TweetPropsType> = ({
  tweet,
  name,
  nickName,
  date,
  count,
}) => {
  return (
    <div className="w-2/3 flex flex-row items-center border border-lime-500 rounded-3xl w-full mb-5 p-5">
      <div className="w-20 h-20">
        <img src={avatar} alt="avatar" className="w-full h-full rounded-full" />
      </div>
      <div className="flex flex-col  w-full mx-5">
        <div className="flex flex-row">
          <p className="pr-4 font-bold">{name}</p>
          <p className="px-4 italic">{nickName}</p>
          <p className="px-4 italic">{date}</p>
        </div>
        <p className="italic">{tweet}</p>
        <FiHeart
          className="hover:animate-pulse hover:fill-red-500"
          size={24}
          color="rgb(239 68 68)"
        />
        <p className="italic">{count}</p>
      </div>
    </div>
  );
};
