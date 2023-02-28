import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { UserLinkContainerPropsType } from '@/components/UserLinkContainer/type';

export const UserLinkContainer: FC<UserLinkContainerPropsType> = ({ user }) => {
  return (
    <Link
      to={user.username}
      className="flex flex-row justify-between items-center border border-lime-200 py-4 px-4 my-4 rounded-3xl hover:bg-lime-200"
    >
      <p className="pr-4">
        {user.firstName} {user.lastName} ({user.username})
      </p>
      <div className="w-[60px] h-[60px]">
        <img
          src={user.avatar}
          alt="avatar"
          className="w-full h-full rounded-full"
        />
      </div>
    </Link>
  );
};
