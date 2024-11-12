'use client';

import { Link } from '@nextui-org/react';

export const FooterBase = () => {
  const thisYear = new Date().getFullYear();
  return (
    <div className='flex justify-between'>
      <p className='text-light text-sm text-content'>
        © {thisYear} Purelife Health.
      </p>
      <div>
        <Link
          className='text-light text-sm text-content'
          href='/FAQ'>FAQ</Link>
        {' | '}
        <Link
          className='text-light text-sm text-content'
          href='/privacy-policy'>Privacy Policy</Link>
        {' | '}
        <Link
          className='text-light text-sm text-content'
          href='/terms-and-conditions'>Terms and Conditions</Link>
        {' | '}
        <Link
          className='text-light text-sm text-content'
          href='/cookie-policy'>Cookie Policy</Link>
      </div>
    </div>
  );
};
