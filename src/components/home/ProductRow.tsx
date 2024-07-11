import React, { ReactElement } from 'react';
import { Product } from '@/services/products/types';
import { Link } from '@nextui-org/react';
import { Section } from '@/components/home/Section';

type Prop = {
  title: string;
  moreLink: string;
  products?: Product[];
  isLoading: boolean;
  loader: ReactElement;
  ProductComp: React.FC<{ product: Product }>;
  emptyMessage: string;
};

const ProductRow: React.FC<Prop> = ({
  products,
  isLoading,
  moreLink,
  title,
  ProductComp,
  emptyMessage,
  loader,
}) => {
  return (
    <Section>
      <div className='mb-8 flex items-center justify-between gap-3'>
        <h5 className='text-lg font-semibold capitalize lg:text-2xl'>
          {title}
        </h5>
        <Link href={moreLink} className='text-lg text-[#919191] lg:text-xl '>
          Shop All
        </Link>
      </div>
      {isLoading ? (
        loader
      ) : (
        <div className='grid grid-flow-row grid-cols-2 gap-5 lg:grid-cols-4'>
          {products?.map((product) => (
            <ProductComp key={product.id} product={product} />
          ))}
        </div>
      )}
      {(!isLoading && !products) || products?.length === 0 ? (
        <p className='text-center text-sm text-header-100'>{emptyMessage}</p>
      ) : null}
    </Section>
  );
};

export default ProductRow;
