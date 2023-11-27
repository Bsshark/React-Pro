import { useReducer } from "react";

interface CounterState {
  counter: number;
  previous: number;
  changes: number;
}

const INITIAL_STATE: CounterState = {
  counter: 0,
  previous: 0,
  changes: 0,
};

type CounterAction =
  | {
      type: "increaseBy";
      payload: {
        value: number;
      };
    }
  | {
      type: "decreaseBy";
      payload: {
        value: number;
      };
    }
  | {
      type: "reset";
    };

const counterReducer = (
  state: CounterState,
  action: CounterAction
): CounterState => {
  const { counter, changes } = state;

  switch (action.type) {
    case "reset":
      return {
        counter: 0,
        previous: 0,
        changes: 0,
      };
    case "increaseBy":
      return {
        counter: counter + action.payload.value,
        previous: counter,
        changes: changes + 1,
      };
    case "decreaseBy":
      return {
        counter: counter - action.payload.value,
        previous: counter,
        changes: changes + 1,
      };
    default:
      return state;
  }
};

//props: {initialValue: number}
export const CounterReducerComponent = () => {
  const [{ counter, previous, changes }, dispatch] = useReducer(
    counterReducer,
    INITIAL_STATE
  );

  const handleReset = () => {
    dispatch({ type: "reset" });
  };

  const increaseBy = (n: number) => {
    dispatch({ type: "increaseBy", payload: { value: n } });
  };

  const decreaseBy = (n: number) => {
    dispatch({ type: "decreaseBy", payload: { value: n } });
  };

  return (
    <>
      {/* <pre>
        { JSON.stringify(counterState, null, 2)}
      </pre> */}
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
