import React from 'react';
import { Button } from '@shared/Button';
import { useOpen } from '@/hooks/useOpen';
import { LoginModal } from '@/components/LoginModal';
import { RegisterModal } from '@/components/RegisterModal';
import { avatar, cover, signUp } from '@/constants/images';
import { tweets } from '@/constants/temporaryTweets';
import { AddTweetModal } from '@/components/AddTweetModal';
import { TweetContainer } from '@/components/TweetContainer';

export const Home = () => {
  const login = useOpen(false);
  const register = useOpen(false);
  const tweet = useOpen(false);

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

  return (
    <div className="w-9/12 bg-amber-50  relative">
      <div className="flex flex-row justify-end px-10 my-5 ">
        <Button background={false} onClick={loginOpenClick}>
          Login
        </Button>

        <Button background onClick={registerOpenClick}>
          Sign up
        </Button>
      </div>
      <div className="bg-amber-50 h-96 mt-5">
        <img src={cover} alt="background" className="h-full w-full" />
      </div>
      <div className="mt-5 absolute left-40 top-80">
        <img src={avatar} alt="avatar" className="w-40 h-40 rounded-full" />
      </div>

      <div className="border border-lime-500 p-4 flex justify-center ">
        <div className="flex flex-col">
          <Button background={false} onClick={tweetOpenClick}>
            Tweets
          </Button>
          <p>Tweets amount</p>
        </div>
      </div>

      <div className="flex flex-row">
        <div className="border border-lime-500 w-1/4 h-96 m-10 flex flex-col justify-center items-center">
          <p className="font-bold m-4 text-xl">Personal info</p>
          <p className="italic hover:not-italic">Surname Name</p>
          <p className="italic hover:not-italic">Location</p>
          <p className="italic hover:not-italic pb-10">Join data</p>
          <Button background onClick={tweetOpenClick}>
            Add tweet
          </Button>
        </div>

        <div className="border border-lime-500  w-2/3 m-10">
          {tweets.map((singleTweet) => (
            <TweetContainer
              key={singleTweet}
              tweet={singleTweet}
              nickName="kitty-pitty"
              name="Katsiaryna"
              date={new Date().toLocaleDateString()}
            />
          ))}
        </div>

        <div className="border border-lime-500  w-1/4 m-10 flex flex-col items-center">
          <img src={signUp} alt="background" className="w-full h-40 " />
          <p className="font-bold m-4 text-xl text-center">
            Hey! Why don’t you join us?
          </p>
          <p className="italic hover:not-italic p-4 text-center">
            It’s simple - just click on sign up button!
          </p>
          <Button background onClick={registerOpenClick}>
            Sign up
          </Button>
        </div>
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
