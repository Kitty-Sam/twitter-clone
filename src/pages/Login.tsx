import React, { useContext } from 'react';
import { useFormik } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import { Input } from '@shared/Input';
import { Button } from '@shared/Button';
import { Text } from '@shared/Text';
import { UserContext } from '@/context/userContext';
import { AuthNameRoutes, RootNameRoutes } from '@/routes/RouteName';

export const Login = () => {
  const { login } = useContext(UserContext);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      nickName: '',
      password: '',
    },
    onSubmit: ({ nickName, password }) => {
      login(nickName, password);
      navigate(RootNameRoutes.HOME, { replace: true });
    },
  });

  return (
    <div className="bg-no-repeat bg-cover bg-center bg-fixed bg-bg h-full w-10/12 flex justify-center items-center">
      <form
        onSubmit={formik.handleSubmit}
        className="flex flex-col justify-evenly items-center w-1/4 h-2/6 bg-white rounded py-2"
      >
        <Text>Login</Text>
        <Input
          id="nickName"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.nickName}
          placeholder="Nick Name"
        />
        <Input
          id="password"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.password}
          placeholder="Password"
        />
        <Link
          to={AuthNameRoutes.REGISTER}
          replace
          className="text-xl font-bold underline"
        >
          Sign up
        </Link>
        <Button type="submit">Sign in</Button>
      </form>
    </div>
  );
};
