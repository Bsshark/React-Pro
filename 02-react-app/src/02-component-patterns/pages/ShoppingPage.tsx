import { useState } from "react";
import {
	ProductButtons,
	ProductCard,
	ProductImage,
	ProductTitle,
} from "../components/";
import { Product } from "../interfaces/ProductInterfaces";
import "../styles/custom-styles.css";

const product1 = {
	id: "1",
	title: "Coffee Mug - Card",
	img: "./coffee-mug.png",
};
const product2 = {
	id: "2",
	title: "Coffee Mug - Meme",
	img: "./coffee-mug2.png",
};

const products: Product[] = [product1, product2];

interface ProductInCart extends Product {
	quantity: number;
}

export const ShoppingPage = () => {
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
			if (quantity < 1) {
				const { [product.id]: toDelete, ...newCart } = oldShoppingCart;
				return newCart;
			}
			return {
				...oldShoppingCart,
				[product.id]: { ...product, quantity },
			};
		});
	};

	return (
		<div>
			<h1>Shopping Page</h1>
			<hr />
			<div
				style={{
					display: "flex",
					flexDirection: "row",
					flexWrap: "wrap",
				}}
			>
				{products.map((product) => {
					return (
						<>
							<ProductCard
								product={product}
								className="bg-dark text-white"
								key={product.id}
								value={shoppingCart[product.id]?.quantity || 0}
								onChange={onProductQuantityChange}
							>
								<ProductImage
									className="custom-image"
									style={{ boxShadow: "10px 10px 10px rgba(0,0,0,0.2)" }}
								/>
								<ProductTitle className="text-white" />
								<ProductButtons
									className="custom-buttons"
									style={{
										display: "flex",
										justifyContent: "center",
									}}
								/>
							</ProductCard>
						</>
					);
				})}
			</div>
			<div className="shopping-cart">
				{Object.entries(shoppingCart).map(([key, product]) => (
					<ProductCard
						key={key}
						product={product}
						className="bg-dark"
						style={{ width: "100px" }}
						value={product.quantity}
						onChange={onProductQuantityChange}
					>
						<ProductImage
							className="custom-image"
							style={{ boxShadow: "10px 10px 10px rgba(0,0,0,0.2)" }}
						/>
						<ProductButtons className="custom-buttons" />
					</ProductCard>
				))}

				{/* Object.keys(shoppingCart).map((value) => (
					<ProductCard
						product={shoppingCart[value]}
						className="bg-dark"
						style={{ width: "100px" }}
					>
						<ProductImage
							className="custom-image"
							style={{ boxShadow: "10px 10px 10px rgba(0,0,0,0.2)" }}
						/>
						<ProductButtons className="custom-buttons" />
					</ProductCard>
				)) */}
			</div>
		</div>
	);
};
