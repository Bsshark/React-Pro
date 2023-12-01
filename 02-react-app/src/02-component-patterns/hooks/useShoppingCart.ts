import { useState } from "react";
import { Product, ProductInCart } from "../interfaces/ProductInterfaces";


export const useShoppingCart = () => {
	const [shoppingCart, setShoppingCart] = useState<{
		[key: string]: ProductInCart;
	}>({});

	const onProductQuantityChange = ({
		quantity,
		product,
	}: {
		quantity: number;
		product: Product;
	}) => {
		setShoppingCart((oldShoppingCart) => {
			if (quantity === 0) {
				const { [product.id]: toDelete, ...newCart } = oldShoppingCart;
				return newCart;
			}
			return {
				...oldShoppingCart,
				[product.id]: { ...product, quantity },
			};

			/* const productInCart: ProductInCart = oldShoppingCart[product.id] || {
				...product,
				quantity: 0,
			};

			if (Math.max(productInCart.quantity + quantity, 0) > 0) {
				productInCart.quantity += quantity;
				return {
					...oldShoppingCart,
					[productInCart.id]: productInCart,
				};
			}

			const { [product.id]: toDelete, ...newCart } = oldShoppingCart;
			return newCart; */
		});
	};

    return {
        onProductQuantityChange,
        shoppingCart
    }
};
