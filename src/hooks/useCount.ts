import { useState } from 'react';

export const useCount = (initValue: number, initValuePress: boolean) => {
  const [counter, setCounter] = useState(initValue);
  const [isPressed, setIsPressed] = useState(initValuePress);

  const onToggle = () => {
    setIsPressed((prevState) => !prevState);
    setCounter((prevState) => (isPressed ? prevState - 1 : prevState + 1));
  };

  return { onToggle, counter, isPressed };
};
