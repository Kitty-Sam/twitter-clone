import React from 'react';
import { Button } from '@shared/Button';

import { GiWillowTree } from 'react-icons/all';
import { Link, useNavigate } from 'react-router-dom';
import { useOpen } from '@/hooks/useOpen';
import { LoginModal } from '@/components/LoginModal';
import { RegisterModal } from '@/components/RegisterModal';
import { removeCurrentLoggedUser } from '@/store/reducers/userSlice';
import { useAppDispatch, useAppSelector } from '@/store/hooks';

export const Header = () => {
  const login = useOpen(false);
  const register = useOpen(false);
  const loginOpenClick = () => {
    login.onOpen();
  };
  const registerOpenClick = () => {
    register.onOpen();
  };

  const renderBackdrop = (props: any) => (
    <div
      className="fixed top-0 bottom-0 left-0 right-0 bg-black opacity-50"
      {...props}
    />
  );

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const currentLoggedUser = useAppSelector(
    (state) => state.users.currentLoggedUser
  );

  return (
    <div className="p-4 w-screen bg-white">
      <div className="flex flex-row justify-around">
        <div className="flex flex-row  items-center justify-center">
          <GiWillowTree
            className="pr-4"
            size={42}
            color="rgb(132 204 22)"
            onClick={() => navigate('/', { replace: true })}
          />
          <Link to="/" className="text-lime-500 font-bold text-l uppercase">
            Jungle
          </Link>
        </div>

        {currentLoggedUser ? (
          <Button
            background
            onClick={() => {
              dispatch(removeCurrentLoggedUser());
            }}
          >
            Log out
          </Button>
        ) : (
          <div>
            <Button background={false} onClick={loginOpenClick}>
              Login
            </Button>

            <Button background onClick={registerOpenClick}>
              Sign up
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
    </div>
  );
};
