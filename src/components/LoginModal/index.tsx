import React, { FC, useState } from 'react';
import { Modal } from 'react-overlays';
import { Text } from '@shared/Text';
import { Button } from '@shared/Button';
import { Checkbox } from '@shared/Checkbox';
import { ButtonCancel } from '@shared/ButtonCancel';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import {
  LoginInputsType,
  LoginModalPropsType,
} from '@/components/LoginModal/type';
import { IUser } from '@/context/userContext';
import { currentLoggedUser } from '@/store/reducers/userSlice';
import { useAppDispatch, useAppSelector } from '@/store/hooks';

export const LoginModal: FC<LoginModalPropsType> = ({
  isOpen,
  renderBackdrop,
  close,
  registerOpen,
}) => {
  const [isRemembered, setIsRemembered] = useState(false);
  const dispatch = useAppDispatch();
  const credentials = useAppSelector((state) => state.users.credentials);
  const allUsers = useAppSelector((state) => state.users.users);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LoginInputsType>({
    defaultValues: {
      username: '',
      password: '',
    },
  });
  const onSubmit: SubmitHandler<LoginInputsType> = ({ username, password }) => {
    if (isRemembered) {
      dispatch(currentLoggedUser(username));
      // const updatedUsers = usersLS.concat(username);
      // localStorage.setItem('rememberedUsers', JSON.stringify(updatedUsers));
      if (
        (credentials.username === username &&
          credentials.password === password) ||
        allUsers.find((person: IUser) => person.username === username)
      ) {
        dispatch(currentLoggedUser(username));
        reset();
        setIsRemembered(false);
      }
    }
    if (
      (credentials.username === username &&
        credentials.password === password) ||
      allUsers.find((person: IUser) => person.username === username)
    ) {
      dispatch(currentLoggedUser(username));
      navigate(`/${username}`, { replace: true });
      reset();
      setIsRemembered(false);
      close();
    }

    reset();
    setIsRemembered(false);
  };

  const cancelClick = () => {
    reset();
    close();
    setIsRemembered(false);
  };

  const checkBoxToggle = () => {
    setIsRemembered(!isRemembered);
  };

  const signUpClick = () => {
    reset();
    setIsRemembered(false);
    close();
    registerOpen();
  };

  return (
    <Modal
      className="fixed z-10 top-0 left-0 bottom-0 right-0"
      show={isOpen}
      renderBackdrop={renderBackdrop}
    >
      <div className="flex items-center justify-center h-full">
        <div className="bg-amber-50 rounded-3xl p-5 w-1/4">
          <div className="flex flex-row justify-between items-center py-2">
            <Text>Login</Text>
            <ButtonCancel onClick={cancelClick}>x</ButtonCancel>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              {...register('username', { required: 'This is required' })}
              placeholder="user name"
              className="w-full bg-lime-200 rounded text-slate-800 my-2 p-3 border-transparent focus:border-transparent focus:ring-0"
            />
            <p className="italic text-red-500">{errors.username?.message}</p>
            <input
              {...register('password', {
                required: 'This is required',
                minLength: 3,
              })}
              placeholder="password"
              className="w-full bg-lime-200 rounded text-slate-800 my-2 p-3 border-transparent focus:border-transparent focus:ring-0"
            />
            <p className="italic text-red-500">{errors.password?.message}</p>
            <Checkbox
              label="Remember me"
              value={isRemembered}
              onChange={checkBoxToggle}
            />
            <div className="flex flex-row justify-evenly items-center py-5">
              <p>Do have an account?</p>
              <Button background={false} onClick={signUpClick}>
                Sign up
              </Button>
              <Button background type="submit">
                Sign in
              </Button>
            </div>
          </form>
        </div>
      </div>
    </Modal>
  );
};
