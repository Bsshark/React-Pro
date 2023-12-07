import React, { CSSProperties, createContext } from "react";

import { useProduct } from "../hooks/useProduct";
import {
	InitialValues,
	Product,
	ProductCardHandlers,
	ProductContextProps,
	onChangeArgs,
} from "../interfaces/ProductInterfaces";
import styles from "../styles/styles.module.css";

export const ProductContext = createContext({} as ProductContextProps);

const { Provider } = ProductContext;

export interface Props {
	product: Product;
	/* children?: ReactElement | ReactElement[]; */
	children: (args: ProductCardHandlers) => JSX.Element;
	className?: string;
	style?: CSSProperties;
	onChange?: (args: onChangeArgs) => void;
	value?: number;
	initialValues?: InitialValues;
}

export const ProductCard = ({
	children,
	product,
	className,
	style,
	onChange,
	value,
	initialValues,
}: Props) => {
	const { counter, increaseBy, maxQuantity, isMaxCountReached, reset } =
		useProduct({
			onChange,
			product,
			value,
			initialValues,
		});
	return (
		<Provider
			value={{
				counter,
				increaseBy,
				product,
				maxQuantity,
			}}
		>
			<div className={`${styles.productCard} ${className}`} style={style}>
				{children({
					count: counter,
					isMaxCountReached,
					maxCount: initialValues?.maxQuantity,
					product,
					increaseBy,
					reset,
				})}
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
