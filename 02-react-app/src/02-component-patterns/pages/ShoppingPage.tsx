import { useState } from "react";
import {
	ProductButtons,
	ProductCard,
	ProductImage,
	ProductTitle,
} from "../components/";
import "../styles/custom-styles.css";
import { products } from "../data/products";

const product = products[0];

export const ShoppingPage = () => {
	return (
		<div>
			<h1>Shopping Page</h1>
			<hr />
			<ProductCard
				product={product}
				className="bg-dark text-white"
				key={product.id}
				initialValues={{
					quantity: 4,
					maxQuantity: 10,
				}}
			>
				{(mensaje) => (
					<>
						<ProductImage
							className="custom-image"
							style={{ boxShadow: "10px 10px 10px rgba(0,0,0,0.2)" }}
						/>
						<ProductTitle className="text-bold" />
						<ProductButtons className="custom-buttons" />
						<h1>{mensaje}</h1>
					</>
				)}
			</ProductCard>
		</div>
	);
};
