import React, { useEffect, useState } from 'react';

import { useNavigate } from '@tanstack/react-router';

import Logo from '@components/general/assets/images/svg/brand/logo.svg';

export const Index = () => {
  const nav = useNavigate();

  return (
    <div className="tw-relative tw-h-screen tw-max-h-[1000px] tw-w-full tw-max-w-[1300px] tw-flex-shrink-0 tw-overflow-hidden tw-px-12 tw-pb-12 max-md:tw-px-1 tw-flex tw-justify-center tw-items-center">
      <div className="tw-justify-center tw-items-center tw-w-full tw-flex tw-flex-col tw-gap-6">
      <Logo className="tw-aspect-square tw-w-[72px] tw-fill-b2" />
      <div className="tw-text-xl tw-font-normal tw-capitalize tw-text-t1 max-md:tw-items-center tw-text-center tw-flex tw-flex-col tw-w-full tw-justify-center tw-items-center tw-gap-2">we are busy bees</div>
      <div className='tw-w-full tw-border-b tw-border tw-border-br1'></div>
      <div className="tw-justify-center tw-items-center tw-w-full tw-flex tw-flex-col tw-gap-1">
      <div className="tw-text-lg tw-font-normal tw-capitalize tw-text-t1 max-md:tw-items-center tw-text-center tw-flex tw-flex-col tw-w-full tw-justify-center tw-items-center tw-gap-2">This page is still in development</div>
      <div className="tw-flex tw-items-center tw-gap-3 hover:tw-cursor-pointer tw-text-t3 tw-text-base">Please come back at a later time</div>
      </div>
      </div>
    </div>
  );
};

export default Index;