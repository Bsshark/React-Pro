import { createContext } from "react";

import { useProduct } from "../hooks/useProduct";
import {
  ProductCardProps,
  ProductContextProps,
} from "../interfaces/ProductInterfaces";
import styles from "../styles/styles.module.css";

export const ProductContext = createContext({} as ProductContextProps);

const { Provider } = ProductContext;

export const ProductCard = ({ children, product }: ProductCardProps) => {
  const { counter, increaseBy } = useProduct(0);
  return (
    <Provider
      value={{
        counter,
        increaseBy,
        product,
      }}
    >
      <div className={styles.productCard}>{children}</div>
    </Provider>
  );
};

/* export const ProductButtons = ({
  counter,
  handleClick,
  className,
}: ProductButtons) => {
  return (
    <div className={className}>
      <ButtonComponent
        className={styles.buttonMinus}
        handleClick={handleClick}
        increaseValue={-1}
        char={"-"}
      />

      <div className={styles.countLabel}> {counter} </div>
      <ButtonComponent
        className={styles.buttonAdd}
        handleClick={handleClick}
        increaseValue={1}
        char={"+"}
      />
    </div>
  );
}; */

/* export const ButtonComponent = ({
  handleClick,
  increaseValue,
  className,
  char,
}: ButtonProduct) => {
  return (
    <button className={className} onClick={() => handleClick(increaseValue)}>
      {char}
    </button>
  );
}; */

/* interface ProductButtons {
  counter: number;
  increaseBy: (value: number) => void;
}

interface ButtonProduct {
  handleClick: (n: number) => void;
  increaseValue: number;
  className: string;
  char: string;
} */
