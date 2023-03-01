import React from 'react';
import { useParams } from 'react-router-dom';
import { TextBold } from '@shared/Text';
import { Button } from '@shared/Button';
import { Title } from '@shared/Title';
import { BsCalendar3, FaLocationArrow } from 'react-icons/all';
import { Header } from '@/components/Header';
import { avatarNone, coverNone, signUp } from '@/constants/images';

import { TweetContainer } from '@/components/TweetContainer';
import { useAppSelector } from '@/store/hooks';
import { useOpen } from '@/hooks/useOpen';
import { AddTweetModal } from '@/components/AddTweetModal';
import { rebuildDate } from '@/helpers/getCurrentDate';
import { ITweet, IUser } from '@/context';
import { getAllUsers, getCurrentLoggedUser } from '@/store/selectors';

export const User = () => {
  const tweet = useOpen(false);
  const { userName } = useParams();

  const allUsers = useAppSelector(getAllUsers);
  const currentLoggedUser = useAppSelector(getCurrentLoggedUser);

  const renderBackdrop = (props: any) => (
    <div
      className="fixed top-0 bottom-0 left-0 right-0 bg-black opacity-50"
      {...props}
    />
  );

  const currentUser = allUsers.find(
    (user: IUser) => user.username === userName
  );

  const openAddTweetModal = () => {
    tweet.onOpen();
  };

  return (
    <div>
      <Header />
      <div className="h-96">
        <img
          src={currentUser ? currentUser.bgImage : coverNone}
          alt="background"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="mt-5 absolute left-40 top-80">
        <img
          src={currentUser ? currentUser.avatar : avatarNone}
          alt="avatar"
          className="w-60 h-60 rounded-full object-cover"
        />
      </div>

      <div className="p-4 flex  justify-center items-center bg-white">
        <div className="flex flex-col  justify-center items-center">
          <TextBold>Tweets</TextBold>
          <p className="italic underline">
            {currentUser && currentUser.tweets.length}
          </p>
        </div>
        {currentLoggedUser === currentUser?.username && (
          <Button background onClick={openAddTweetModal}>
            Add tweet
          </Button>
        )}
      </div>

      <div className="flex items-center justify-center bg-amber-50">
        <div className="flex flex-row w-10/12 justify-around">
          <div className="h-96 px-8  flex flex-col mt-12">
            <Title>
              {currentUser
                ? `${currentUser.firstName} ${currentUser.lastName}`
                : 'Surname name ...'}
            </Title>
            <TextBold>
              {currentUser ? `@${currentUser.username}` : 'Username ...'}
            </TextBold>
            <div className="flex flex-row items-center mt-12">
              <BsCalendar3 className="mr-3" color="rgb(156 163 175)" />
              <TextBold>
                {currentUser
                  ? rebuildDate(currentUser.joined)
                  : 'Joined at ...'}
              </TextBold>
            </div>
            <div className="flex flex-row items-center mt-3">
              <FaLocationArrow className="mr-3" color="rgb(156 163 175)" />
              <TextBold>
                {currentUser ? currentUser.location : 'Location ...'}
              </TextBold>
            </div>
          </div>

          <div className="py-10">
            {currentUser &&
              currentUser.tweets.map(
                (singleTweet: ITweet, index: number) =>
                  singleTweet && (
                    <TweetContainer
                      avatarTweet={
                        currentUser ? currentUser.avatar : avatarNone
                      }
                      key={index}
                      tweet={singleTweet.text}
                      count={singleTweet.likes}
                      nickName={currentUser.username}
                      name={`${currentUser.firstName}  ${currentUser.lastName}`}
                      date={singleTweet.date}
                      currentUserId={currentUser.id}
                      isAuth={!!currentLoggedUser}
                    />
                  )
              )}
          </div>

          {!currentLoggedUser ? (
            <div className="py-10 flex flex-col items-center h-96 w-2/12">
              <img
                src={signUp}
                alt="background"
                className="w-full h-40 object-cover"
              />
              <p className="font-bold m-4 text-xl text-center">
                Hey! Why don’t you join us?
              </p>
              <p className="italic hover:not-italic p-4 text-center">
                It’s simple - just click on sign up button!
              </p>
            </div>
          ) : (
            <div className="py-10 flex flex-col items-center h-96 w-2/12" />
          )}
        </div>
      </div>
      <AddTweetModal
        isOpen={tweet.isOpen}
        renderBackdrop={renderBackdrop}
        close={tweet.onClose}
      />
    </div>
  );
};
