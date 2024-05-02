import React, { Dispatch, SetStateAction, useEffect } from 'react';

import Image from 'next/image';

import Logo from 'src/components/general/assets/images/svg/brand/logo.svg';
import Title from 'src/components/general/assets/images/svg/brand/title.svg';

import Icons from '@icons/index';
import { useNavigate } from '@tanstack/react-router';
import { HeaderProvider, useHeaderContext } from './context';
import { AnimatePresence } from 'framer-motion';
import Nav from './nav';
import Hamburger from './menu';

interface Props {
  setIsError?: Dispatch<SetStateAction<boolean>>;
}

const Header = (props: Props) => {
  const [isOpen, setIsOpen] = useHeaderContext().isOpen;
  const nav = useNavigate();

  return (
    <div className="tw-bg-b1 tw-fixed tw-z-20 tw-flex tw-h-[70px] tw-w-full tw-select-none tw-items-center tw-justify-center tw-border-b tw-border-white tw-py-4">
      <div className="tw-flex tw-w-full tw-max-w-[1300px] tw-items-center tw-justify-center tw-gap-6 tw-px-6">
        <div className="tw-flex tw-w-fit tw-items-center tw-justify-center tw-gap-3">
          <Logo className="tw-aspect-square tw-w-10 tw-fill-white max-md:tw-hidden" />
          <Title className="tw-aspect-auto tw-h-5 tw-w-fit tw-fill-white tw-object-cover" />
        </div>
        <div className="tw-relative tw-flex tw-h-full tw-grow tw-overflow-hidden" />

        <button
          className="tw-flex tw-h-full tw-w-fit tw-flex-shrink-0 tw-items-center tw-justify-center tw-gap-2 tw-whitespace-nowrap tw-rounded-md tw-stroke-white tw-p-3 tw-px-4 tw-text-xs tw-uppercase tw-leading-tight tw-tracking-widest tw-text-white hover:tw-cursor-pointer hover:tw-bg-[#1D8DFF]  max-md:tw-hidden"
          onClick={() => nav({ to: '/bridge' })}>
          <Icons.Route className="tw-aspect-square tw-h-4 tw-stroke-2 hover:tw-cursor-pointer" />
          Bridge
        </button>

        <button
          className="tw-border-br1 tw-bg-t1 tw-stroke-t2 tw-flex tw-h-full tw-w-fit tw-flex-shrink-0 tw-items-center tw-justify-center tw-gap-4 tw-overflow-hidden tw-whitespace-nowrap tw-rounded-lg tw-border tw-bg-white tw-p-3 tw-px-4 tw-text-xs tw-font-semibold tw-uppercase tw-leading-tight tw-tracking-widest tw-text-[#4AA4FF] hover:tw-cursor-pointer hover:tw-bg-[#FFF846]  max-md:tw-hidden"
          onClick={() => window.open('https://docs.crossmark.io', 'blank')}>
          Join the Hive!
        </button>
        <Hamburger />
      </div>
      <AnimatePresence mode="wait">
        {isOpen && <Nav isOpen={isOpen} {...props} close={() => close} />}
      </AnimatePresence>
    </div>
  );
};

const Index = (props: Props) => {
  return (
    <HeaderProvider>
      <Header {...props} />
    </HeaderProvider>
  );
};

export default Index;
