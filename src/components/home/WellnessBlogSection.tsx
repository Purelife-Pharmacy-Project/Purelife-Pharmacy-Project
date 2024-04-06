import { Button } from '@nextui-org/react';
import { BlogCard } from '../blog/BlogCard';
import { Section } from './Section';

export const WellnessBlogSection = () => {
  const blogPosts = [
    {
      title: 'The effects of drug abuse',
      category: 'Medicine',
      description:
        'Drug abuse has a ripple effect that impacts not only the user but everyone around...',
      date: '1 Day ago',
      image: 'https://placehold.co/600x400',
      link: '#',
    },
    {
      title: 'Ulcer signs we ignore',
      category: 'Rest',
      description:
        "Ulcer signs are more common than you think and can be easily ignored. It's important to...",
      date: '1 Day ago',
      image: 'https://placehold.co/600x400',
      link: '#',
    },
    {
      title: 'Endometriosis',
      category: 'Health',
      description:
        "Endometriosis is a medical condition that affects many women. If you're not familiar...",
      date: '1 Day ago',
      image: 'https://placehold.co/600x400',
      link: '#',
    },
  ];

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

          <div className='grid grid-cols-2 lg:grid-cols-3'>
            {blogPosts.map((post, index) => (
              <BlogCard key={index} post={post} />
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
};
