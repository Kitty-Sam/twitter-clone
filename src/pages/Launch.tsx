import React from 'react';
import { TextBold } from '@shared/Text';
import { FiHeart } from 'react-icons/fi';
import { users } from '@/constants/db';
import { Header } from '@/components/Header';
import { UserLinkContainer } from '@/components/UserLinkContainer';

export const Launch = () => {
  return (
    <div>
      <Header />
      <div className="flex flex-row justify-around items-center h-screen">
        <div className="flex flex-col items-center">
          <TextBold>Enjoy our society</TextBold>
          <FiHeart
            className="fill-red-200 animate-pulse m-4"
            size={56}
            color="rgb(244 63 94)"
          />
        </div>
        <div className="w-3/12  rounded p-10 bg-white">
          <TextBold>Would you like to find new friends?</TextBold>
          <ul>
            {users.map((user) => (
              <li key={user.id}>
                <UserLinkContainer user={user} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
