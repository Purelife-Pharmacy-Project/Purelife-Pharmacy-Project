import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import { IconX } from '../icons/IconX';
import { useClickOutside } from '@/helpers/utils';
import { IconCopy } from '../icons/IconCopy';
import { Button, Link } from '@nextui-org/react';
import { useAuth } from '@/helpers/useContext/authContext';

interface ModalProps {
  onClose: () => void;
}

const ReferralModal: React.FC<ModalProps> = ({ onClose }) => {
  const modalRef = useRef<HTMLDivElement | null>(null);
  const btnRef = useRef<HTMLDivElement | null>(null);
  useClickOutside(modalRef, btnRef, onClose);
  const { isAuthenticated } = useAuth();

  return (
    <div className='fixed inset-0 z-[99999] flex items-center justify-center bg-black bg-opacity-50'>
      <div
        ref={modalRef}
        className='w-[90%] md:w-[50%] rounded-lg bg-white p-6'
      >
        <h2 className='mb-4 flex items-center justify-between text-3xl font-bold'>
          Refer and Earn
          <div className='cursor-pointer' onClick={onClose}>
            <IconX size={25} />
          </div>
        </h2>
        <div ref={btnRef} className='w-[75%] mx-auto'>
          <Image
            src={'/images/referral-gift-box.png'}
            alt={'referral gift box'}
            width={120}
            height={120}
            className='mx-auto mt-14 mb-6'
          />
          <p className='mb-6 text-center text-[#5A5A5A]'>
            Refer a friend earn 2% off all your friend’s purchases for 1 year as
            points. Your friend also earns ₦500 on signup. You can start using
            your points for purchases once it crosses over the 200 points
            threshold.
          </p>
          <p className='font-bold w-full text-center text-lg mb-5'>
            Your Referral Code
          </p>
          {isAuthenticated ? <div className='mx-auto flex justify-center w-[80%] gap-3 rounded-[30px] border border-[0.5px] bg-[#FBFBFB] py-4 font-medium mb-12'>
            PL - ASHLEYFK
            <IconCopy />
          </div>
            :
          <div className='text-center text-[#5A5A5A]'>
            <p>Sign up now to unlock your referral link and start earning amazing bonuses with <b className='text-[#1E272F]'>every friend you refer!</b> Don’t miss out on exclusive rewards—join today!</p>
            <Link href='/create-account' color='primary' className='mx-auto rounded-full py-4 text-white w-[25%] mt-8 bg-primary flex justify-center'>Join Now</Link>
          </div>}
        </div>
      </div>
    </div>
  );
};

export default ReferralModal;
