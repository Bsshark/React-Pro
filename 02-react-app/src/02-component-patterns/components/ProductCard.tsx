import { CSSProperties, ReactElement, createContext } from "react";

import { useProduct } from "../hooks/useProduct";
import {
	Product,
	ProductContextProps,
	onChangeArgs,
} from "../interfaces/ProductInterfaces";
import styles from "../styles/styles.module.css";

export const ProductContext = createContext({} as ProductContextProps);

const { Provider } = ProductContext;

export interface Props {
	product: Product;
	children?: ReactElement | ReactElement[];
	className?: string;
	style?: CSSProperties;
	onChange?: (args: onChangeArgs) => void;
	value?: number;
}

export const ProductCard = ({
	children,
	product,
	className,
	style,
	onChange,
	value,
}: Props) => {
	const { counter, increaseBy } = useProduct({ onChange, product, value });
	return (
		<Provider
			value={{
				counter,
				increaseBy,
				product,
			}}
		>
			<div className={`${styles.productCard} ${className}`} style={style}>
				{children}
			</div>
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
