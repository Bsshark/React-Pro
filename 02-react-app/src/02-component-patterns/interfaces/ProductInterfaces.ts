import { Props as ProductCardProps } from "../components/ProductCard";
import { Props as ProductTitleProps } from "../components/ProductTitle";
import { Props as ProductButtonsProp } from "../components/ProductButtons";
import { Props as ProductImageProps } from "../components/ProductImage";

export interface Product {
	id: string;
	title: string;
	img?: string;
}

export interface ProductContextProps {
	counter: number;
	increaseBy: (value: number) => void;
	product: Product;
	maxQuantity?: number
}

export interface ProductCardHOCProps {
	({ children, product }: ProductCardProps): JSX.Element;
	Title: (Props: ProductTitleProps) => JSX.Element;
	Image: (Props: ProductImageProps) => JSX.Element;
	Buttons: (Props: ProductButtonsProp) => JSX.Element;
}

export interface onChangeArgs {
	product: Product;
	quantity: number;
}

export interface ProductInCart extends Product {
	quantity: number;
}

export interface InitialValues {
	quantity?: number;
	maxQuantity?: number;
}

export interface ProductCardHandlers {
	count: number;
	isMaxCountReached: boolean;
	maxCount?: number;
	product: Product;

	increaseBy: (value: number) => void;
	reset: () => void;
}