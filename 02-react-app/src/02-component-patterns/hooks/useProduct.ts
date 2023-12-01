import { useEffect, useRef, useState } from "react";
import { InitialValues, Product, onChangeArgs } from "../interfaces/ProductInterfaces";

interface useProductArgs {
	product: Product;
	onChange?: (args: onChangeArgs) => void;
	value?: number;
	initialValues?: InitialValues
}

export const useProduct = ({
	onChange,
	product,
	value = 0,
	initialValues
}: useProductArgs) => {
	const [counter, setCounter] = useState<number>(initialValues?.quantity || value);
	const isMounted = useRef(false);

	const increaseBy = (value: number) => {
		let newValue = Math.max(counter + value, 0);
		//const max = initialValues?.maxQuantity || newValue;

		newValue = Math.min(newValue, initialValues?.maxQuantity || newValue);

		setCounter(newValue);

		onChange && onChange({ quantity: newValue, product }); //si no existe
	};

	useEffect(() => {
		if(!isMounted.current) return;
		else isMounted.current = true;
		setCounter(value);
	}, [value]);

	

	return {
		counter,
		increaseBy
	}
};
