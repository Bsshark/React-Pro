import { useCounter } from "../hooks/useCounter";

//props: {initialValue: number}
export const CounterHook = () => {
  const { elementToAnimate, handleClick, counter } = useCounter({
    maxCounter: 20,
  });

  return (
    <>
      <h1>CounterHook:</h1>
      <h2 ref={elementToAnimate}> {counter}</h2>

      <button onClick={handleClick}>+1</button>
    </>
  );
};
