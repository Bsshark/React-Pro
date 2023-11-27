export type CounterAction =
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

/* export const doReset = (): CounterAction => {
  return {
    type: "reset",
  };
}; */

export const doReset = (): CounterAction => ({
    type: 'reset'
})

export const doIncreaseBy = (value: number): CounterAction => ({
    type: 'increaseBy',
    payload: {
        value
    }
})

export const doDecreaseBy = (value: number): CounterAction => ({
    type: 'decreaseBy',
    payload: {
        value
    }
})