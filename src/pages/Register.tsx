import React, { useContext } from 'react';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { Text } from '@shared/Text';
import { Input } from '@shared/Input';
import { Button } from '@shared/Button';
import { UserContext } from '@/context/userContext';
import { AuthNameRoutes } from '@/routes/RouteName';

export const Register = () => {
  const { register } = useContext(UserContext);
  const id = String(Date.now());
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      firstName: '',
      secondName: '',
      nickName: '',
      location: '',
      password: '',
    },
    onSubmit: ({ nickName, firstName, secondName, password, location }) => {
      register(nickName, firstName, secondName, password, location, id);
      navigate(AuthNameRoutes.LOGIN, { replace: true });
    },
  });

  return (
    <div className="bg-no-repeat bg-cover bg-center bg-fixed bg-bg h-full w-10/12 flex justify-center items-center">
      <form
        className="flex flex-col justify-evenly items-center w-1/4 h-3/6 bg-white rounded py-2"
        onSubmit={formik.handleSubmit}
      >
        <Text>Sign up</Text>
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
        <Button type="submit">Sign up</Button>
      </form>
    </div>
  );
};
