import { Card, CardBody, Chip, Image, Link } from '@nextui-org/react';
import { FC } from 'react';

type BlogCardProps = {
  post: {
    title: string;
    category: string;
    description: string;
    date: string;
    link: string;
    image: string;
  };
};

export const BlogCard: FC<BlogCardProps> = ({ post }) => {
  return (
    <Card shadow='none'>
      <CardBody>
        <Image
          src={post.image}
          className='w-full object-contain'
          alt={post.title}
        />
        <div className='mt-8 grid gap-2'>
          <Chip className='bg-primaryLight font-medium text-primary'>
            {post.category}
          </Chip>
          <Link
            href={post.link}
            className='max-w-[280px] text-lg font-medium text-header-100'
          >
            {post.title}
          </Link>
          <p className='w-full text-sm text-content'>{post.description}</p>
        </div>
      </CardBody>
    </Card>
  );
};
