import React, { FC } from 'react';
import { Modal } from 'react-overlays';
import { Text } from '@shared/Text';
import { Button } from '@shared/Button';
import { Input } from '@shared/Input';
import { useFormik } from 'formik';
import { RegisterModalPropsType } from '@/components/RegisterModal/type';
import { users } from '@/constants/db';
import { getCurrentDate } from '@/helpers/getCurrentDate';

export const RegisterModal: FC<RegisterModalPropsType> = ({
  renderBackdrop,
  loginOpen,
  close,
  isOpen,
}) => {
  const id = Date.now();

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      username: '',
      location: '',
      password: '',
    },
    onSubmit: ({ username, firstName, lastName, location }) => {
      users.push({
        id,
        location,
        firstName,
        lastName,
        username,
        avatar: '',
        bgImage: '',
        joined: getCurrentDate(),
        tweets: [],
      });
      formik.resetForm();
    },
  });

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
            <Button background onClick={() => close()}>
              x
            </Button>
          </div>

          <form onSubmit={formik.handleSubmit}>
            <Input
              type="text"
              id="firstName"
              onChange={formik.handleChange}
              value={formik.values.firstName}
              placeholder="First Name"
            />
            <Input
              type="text"
              id="lastName"
              onChange={formik.handleChange}
              value={formik.values.lastName}
              placeholder="Last Name"
            />
            <Input
              type="text"
              id="nickName"
              onChange={formik.handleChange}
              value={formik.values.username}
              placeholder="User name"
            />
            <Input
              type="text"
              id="location"
              onChange={formik.handleChange}
              value={formik.values.location}
              placeholder="Location"
            />
            <Input
              type="password"
              id="password"
              onChange={formik.handleChange}
              value={formik.values.password}
              placeholder="Password"
            />

            <div className="flex flex-row justify-evenly items-center py-5">
              <Button
                background={false}
                onClick={() => {
                  close();
                  loginOpen();
                }}
              >
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
