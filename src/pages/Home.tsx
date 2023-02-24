import React, { useState } from 'react';
import { Button } from '@shared/Button';
import { useOpen } from '@/hooks/useOpen';
import { LoginModal } from '@/components/LoginModal';
import { RegisterModal } from '@/components/RegisterModal';
import { avatarNone, coverNone, signUp } from '@/constants/images';
import { AddTweetModal } from '@/components/AddTweetModal';
import { TweetContainer } from '@/components/TweetContainer';
import { getDataFromLS } from '@/helpers/getStartUsers';
import { ITweet, IUser } from '@/context/userContext';
import { useForceUpdate } from '@/hooks/useForceUpdate';

export const Home = () => {
  const login = useOpen(false);
  const register = useOpen(false);
  const tweet = useOpen(false);

  const rememberedUsers = getDataFromLS('rememberedUsers');
  const currentUser = getDataFromLS('currentUser');
  const users = getDataFromLS('theAllUsers');

  const [isShowAllTweets, setIsShowAllTweets] = useState(false);
  const [myTweets, setMyTweets] = useState(true);

  const currentActiveUser =
    users.find((user: IUser) => user.username === currentUser) ||
    rememberedUsers[currentUser];

  const forceUpdate = useForceUpdate();

  const renderBackdrop = (props: any) => (
    <div
      className="fixed top-0 bottom-0 left-0 right-0 bg-black opacity-50"
      {...props}
    />
  );

  const loginOpenClick = () => {
    login.onOpen();
  };
  const registerOpenClick = () => {
    register.onOpen();
  };

  const tweetOpenClick = () => {
    tweet.onOpen();
  };

  const logOut = () => {
    setMyTweets(false);
    setIsShowAllTweets(false);
    localStorage.removeItem('currentUser');
    forceUpdate();
    setMyTweets(true);
  };

  return (
    <div className="w-9/12 bg-amber-50  relative">
      <div className="flex flex-row justify-end px-10 my-5 ">
        <Button
          background={false}
          onClick={loginOpenClick}
          disabled={currentActiveUser}
        >
          Login
        </Button>

        <Button
          background
          onClick={registerOpenClick}
          disabled={currentActiveUser}
        >
          Sign up
        </Button>
      </div>
      <div className="bg-amber-50 h-96 mt-5 object-cover">
        <img
          src={currentActiveUser ? currentActiveUser.bgImage : coverNone}
          alt="background"
          className="h-full w-full"
        />
      </div>
      <div className="mt-5 absolute left-40 top-80 object-cover">
        <img
          src={currentActiveUser ? currentActiveUser.avatar : avatarNone}
          alt="avatar"
          className="w-40 h-40 rounded-full"
        />
      </div>

      <div className="p-5 flex justify-center items-center flex-col">
        <div>
          <Button
            background={false}
            onClick={() => {
              setMyTweets(false);
              setIsShowAllTweets(!isShowAllTweets);
            }}
            disabled={isShowAllTweets || !currentActiveUser}
          >
            All Tweets
          </Button>

          <Button
            background={false}
            onClick={() => {
              setIsShowAllTweets(false);
              setMyTweets(!myTweets);
            }}
            disabled={myTweets || !currentActiveUser}
          >
            My Tweets
          </Button>
        </div>
        <p className="italic hover: pl-32">
          {currentActiveUser && currentActiveUser.tweets.length}
        </p>
      </div>

      <div className="flex flex-row">
        <div className="w-1/4 h-96 m-5 flex flex-col justify-center items-center">
          <p className="font-bold m-4 text-xl">Personal info</p>
          <p className="font-bold italic hover:not-italic">
            {currentActiveUser
              ? `${currentActiveUser.firstName} ${currentActiveUser.lastName}`
              : 'Surname name ...'}
          </p>
          <p className="italic hover:not-italic">
            {currentActiveUser ? currentActiveUser.location : 'Location ...'}
          </p>
          <p className="italic hover:not-italic pb-10">
            {currentActiveUser ? currentActiveUser.joined : 'Joined at ...'}
          </p>
          <Button
            background={false}
            onClick={logOut}
            disabled={!currentActiveUser}
          >
            Log out
          </Button>
        </div>

        <div className="w-2/3 m-10">
          {isShowAllTweets &&
            users.map((user: IUser) =>
              user.tweets.map((item: ITweet, index: number) => (
                <TweetContainer
                  avatarTweet={user.avatar || avatarNone}
                  key={index}
                  tweet={item.text}
                  count={item.likes}
                  nickName={user.username}
                  name={user.firstName}
                  date={item.date}
                  currentUserId={currentActiveUser.id}
                />
              ))
            )}

          {myTweets &&
            currentActiveUser &&
            currentActiveUser.tweets.map(
              (singleTweet: ITweet, index: number) =>
                singleTweet && (
                  <TweetContainer
                    avatarTweet={currentActiveUser.avatar}
                    key={index}
                    tweet={singleTweet.text}
                    count={singleTweet.likes}
                    nickName={currentActiveUser.username}
                    name={currentActiveUser.firstName}
                    date={singleTweet.date}
                    currentUserId={currentActiveUser.id}
                  />
                )
            )}

          {!currentActiveUser && !isShowAllTweets && (
            <p className="italic hover:not-italic p-10"> Join us first ...</p>
          )}
        </div>

        {!currentActiveUser ? (
          <div className="h-96 w-1/4 m-10 flex flex-col items-center object-cover">
            <img src={signUp} alt="background" className="w-full h-40 " />
            <p className="font-bold m-4 text-xl text-center">
              Hey! Why don’t you join us?
            </p>
            <p className="italic hover:not-italic p-4 text-center">
              It’s simple - just click on sign up button!
            </p>
            <Button
              background
              onClick={registerOpenClick}
              disabled={rememberedUsers.includes(currentUser)}
            >
              Sign up
            </Button>
          </div>
        ) : (
          <div className="h-96 w-1/4 m-10 flex flex-col items-center">
            <img src={signUp} alt="background" className="w-full h-40 " />
            <p className="italic hover:not-italic p-4 text-center">
              Welcome home ...
            </p>
            <Button
              background
              onClick={tweetOpenClick}
              disabled={!currentActiveUser}
            >
              Add tweet
            </Button>
          </div>
        )}
      </div>

      <LoginModal
        isOpen={login.isOpen}
        renderBackdrop={renderBackdrop}
        close={login.onClose}
        registerOpen={register.onOpen}
      />
      <RegisterModal
        isOpen={register.isOpen}
        renderBackdrop={renderBackdrop}
        close={register.onClose}
        loginOpen={login.onOpen}
      />
      <AddTweetModal
        isOpen={tweet.isOpen}
        renderBackdrop={renderBackdrop}
        close={tweet.onClose}
      />
    </div>
  );
};
