import React, { useState } from 'react';
import { Checkbox } from '../components/Checkbox';
import { Input } from '../components/Input';
import { Button } from '../components/Button';
import { useInput } from '../hooks/useInput';
import { Text } from '../components/Text';

export const Login = () => {
  const nickName = useInput('');
  const password = useInput('');

  const [isRemembered, setIsRemembered] = useState(false);

  const onIsRememberedClick = () => {
    setIsRemembered(!isRemembered);
  };

  const onLoginClick = () => {
    console.log('login');
  };

  return (
    <div className="bg-no-repeat bg-cover bg-center bg-fixed bg-bg h-full w-10/12 flex justify-center items-center">
      <div className="flex flex-col justify-around items-center w-1/4 h-3/6 bg-white rounded">
        <Text>Login</Text>
        <Input type="text" {...nickName} placeholder="Nick Name" />
        <Input type="password" {...password} placeholder="Password" />
        <Checkbox
          label="Remember me"
          value={isRemembered}
          onChange={onIsRememberedClick}
        />
        <Button onClick={onLoginClick} type="button">
          Sign in
        </Button>
      </div>
    </div>
  );
};
