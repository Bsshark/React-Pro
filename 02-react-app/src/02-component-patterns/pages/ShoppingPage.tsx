import { ProductCard } from "../components/";

/* const product = {
  id: "1",
  title: "Coffee Mug",
}; */

const products = [
  {
    id: "1",
    title: "Coffee Mug",
    img: "./coffee-mug.png",
  },
  {
    id: "2",
    title: "Coffee Mug 2",
    img: "./coffee-mug.png",
  },
  {
    id: "3",
    title: "Coffee Mug 3",
    img: "./coffee-mug.png",
  },
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
            <ProductCard product={product}>
              <ProductCard.Image />
              <ProductCard.Title />
              <ProductCard.Buttons />
            </ProductCard>

            /*
            <ProductCard product={product}>
              <ProductImage />
              <ProductTitle />
              <ProductButtons />
            </ProductCard>
            */
          );
        })}
      </div>
    </div>
  );
};
