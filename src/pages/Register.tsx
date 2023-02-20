import React from 'react';
import { Text } from '../components/Text';
import { Input } from '../components/Input';
import { Button } from '../components/Button';
import { useInput } from '../hooks/useInput';

export const Register = () => {
  const firstName = useInput('');
  const secondName = useInput('');
  const nickName = useInput('');
  const location = useInput('');
  const password = useInput('');

  const onRegisterClick = () => {
    console.log('Register');
  };

  return (
    <div className="bg-no-repeat bg-cover bg-center bg-fixed bg-bg h-full w-10/12 flex justify-center items-center">
      <div className="flex flex-col justify-around items-center w-1/4 h-3/6 bg-white rounded">
        <Text>Sigh up</Text>
        <Input type="text" {...firstName} placeholder="First Name" />
        <Input type="text" {...secondName} placeholder="Second Name" />
        <Input type="text" {...nickName} placeholder="Nick Name" />
        <Input type="text" {...location} placeholder="Location" />
        <Input type="password" {...password} placeholder="Password" />
        <Button onClick={onRegisterClick} type="button">
          Sign in
        </Button>
      </div>
    </div>
  );
};
