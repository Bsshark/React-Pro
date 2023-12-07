import {
	ProductButtons,
	ProductCard,
	ProductImage,
	ProductTitle,
} from "../components/";
import { products } from "../data/products";

const product = products[0];

export const ShoppingPage = () => {
	return (
		<div>
			<h1>Shopping Page</h1>
			<hr />
			<ProductCard
				product={product}
				key={product.id}
				initialValues={{
					quantity: 4,
					maxQuantity: 10,
				}}
			>
				{({ reset, increaseBy, isMaxCountReached, count }) => (
					<>
						<ProductImage />
						<ProductTitle />
						<ProductButtons />
						{/* <button onClick={reset}>Reset</button>
						<button onClick={() => increaseBy(-2)}>-2</button>

						<button style={{visibility: isMaxCountReached?'hidden':'visible'}}>+2</button>
						<span>{count}</span> */}
					</>
				)}
			</ProductCard>
		</div>
	);
};
