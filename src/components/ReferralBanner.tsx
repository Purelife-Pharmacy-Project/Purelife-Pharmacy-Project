"use client";
import React, { useState } from 'react';
import { IconReferral } from './icons/IconReferral';
import ReferralModal from './referral-modal/Modal';

type Prop = {};

const ReferralBanner: React.FC<Prop> = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <><div className='flex items-center justify-center gap-5 bg-primary py-3 '>
      <IconReferral />
      <p  className='text-sm text-white md:text-lg'>
      Refer a friend, Earn Rewards{' '}
        <span
          onClick={() => { setShowModal(true) }}
          className='cursor-pointer text-sm capitalize text-white underline md:text-lg'
        >
          Let’s Go
        </span>
      </p>
    </div>
    {showModal && (
        <ReferralModal
          onClose={() => setShowModal(false)} 
        />
      )}
    </>
    
  );
};

export default ReferralBanner;
