import { Button } from '@nextui-org/react';
import { BlogCard } from '../blog/BlogCard';
import { Section } from './Section';

export const WellnessBlogSection = () => {
  return (
    <div className='grid justify-center lg:pb-10 lg:pt-[55px]'>
      <Section>
        <div className='grid gap-10'>
          <div className='flex flex-col justify-between gap-4 md:flex-row md:gap-0'>
            <div className='grid gap-2'>
              <h1 className='text-start text-xl font-bold text-header-100 lg:text-4xl'>
                Wellness Blog
              </h1>
              <p className='text-content lg:max-w-[476px] lg:text-lg'>
                Subscribe to medication refills, book laboratory tests, and
                schedule vaccinations all in one place.
              </p>
            </div>

            <Button
              radius='full'
              size='lg'
              className='border-header-100 bg-primaryLight px-12 text-header-100'
              variant='bordered'
            >
              Visit Blog
            </Button>
          </div>

          <div className='grid grid-flow-dense gap-10 sm:grid-cols-2 lg:grid-flow-col'>
            {Array(3)
              .fill(null)
              .map((_, index) => (
                <BlogCard key={index} />
              ))}
          </div>
        </div>
      </Section>
    </div>
  );
};
