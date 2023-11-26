import { useState } from "react";

interface Props {
  initialValue?: number;
}

interface CounterState {
  counter: number,
  clickCount: number
}

//props: {initialValue: number}
export const CounterBy = ({ initialValue = 5 }: Props) => {
  const [{counter, clickCount}, setcounter] = useState<CounterState>({
    counter: initialValue,
    clickCount: 0,
  });

  const handleClick = (n: number) => {
    setcounter(({counter, clickCount}) => ({
      clickCount: clickCount + 1,
      counter: counter + n
    }));
  };

  return (
    <>
      <h1>CounterBy: {counter}</h1>
      <h1>Click Count: {clickCount}</h1>

      <button onClick={() => handleClick(1)}>+1</button>
      <button onClick={() => handleClick(5)}>+5</button>
    </>
  );
};
