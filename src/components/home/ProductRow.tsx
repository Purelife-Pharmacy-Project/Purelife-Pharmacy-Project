import React, { ReactElement, useEffect, useRef, useState } from 'react';
import { Product } from '@/services/products/types';
import { Link } from '@nextui-org/react';
import { Section } from '@/components/home/Section';
import { IconLeftArrow } from '@/components/icons/IconLeftArrow';
import { IconRightArrow } from '@/components/icons/IconRightArrow';
import clsx from 'clsx';

type Prop = {
  title: string;
  moreLink?: string;
  products?: Product[];
  isLoading: boolean;
  loader: ReactElement;
  ProductComp: React.FC<{ product: Product }>;
  emptyMessage: string;
  allowOverflow?: boolean;
  productClassName?: string;
  headerClassName?: string;
  rowClassName?: string;
  price: boolean;
  variant: any;
};

const ProductRow: React.FC<Prop> = ({
  products,
  isLoading,
  moreLink,
  title,
  ProductComp,
  emptyMessage,
  loader,
  allowOverflow = true,
  productClassName,
  headerClassName,
  variant,
  rowClassName,
  price,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [overflow, setOverflow] = useState<boolean>();

  useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      setOverflow(
        entries[0].target.scrollWidth > entries[0].target.clientWidth
      );
    });
    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
      setOverflow(currentRef?.scrollWidth > currentRef?.clientWidth);
    }
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [isLoading, products]);

  return (
    <div className={`relative overflow-hidden ${productClassName}`}>
      <div className={`relative mb-8 grid grid-cols-[3fr_1fr] gap-3 overflow-hidden ${headerClassName}`}>
        <h5 className={`text-lg font-medium capitalize lg:text-2xl`}>
          {title}
        </h5>
        {moreLink ? (
          <Link href={moreLink} className={`text-lg text-[#919191] lg:text-2xl h-fit`}>
            Shop All
          </Link>
        ) : null}
      </div>
      {isLoading ? (
        loader
      ) : (
        <>
          <button
            onClick={() =>
              ref.current?.scrollBy({
                left: -300,
                behavior: 'smooth',
              })
            }
            className={clsx(
              'absolute left-2 top-1/2 z-20 h-6 w-6 -translate-y-1/2 place-content-center rounded-full bg-[#FFEAED] shadow-md',
              { grid: overflow, hidden: !overflow }
            )}
          >
            <IconLeftArrow size={10} />
          </button>
          <div
            ref={ref}
            className={`${variant === 'normal' && 'grid lg:grid-cols-4 grid-cols-2 gap-5'} ${variant === 'hot offers' && 'grid grid-cols-2 gap-5'} ${variant === 'best sellers' && 'grid grid-cols-2 gap-5'}`}>
            {products?.slice(0, (variant === 'normal' || variant === 'hot offers') ? 4 : 3).map((product, index) => (
              <div
              key={product.id}
              className={`${(variant === 'best sellers' && index === 2) && 'col-span-2'}`}
            >
              <ProductComp product={product} />
            </div>
            ))}
          </div>
          <button
            onClick={() =>
              ref.current?.scrollBy({
                left: 300,
                behavior: 'smooth',
              })
            }
            className={clsx(
              'absolute right-2 top-1/2 z-20 h-6 w-6 -translate-y-1/2 place-content-center rounded-full bg-[#FFEAED] shadow-md',
              { grid: overflow, hidden: !overflow }
            )}
          >
            <IconRightArrow size={10} />
          </button>
        </>
      )}
      {(!isLoading && !products) || products?.length === 0 ? (
        <p className='text-center text-sm text-header-100'>{emptyMessage}</p>
      ) : null}
    </div>
  );
};

export default ProductRow;