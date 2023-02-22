import React, { FC } from 'react';
import { Modal } from 'react-overlays';
import { Text } from '@shared/Text';
import { Button } from '@shared/Button';
import { Input } from '@shared/Input';
import { useFormik } from 'formik';
import { RegisterModalPropsType } from '@/components/RegisterModal/type';

export const RegisterModal: FC<RegisterModalPropsType> = ({
  renderBackdrop,
  loginOpen,
  close,
  isOpen,
}) => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      secondName: '',
      nickName: '',
      location: '',
      password: '',
    },
    onSubmit: ({ nickName, firstName, secondName, password, location }) => {
      console.log(nickName, firstName, secondName, password, location);
    },
  });
  return (
    <Modal
      className="fixed z-10 top-1/4 left-1/3 w-1/5  bg-amber-50 rounded-3xl p-5"
      show={isOpen}
      renderBackdrop={renderBackdrop}
    >
      <div>
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
            id="secondName"
            onChange={formik.handleChange}
            value={formik.values.secondName}
            placeholder="Second Name"
          />
          <Input
            type="text"
            id="nickName"
            onChange={formik.handleChange}
            value={formik.values.nickName}
            placeholder="Nick Name"
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
    </Modal>
  );
};
