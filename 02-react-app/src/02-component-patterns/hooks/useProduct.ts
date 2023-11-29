import { useState } from "react";

interface productProps {
  initValue?: number;
}

export const useProduct = (initValue = 0) => {
  const [counter, setCounter] = useState(initValue);

  const increaseBy = (value: number) => {
    console.log('increasedBy')
    setCounter(prev => Math.max(counter + value, 0));
  };

  return {
    counter,
    increaseBy,
  };
};
