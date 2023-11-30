import {
	ProductButtons,
	ProductCard,
	ProductImage,
	ProductTitle,
} from "../components/";
import "../styles/custom-styles.css";

const product = {
	id: "1",
	title: "Coffee Mug",
	img: "./coffee-mug.png",
};

const products = [
	{
		id: "1",
		title: "Coffee Mug",
		img: "./coffee-mug.png",
	},
	/* {
    id: "2",
    title: "Coffee Mug 2",
    img: "./coffee-mug.png",
  },
  {
    id: "3",
    title: "Coffee Mug 3",
    img: "./coffee-mug.png",
  }, */
];

export const ShoppingPage = () => {
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
							<ProductCard product={product}>
								<ProductCard.Image />
								<ProductCard.Title />
								<ProductCard.Buttons />
							</ProductCard>

							<ProductCard product={product}>
								<ProductImage />
								<ProductTitle />
								<ProductButtons />
							</ProductCard>
						</>
					);
				})}
				<ProductCard product={product} className="bg-dark text-white">
					<ProductCard.Image className="custom-image" />
					<ProductCard.Title className="text-white" />
					<ProductCard.Buttons className="custom-buttons" />
				</ProductCard>
				<ProductCard product={product} className="bg-dark">
					<ProductImage className="custom-image" style={{ boxShadow: "10px 10px 10px rgba(0,0,0,0.2)" }}/>
					<ProductTitle className="text-white" />
					<ProductButtons className="custom-buttons" />
				</ProductCard>
				<ProductCard
					product={product}
					style={{
						backgroundColor: "#70D1F8",
					}}
				>
					<ProductImage
						style={{ boxShadow: "10px 10px 10px rgba(0,0,0,0.2)" }}
					/>
					<ProductTitle style={{ fontWeight: "bold" }} />
					<ProductButtons
						style={{
							display: "flex",
							justifyContent: "end",
						}}
					/>
				</ProductCard>
			</div>
		</div>
	);
};
