'use client';

export const FooterBase = () => {
  const thisYear = new Date().getFullYear();
  return (
    <div className='flex justify-between'>
      <p className='text-light text-sm text-content'>
        © {thisYear} Purelife Health.
      </p>
      <p className='text-light text-sm text-content'>
        Privacy Policy | Terms and Conditions.
      </p>
    </div>
  );
};
