import "./App.css";
import {
	ProductCard,
	ProductImage,
	ProductTitle,
	ProductButtons,
} from "adlg-product-card";

const product = {
  id: '1',
  title: 'Coffee Mug',
  img: './coffee-mug.png'
}

function App() {
	return (
		<div className="App App-header">
			<ProductCard
				product={product}
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
            {/* {count}
            <button onClick={reset}>Reset</button> */}
					</>
				)}
			</ProductCard>
		</div>
	);
}

export default App;
