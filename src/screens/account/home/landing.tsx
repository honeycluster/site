import React, { useEffect, useState } from 'react';
import Image from 'next/image';

import Icons from '@icons/index';
import { useNavigate } from '@tanstack/react-router';

export const Landing = () => {
  const nav = useNavigate();

  return (
    <div className="tw-relative tw-h-screen tw-max-h-[1000px] tw-w-full tw-max-w-[1300px] tw-flex-shrink-0 tw-overflow-hidden tw-px-12 tw-pb-12 max-md:tw-px-1">
      <Image
        loading="eager"
        src={''}
        alt=""
        className="tw-absolute tw-left-0 tw-top-[70px] tw-z-0 tw-h-fit tw-w-full tw-max-w-[1300px] tw-object-cover max-md:tw-w-[175%]"></Image>
      <div className="tw-relative tw-flex tw-h-full tw-w-full tw-flex-col tw-items-start tw-justify-start tw-gap-6 tw-px-8 tw-pt-[70px] max-md:tw-items-center max-md:tw-px-1">
        <div className="tw-flex tw-flex-col tw-items-start tw-justify-center tw-gap-4">
          <div className="tw-flex tw-h-fit tw-gap-6 tw-text-2xl tw-font-semibold tw-text-t1 tw-drop-shadow max-sm:tw-text-base">
            the hive of the xrp ledger
          </div>
          <Image loading="eager" src={''} alt="" className="tw-h-fit tw-w-[600px]"></Image>
        </div>
      </div>
    </div>
  );
};
