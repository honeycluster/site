import React, { useEffect, useState } from 'react';

import Meta from '@meta/index';

import { useNavigate, useRouteContext, useRouter } from '@tanstack/react-router';
import { General } from '@/components/general/template';

import Logo from '@components/general/assets/images/svg/brand/logo.svg';

export const Index = () => {
  const router = useRouter();

  return (
    <>
      <Meta />
      <General>
        <div className="tw-relative tw-flex tw-h-screen tw-max-h-[1000px] tw-w-full tw-max-w-[1300px] tw-flex-shrink-0 tw-items-center tw-justify-center tw-overflow-hidden tw-px-12 tw-pb-12 max-md:tw-px-1">
          <div className="tw-flex tw-w-full tw-flex-col tw-gap-6">
            <div className="tw-flex tw-w-full tw-items-center tw-justify-center tw-gap-3 tw-text-center tw-text-8xl tw-font-bold tw-capitalize tw-text-b2">
              <div>4</div>
              <Logo className="tw-aspect-square tw-w-[72px] tw-fill-b2" />
              <div>4</div>
            </div>
            <div className="tw-w-full tw-border tw-border-b tw-border-br1"></div>
            <div className="tw-flex tw-w-full tw-flex-col tw-items-center tw-justify-center tw-gap-2 tw-text-center tw-text-xl tw-font-normal tw-capitalize tw-text-t1 max-md:tw-items-center">
              Oops! Page not found.
              <div
                className="tw-flex tw-items-center tw-gap-3 tw-text-base tw-text-t3 hover:tw-cursor-pointer"
                onClick={router.history.back}>
                Back to previous page?
              </div>
            </div>
          </div>
        </div>
      </General>
    </>
  );
};

export default Index;
