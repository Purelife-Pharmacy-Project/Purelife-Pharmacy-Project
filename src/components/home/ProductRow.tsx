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
}) => {
  const ref = useRef<any>(null);
  const [overflow, setOverflow] = useState<boolean>();

  useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      setOverflow(
        entries[0].target.scrollWidth > entries[0].target.clientWidth
      );
    });
    if (ref.current) {
      observer.observe(ref?.current);
      setOverflow(ref.current?.scrollWidth > ref.current?.clientWidth);
    }
    return () => ref.current && observer.unobserve(ref.current);
  }, [isLoading, products]);

  return (
    <Section className='relative w-screen overflow-hidden'>
      <div className='relative mb-8 flex items-center justify-between gap-3 overflow-hidden'>
        <h5 className='text-lg font-semibold capitalize lg:text-2xl'>
          {title}
        </h5>
        {moreLink ? (
          <Link href={moreLink} className='text-lg text-[#919191] lg:text-xl '>
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
            className={clsx({
              'scroll flex w-full flex-auto snap-x scroll-pb-10 flex-nowrap gap-5 overflow-x-auto scrollbar-hide':
                allowOverflow,
              'grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3':
                !allowOverflow,
            })}
          >
            {products?.map((product) => (
              <ProductComp key={product.id} product={product} />
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
    </Section>
  );
};

export default ProductRow;
