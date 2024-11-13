import { IconWhatsapp } from '@/components/icons/social/IconWhatsapp';
import { Button, Link } from '@nextui-org/react';

export const WhatsappButton = () => {
  return (
    <Button
      className='fixed bottom-24 z-[10] right-6 h-14 w-14 p-2 shadow-md lg:bottom-24 lg:right-6 lg:h-[60px] lg:w-[60px]'
      color='success'
      size='lg'
      radius={'full'}
      as={Link}
      target='_blank'
      isIconOnly
      href={'https://wa.me/2348090564568'}
    >
      <IconWhatsapp />
    </Button>
  );
};
