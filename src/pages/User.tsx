import React from 'react';
import { useParams } from 'react-router-dom';
import { Text } from '@shared/Text';
import { Button } from '@shared/Button';
import { Header } from '@/components/Header';
import { avatarNone, coverNone, signUp } from '@/constants/images';
import { ITweet, IUser } from '@/context/userContext';
import { TweetContainer } from '@/components/TweetContainer';
import { useAppSelector } from '@/store/hooks';
import { useOpen } from '@/hooks/useOpen';
import { AddTweetModal } from '@/components/AddTweetModal';

export const User = () => {
  const tweet = useOpen(false);
  const { userName } = useParams();

  const allUsers = useAppSelector((state) => state.users.users);
  const currentLoggedUser = useAppSelector(
    (state) => state.users.currentLoggedUser
  );

  const renderBackdrop = (props: any) => (
    <div
      className="fixed top-0 bottom-0 left-0 right-0 bg-black opacity-50"
      {...props}
    />
  );

  const currentUser = allUsers.find(
    (user: IUser) => user.username === userName
  );

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
          <Text>My Tweets</Text>
          <p className="italic underline">
            {currentUser && currentUser.tweets.length}
          </p>
        </div>
        {currentLoggedUser === currentUser!.username && (
          <Button background onClick={() => tweet.onOpen()}>
            Add tweet
          </Button>
        )}
      </div>

      <div className="flex items-center justify-center bg-white">
        <div className="flex flex-row w-10/12 justify-around">
          <div className="h-96 p-10 flex flex-col justify-center items-center">
            <p className="font-bold  text-xl">Personal info</p>
            <p className="font-bold italic hover:not-italic">
              {currentUser
                ? `${currentUser.firstName} ${currentUser.lastName}`
                : 'Surname name ...'}
            </p>
            <p className="italic hover:not-italic">
              {currentUser ? currentUser.location : 'Location ...'}
            </p>
            <p className="italic hover:not-italic0">
              {currentUser ? currentUser.joined : 'Joined at ...'}
            </p>
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
                      name={currentUser.firstName}
                      date={singleTweet.date}
                      currentUserId={currentUser.id}
                      isAuth={false}
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
