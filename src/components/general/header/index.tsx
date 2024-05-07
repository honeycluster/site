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
    <div
      className={`tw-fixed tw-z-20 tw-flex tw-h-[70px] tw-w-full tw-select-none tw-items-center tw-justify-center tw-py-4 ${isOpen && 'tw-border-b tw-border-br1 tw-bg-b1'}`}>
      <div className="tw-flex tw-w-full tw-max-w-[2000px] tw-items-center tw-justify-center tw-gap-6 tw-px-6">
        <div
          className="tw-flex tw-w-fit tw-items-center tw-justify-center tw-gap-3"
          onClick={() => nav({ to: '/' })}>
          <Logo className="tw-aspect-square tw-w-10 tw-fill-t1 max-md:tw-hidden" />
          <Title className="tw-aspect-auto tw-h-5 tw-w-fit tw-fill-t1 tw-object-cover" />
        </div>
        <div className="tw-relative tw-flex tw-h-full tw-grow tw-overflow-hidden" />

        <button
          className="tw-flex tw-h-full tw-w-fit tw-flex-shrink-0 tw-items-center tw-justify-center tw-gap-4 tw-overflow-hidden tw-whitespace-nowrap tw-rounded-full tw-bg-t1 tw-stroke-t2 tw-p-2 tw-px-4 tw-text-sm tw-font-medium tw-tracking-wider tw-text-b1 hover:tw-cursor-pointer hover:tw-bg-b2 hover:tw-text-t1 max-md:tw-hidden"
          onClick={() => nav({ to: '/join' })}>
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
