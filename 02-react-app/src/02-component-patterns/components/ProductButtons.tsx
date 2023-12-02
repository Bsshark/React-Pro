import { CSSProperties, useCallback, useContext } from "react";
import styles from "../styles/styles.module.css";
import { ProductContext } from "./ProductCard";

export interface Props {
	className?: string;
	style?: CSSProperties;
}

export const ProductButtons = ({ className, style }: Props) => {
	const { increaseBy, counter, maxQuantity } = useContext(ProductContext);

	// TODO useCallback isMaxReached [quantity, maxQuantity]
	const isMaxReached = useCallback(() => {
		return maxQuantity === counter ? true : false;
	}, [counter, maxQuantity]);
	const isMinReached = useCallback(() => {
		return counter === 0 ? true : false;
	}, [counter]);

	return (
		<div className={`${styles.buttonsContainer} ${className}`} style={style}>
			<button
				className={`${styles.buttonMinus} ${
					isMinReached() ? styles.disabled : ""
				}`}
				onClick={() => increaseBy(-1)}
			>
				-
			</button>

			<div className={styles.countLabel}> {counter} </div>
			<button
				className={`${styles.buttonAdd} ${
					isMaxReached() ? styles.disabled : ""
				}`}
				onClick={() => increaseBy(1)}
			>
				+
			</button>
		</div>
	);
};
