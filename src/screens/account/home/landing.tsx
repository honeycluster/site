import React, { useEffect, useState } from 'react';
import Image from 'next/image';

import HoneycombVideo from 'src/components/general/assets/video/webm/honeycomb-video-trimmed.webm';
import HoneycombStill from 'src/components/general/assets/images/png/honeycomb-still-2k.png';

import Icons from '@icons/index';
import { useNavigate } from '@tanstack/react-router';

export const Landing = () => {
  const nav = useNavigate();

  return (
    <div className="tw-relative tw-h-screen tw-max-h-[1000px] tw-w-full tw-max-w-[1300px] tw-flex-shrink-0 tw-overflow-hidden tw-px-12 tw-pb-12 max-md:tw-px-1">
      <video
        autoPlay
        loop
        muted
        className="tw-absolute tw-left-0 tw-top-0 tw-z-0 tw-h-full tw-w-full tw-max-w-[1300px] tw-object-cover max-md:tw-w-[175%]">
        <source src={HoneycombVideo} type="video/webm" />
        Your browser does not support the video tag.
      </video>

      <div className="tw-absolute tw-left-0 tw-top-0 tw-z-0 tw-h-full tw-w-full tw-max-w-[1300px] tw-bg-gradient-to-r tw-from-b1 tw-via-[#000000dc] tw-to-transparent tw-object-cover max-md:tw-w-[175%]"></div>

      <div className="tw-relative tw-flex tw-h-full tw-w-full tw-flex-col tw-items-start tw-justify-start tw-gap-6 tw-px-8 tw-pt-[70px] max-md:tw-items-center max-md:tw-px-1">
        <div className="tw-flex tw-h-full tw-flex-col tw-items-start tw-justify-center tw-gap-10">
          <div className="tw-flex tw-h-fit tw-flex-col tw-gap-10 tw-text-3xl tw-font-semibold tw-text-t1 tw-drop-shadow max-sm:tw-text-base">
            <div className="tw-flex tw-flex-col tw-text-3xl">
              <div className="tw-font-light tw-capitalize">the</div>
              <div className="tw-text-8xl tw-font-bold tw-capitalize tw-text-b2">hive</div>
            </div>
            <div className="tw-flex tw-flex-col">
              <div className="tw-font-light">of the</div>
              <div className="tw-text-8xl tw-font-bold tw-capitalize tw-text-b2">XRP ledger</div>
            </div>
          </div>
          <div className="tw-flex tw-gap-4 tw-text-base tw-font-normal">
            <button
              className="tw-flex tw-h-full tw-w-fit tw-flex-shrink-0 tw-items-center tw-justify-center tw-gap-4 tw-overflow-hidden tw-whitespace-nowrap tw-rounded-full tw-border tw-border-br1 tw-bg-t1 tw-stroke-t2 tw-p-1 tw-px-6 tw-tracking-widest tw-text-b1 hover:tw-cursor-pointer hover:tw-bg-b2 hover:tw-text-t1 max-md:tw-hidden"
              onClick={() => nav({ to: '/join' })}>
              Learn More
            </button>
            <button
              className="tw-flex tw-h-full tw-w-fit tw-flex-shrink-0 tw-items-center tw-justify-center tw-gap-4 tw-overflow-hidden tw-whitespace-nowrap tw-rounded-full tw-border tw-border-br1 tw-bg-t1 tw-stroke-t2 tw-p-1 tw-px-6 tw-tracking-widest tw-text-b1 hover:tw-cursor-pointer hover:tw-bg-b2 hover:tw-text-t1 max-md:tw-hidden"
              onClick={() => nav({ to: '/join' })}>
              Start Building
            </button>
          </div>
        </div>
      </div>

      <div className="tw-absolute tw-bottom-0 tw-left-0 tw-flex tw-h-[70px] tw-w-full tw-items-center tw-justify-center tw-bg-b2 tw-pr-6">
        <Icons.ChevronDownDouble className="tw-h-full tw-w-fit tw-stroke-b1 tw-stroke-1 tw-p-4" />
        <div className="tw-flex tw-grow tw-flex-col tw-text-b1">
          <div className="tw-text-md tw-font-bold">
            Enterprise infrastructure and data provider for blockchain
          </div>
          <div className="tw-text-sm tw-font-light">Node clusters, data backups, api endpoints</div>
        </div>
        <div className="tw-flex tw-items-center tw-justify-center tw-gap-2 tw-rounded-full tw-bg-b1 tw-p-1 tw-px-4">
          <div className="tw-text-center tw-align-bottom tw-text-xs tw-font-medium">
            in development
          </div>
          <div className="tw-h-2 tw-w-2 tw-rounded-full tw-bg-blue-400"></div>
        </div>
      </div>
    </div>
  );
};
