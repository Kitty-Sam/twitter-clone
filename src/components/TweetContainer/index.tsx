import React, { FC } from 'react';
import { avatar } from '@/constants/images';

export interface TweetPropsType {
  tweet: string;
  name: string;
  nickName: string;
  date: any;
}
export const TweetContainer: FC<TweetPropsType> = ({
  tweet,
  name,
  nickName,
  date,
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
        <p className="font-bold">like</p>
      </div>
    </div>
  );
};
