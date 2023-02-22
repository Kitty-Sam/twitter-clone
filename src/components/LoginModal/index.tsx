import React, { FC } from 'react';
import { Modal } from 'react-overlays';
import { Text } from '@shared/Text';
import { Button } from '@shared/Button';
import { Input } from '@shared/Input';
import { useFormik } from 'formik';
import { LoginModalPropsType } from '@/components/LoginModal/type';

export const LoginModal: FC<LoginModalPropsType> = ({
  isOpen,
  renderBackdrop,
  close,
  registerOpen,
}) => {
  const formik = useFormik({
    initialValues: {
      nickName: '',
      password: '',
    },
    onSubmit: ({ nickName, password }) => {
      console.log(nickName, password);
    },
  });

  return (
    <Modal
      className="fixed z-10 top-1/4 left-1/3 w-1/5 bg-amber-50 rounded-3xl p-5"
      show={isOpen}
      renderBackdrop={renderBackdrop}
    >
      <div>
        <div className="flex flex-row justify-between items-center py-2">
          <Text>Login</Text>
          <Button background onClick={() => close()}>
            x
          </Button>
        </div>
        <form onSubmit={formik.handleSubmit}>
          <Input
            id="nickName"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.nickName}
            placeholder="nick name"
          />
          <Input
            id="password"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.password}
            placeholder="password"
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
    </Modal>
  );
};
