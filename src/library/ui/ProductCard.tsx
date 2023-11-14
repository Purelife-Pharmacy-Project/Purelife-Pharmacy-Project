import { FC } from 'react';

interface ProductCardProps {
  product: {
    name: string;
    price: number;
    image: string;
    id: string;
  };
}
export const ProductCard: FC<ProductCardProps> = ({ product }) => {
  return <p>hello there</p>;
};
