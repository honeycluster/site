import React, { useEffect, useState } from 'react';

import { useNavigate, useRouteContext, useRouter } from '@tanstack/react-router';
import { General } from '@/components/general/template';

import Logo from '@components/general/assets/images/svg/brand/logo.svg';


export const Index = () => {
  const router = useRouter()
  const nav = useNavigate();

  return (
    <General>
    <div className="tw-relative tw-h-screen tw-max-h-[1000px] tw-w-full tw-max-w-[1300px] tw-flex-shrink-0 tw-overflow-hidden tw-px-12 tw-pb-12 max-md:tw-px-1 tw-flex tw-justify-center tw-items-center">
    <div className='tw-flex tw-flex-col tw-gap-6 tw-w-full'>
    <div className="tw-text-8xl tw-font-bold tw-capitalize tw-text-b2 tw-text-center tw-justify-center tw-items-center tw-w-full tw-flex tw-gap-3">
      <div>4</div>
      <Logo className="tw-aspect-square tw-w-[72px] tw-fill-b2" />
      <div>4</div>
      </div>
      <div className='tw-w-full tw-border-b tw-border tw-border-br1'></div>
    <div className="tw-text-xl tw-font-normal tw-capitalize tw-text-t1 max-md:tw-items-center tw-text-center tw-flex tw-flex-col tw-w-full tw-justify-center tw-items-center tw-gap-2">Oops! Page not found. 
    <div
              className="tw-flex tw-items-center tw-gap-3 hover:tw-cursor-pointer tw-text-t3 tw-text-base"
              onClick={router.history.back}>
              Back to previous page?
            </div>
    </div>
    </div>
    </div>
    </General>
  );
};

export default Index;