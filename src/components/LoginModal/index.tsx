import React, { FC, useState } from 'react';
import { Modal } from 'react-overlays';
import { Text } from '@shared/Text';
import { Button } from '@shared/Button';
import { Input } from '@shared/Input';
import { useFormik } from 'formik';
import { Checkbox } from '@shared/Checkbox';
import { LoginModalPropsType } from '@/components/LoginModal/type';
import { getStartUsers } from '@/helpers/getStartUsers';

export const LoginModal: FC<LoginModalPropsType> = ({
  isOpen,
  renderBackdrop,
  close,
  registerOpen,
}) => {
  const [isRemembered, setIsRemembered] = useState(false);
  const [usersLS] = useState(getStartUsers('users'));

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    onSubmit: ({ username, password }) => {
      localStorage.setItem('currentUser', JSON.stringify(username));

      if (isRemembered) {
        const withNewUser = usersLS.concat(username);
        localStorage.setItem('users', JSON.stringify(withNewUser));
        formik.resetForm();
        close();
      }
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
            <Text>Login</Text>
            <Button background onClick={() => close()}>
              x
            </Button>
          </div>
          <form onSubmit={formik.handleSubmit}>
            <Input
              id="username"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.username}
              placeholder="user name"
            />
            <Input
              id="password"
              type="password"
              onChange={formik.handleChange}
              value={formik.values.password}
              placeholder="password"
            />
            <Checkbox
              label="Remember me"
              value={isRemembered}
              onChange={() => setIsRemembered(!isRemembered)}
            />
            <div className="flex flex-row justify-evenly items-center py-5">
              <p>Do have an account?</p>
              <Button
                background={false}
                onClick={() => {
                  close();
                  registerOpen();
                }}
              >
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
