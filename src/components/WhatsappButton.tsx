import { Button, Link } from '@nextui-org/react';
import { IconWhatsapp } from '@/components/icons/social/IconWhatsapp';

export const WhatsappButton = () => {
  return (
    <Button
      className='fixed bottom-4 right-4 h-[60px] w-[60px] p-2 shadow-md lg:bottom-24 lg:right-8'
      color='success'
      size='lg'
      radius={'full'}
      as={Link}
      isIconOnly
      href={'https://wa.me/2348090564568'}
    >
      <IconWhatsapp />
    </Button>
  );
};
