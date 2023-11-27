import { useReducer } from "react";
import { CounterState } from "./interfaces/interfaces";
import { counterReducer } from "./state/counterReducer";
//import { doIncreaseBy, doReset } from "./actions/actions";
import * as actions from "./actions/actions";

const INITIAL_STATE: CounterState = {
  counter: 0,
  previous: 0,
  changes: 0,
};

//props: {initialValue: number}
export const CounterReducerComponent = () => {
  const [{ counter, previous, changes }, dispatch] = useReducer(
    counterReducer,
    INITIAL_STATE
  );

  const handleReset = () => {
    dispatch(actions.doReset());
  };

  const increaseBy = (n: number) => {
    dispatch(actions.doIncreaseBy(n));
  };

  const decreaseBy = (n: number) => {
    dispatch(actions.doDecreaseBy(n));
  };

  return (
    <>
      {/* <pre>
        { JSON.stringify(counterState, null, 2)}
      </pre> */}
      <h1>Counter Reducer Segmentado</h1>
      <h2>Counter: {counter} </h2>
      <h2>Previous: {previous} </h2>
      <h2>Changes: {changes} </h2>

      <button onClick={handleReset}>Reset</button>
      <button onClick={() => increaseBy(1)}>+1</button>
      <button onClick={() => increaseBy(5)}>+5</button>
      <button onClick={() => increaseBy(10)}>+10</button>
      <button onClick={() => decreaseBy(1)}>-1</button>
    </>
  );
};
