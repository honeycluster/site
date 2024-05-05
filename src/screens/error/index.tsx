import React, { useEffect, useState } from 'react';

import { useNavigate, useRouteContext, useRouter } from '@tanstack/react-router';
import { General } from '@/components/general/template';

import Logo from '@components/general/assets/images/svg/brand/logo.svg';

interface Props {
  error?:string
}

export const Index = (props: Props) => {
  const router = useRouter()
  const nav = useNavigate();

  return (
    <General>
    <div className="tw-relative tw-h-screen tw-max-h-[1000px] tw-w-full tw-max-w-[1300px] tw-flex-shrink-0 tw-overflow-hidden tw-px-12 tw-pb-12 max-md:tw-px-1 tw-flex tw-justify-center tw-items-center">
      <div className='tw-flex tw-flex-col tw-gap-6 tw-w-full'>
    <div className="tw-justify-center tw-items-center tw-w-full tw-flex tw-gap-3">
      <Logo className="tw-aspect-square tw-w-[72px] tw-fill-b2" />
      </div>
      <div className='tw-w-full tw-border-b tw-border tw-border-br1'></div>
    <div className="tw-text-xl tw-font-normal tw-capitalize tw-text-t1 max-md:tw-items-center tw-text-center tw-flex tw-flex-col tw-w-full tw-justify-center tw-items-center tw-gap-2">
    <div>We encounted an error while rendering this page.</div>
    <div
              className="tw-flex tw-items-center tw-gap-3 hover:tw-cursor-pointer tw-text-t3 tw-text-base"
              onClick={router.history.back}>
              Back to previous page?
            </div>

            {props.error && <div className='tw-mt-2 tw-rounded-lg tw-border-br1 tw-border tw-p-2 tw-text-center tw-w-full tw-max-w-[400px] tw-break-all tw-text-t3 tw-text-base'>{props.error}</div>}

    </div>
    </div>
    </div>
    </General>
  );
};

export default Index;