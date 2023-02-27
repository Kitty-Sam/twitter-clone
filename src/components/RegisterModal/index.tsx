import React, { FC } from 'react';
import { Modal } from 'react-overlays';
import { Text } from '@shared/Text';
import { Button } from '@shared/Button';
import { ButtonCancel } from '@shared/ButtonCancel';
import { nanoid } from 'nanoid';
import { SubmitHandler, useForm } from 'react-hook-form';
import {
  RegisterInputsType,
  RegisterModalPropsType,
} from '@/components/RegisterModal/type';
import { getCurrentDate } from '@/helpers/getCurrentDate';
import { useForceUpdate } from '@/hooks/useForceUpdate';
import { avatarNone, coverNone } from '@/constants/images';
import { getDataFromLS } from '@/helpers/getStartUsers';

export const RegisterModal: FC<RegisterModalPropsType> = ({
  renderBackdrop,
  loginOpen,
  close,
  isOpen,
}) => {
  const id = nanoid(10);
  const forceUpdate = useForceUpdate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<RegisterInputsType>({
    defaultValues: {
      username: '',
      password: '',
      location: '',
      firstName: '',
      lastName: '',
    },
  });

  const onSubmit: SubmitHandler<RegisterInputsType> = ({
    location,
    firstName,
    lastName,
    username,
    password,
  }) => {
    localStorage.setItem('credential', JSON.stringify({ username, password }));
    const usersFromLs = getDataFromLS('theAllUsers');

    const withNewUser = usersFromLs.concat({
      id,
      location,
      firstName,
      lastName,
      username,
      avatar: avatarNone,
      bgImage: coverNone,
      joined: getCurrentDate(),
      tweets: [],
    });

    localStorage.setItem('theAllUsers', JSON.stringify(withNewUser));
    reset();
    close();
    forceUpdate();
  };

  const cancelClick = () => {
    reset();
    close();
  };

  const signInClick = () => {
    reset();
    close();
    loginOpen();
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
            <Text>Register</Text>
            <ButtonCancel onClick={cancelClick}>x</ButtonCancel>
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              {...register('firstName', { required: 'This is required' })}
              placeholder="First Name"
              className="w-full bg-lime-200 rounded text-slate-800 my-2 p-3 border-transparent focus:border-transparent focus:ring-0"
            />
            <p className="italic text-red-500">{errors.firstName?.message}</p>

            <input
              {...register('lastName', { required: 'This is required' })}
              placeholder="Last Name"
              className="w-full bg-lime-200 rounded text-slate-800 my-2 p-3 border-transparent focus:border-transparent focus:ring-0"
            />
            <p className="italic text-red-500">{errors.lastName?.message}</p>

            <input
              {...register('username', { required: 'This is required' })}
              placeholder="User Name"
              className="w-full bg-lime-200 rounded text-slate-800 my-2 p-3 border-transparent focus:border-transparent focus:ring-0"
            />
            <p className="italic text-red-500">{errors.username?.message}</p>

            <input
              {...register('location', { required: 'This is required' })}
              placeholder="Location"
              className="w-full bg-lime-200 rounded text-slate-800 my-2 p-3 border-transparent focus:border-transparent focus:ring-0"
            />
            <p className="italic text-red-500">{errors.location?.message}</p>

            <input
              {...register('password', {
                required: 'This is required',
                minLength: 3,
              })}
              placeholder="Password"
              className="w-full bg-lime-200 rounded text-slate-800 my-2 p-3 border-transparent focus:border-transparent focus:ring-0"
            />
            <p className="italic text-red-500">{errors.password?.message}</p>

            <div className="flex flex-row justify-evenly items-center py-5">
              <Button background={false} onClick={signInClick}>
                Try logging in
              </Button>
              <Button background type="submit">
                Sign up
              </Button>
            </div>
          </form>
        </div>
      </div>
    </Modal>
  );
};
